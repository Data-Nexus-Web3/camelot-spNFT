import {Protocol} from "./../generated/schema";
import {Address, BigInt, store} from "@graphprotocol/graph-ts";
import {spNFT} from "../generated/schema";
import {NFTPool as NFTPoolContract} from "../generated/templates/NFTPool/NFTPool";
import {
  AddToPosition,
  CreatePosition,
  EmergencyWithdraw,
  HarvestPosition,
  LockPosition,
  MergePositions,
  SetBoost,
  SetBoostMultiplierSettings,
  SetEmergencyUnlock,
  SetLockMultiplierSettings,
  SplitPosition,
  Transfer,
  WithdrawFromPosition,
} from "./../generated/templates/NFTPool/NFTPool";
import {getOrCreateAccount, getOrCreateNFTPool, getOrCreatespNFT, getProtocol} from "./utils/entity-factory";

export function handleCreatePosition(event: CreatePosition): void {
  let spNFT = getOrCreatespNFT(event.address, event.params.tokenId, event.block);
  spNFT.lockDuration = event.params.lockDuration;
  spNFT.lockStartTime = event.block.timestamp;

  spNFT.save();

  let owner = getOrCreateAccount(Address.fromBytes(spNFT.owner));
  owner.spNFTCount = owner.spNFTCount + 1;

  owner.save();
}

//
export function handleLockPosition(event: LockPosition): void {
  let spNFT = getOrCreatespNFT(event.address, event.params.tokenId, event.block);
  spNFT.lockDuration = event.params.lockDuration;
  spNFT.lockStartTime = event.block.timestamp;

  spNFT.save();
}

//
export function handleAddToPosition(event: AddToPosition): void {
  let spNFT = getOrCreatespNFT(event.address, event.params.tokenId, event.block);

  spNFT.amount = spNFT.amount.plus(event.params.amount);

  spNFT.save();
}

//
export function handleWithdrawFromPosition(event: WithdrawFromPosition): void {
  let spNFT = getOrCreatespNFT(event.address, event.params.tokenId, event.block);

  spNFT.amount = spNFT.amount.minus(event.params.amount);

  spNFT.save();

  if (spNFT.amount == BigInt.fromI32(0)) store.remove("spNFT", spNFT.id);
}

//
export function handleSetBoost(event: SetBoost): void {
  let spNFT = getOrCreatespNFT(event.address, event.params.tokenId, event.block);
  spNFT.boostPoints = event.params.boostPoints;

  let _NFTPool = NFTPoolContract.bind(event.address);

  let try_getStakingPosition = _NFTPool.try_getStakingPosition(event.params.tokenId);

  if (!try_getStakingPosition.reverted) {
    let results = try_getStakingPosition.value;
    spNFT.amount = results.value0;
    spNFT.lockStartTime = results.value2;
    spNFT.lockDuration = results.value3;
    spNFT.totalMultiplier = results.value7;
  }

  spNFT.save();
}

//
export function handleSetBoostMultiplierSettings(event: SetBoostMultiplierSettings): void {}

//
export function handleSplitPosition(event: SplitPosition): void {
  let spNFT = getOrCreatespNFT(event.address, event.params.tokenId, event.block);
  let owner = getOrCreateAccount(Address.fromBytes(spNFT.owner));

  spNFT.amount = spNFT.amount.minus(event.params.splitAmount);
  spNFT.save();

  let newspNFT = getOrCreatespNFT(event.address, event.params.newTokenId, event.block);
  newspNFT.owner = owner.id;
  newspNFT.amount = event.params.splitAmount;
  newspNFT.lockDuration = spNFT.lockDuration;
  newspNFT.lockStartTime = spNFT.lockStartTime;

  newspNFT.save();

  owner.spNFTCount = owner.spNFTCount + 1;
  owner.save();
}

//
export function handleMergePositions(event: MergePositions): void {
  let protocol = getProtocol();

  let spNFT = getOrCreatespNFT(event.address, event.params.tokenIds[0], event.block);
  let owner = getOrCreateAccount(Address.fromBytes(spNFT.owner));
  let tokenIds = event.params.tokenIds;
  for (let index = 1; index < tokenIds.length; index++) {
    let mergedPosition = getOrCreatespNFT(event.address, event.params.tokenIds[index], event.block);

    spNFT.amount = spNFT.amount.plus(mergedPosition.amount);
    store.remove("spNFT", mergedPosition.id);

    protocol.spNFTCount = protocol.spNFTCount - 1;
    owner.spNFTCount = owner.spNFTCount - 1;
  }
  //spNFT.lockDuration = event.params.

  protocol.save();
  owner.save();
  spNFT.save();
}

//
export function handleTransfer(event: Transfer): void {
  let spNFT = getOrCreatespNFT(event.address, event.params.tokenId, event.block);

  spNFT.owner = event.params.to;
  spNFT.tokenId = event.params.tokenId;

  spNFT.save();
}

//
export function handleSetEmergencyUnlock(event: SetEmergencyUnlock): void {
  let nftPool = getOrCreateNFTPool(event.address);

  nftPool.emergencyUnlock = event.params.emergencyUnlock;

  nftPool.save();
}

//
export function handleSetLockMultiplierSettings(event: SetLockMultiplierSettings): void {}
