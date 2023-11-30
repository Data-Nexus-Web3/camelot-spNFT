import {
  Deposit,
  Harvest,
  OwnershipTransferred,
  Publish,
  SetDateSettings,
  SetDescription,
  SetRewardsToken2,
  UpdatePool,
  Withdraw,
} from "./../generated/templates/NitroPool/NitroPool";
import {GetOrCreateToken, getOrCreateNitro} from "./utils/entity-factory";

export function handleHarvest(event: Harvest): void {
  let nitro = getOrCreateNitro(event.address, event.block);

  let rewardsToken = GetOrCreateToken(event.params.rewardsToken);

  let array = nitro.rewardTokens;
  if (array) {
    array.push(rewardsToken.id);
  } else {
    array = [rewardsToken.id];
  }

  nitro.rewardTokens = array;
  nitro.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let nitro = getOrCreateNitro(event.address, event.block);
  nitro.poolOwner = event.params.newOwner;
  nitro.save();
}

export function handlePublish(event: Publish): void {
  //TBD if anything needs to happen with this
}
export function handleSetDateSettings(event: SetDateSettings): void {
  let nitro = getOrCreateNitro(event.address, event.block);
  nitro.harvestStartTime = event.params.harvestStartTime;
  nitro.depositEndTime = event.params.depositEndTime;
  nitro.endTime = event.params.endTime;
  nitro.save();
}
export function handleSetDescription(event: SetDescription): void {
  let nitro = getOrCreateNitro(event.address, event.block);
  nitro.description = event.params.description;
  nitro.save();
}
export function handleSetRewardsToken2(event: SetRewardsToken2): void {}
export function handleUpdatePool(event: UpdatePool): void {
  //uncertain what needs to happen with this
}

export function handleWithdraw(event: Withdraw): void {
  let nitro = getOrCreateNitro(event.address, event.block);
  nitro.withdrawAmount = nitro.withdrawAmount.plus(event.params.amount);
  nitro.amount = nitro.amount.minus(event.params.amount);
  nitro.save();
}
export function handleDeposit(event: Deposit): void {
  let nitro = getOrCreateNitro(event.address, event.block);
  nitro.depositAmount = nitro.depositAmount.plus(event.params.amount);
  nitro.amount = nitro.amount.plus(event.params.amount);
  nitro.save();
}
