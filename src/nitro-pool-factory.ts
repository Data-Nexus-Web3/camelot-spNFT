import { BigInt } from "@graphprotocol/graph-ts";
import { Nitro } from "../generated/schema";
import {
  CreateNitroPool,
  OwnershipTransferred,
  PublishNitroPool,
  SetNitroPoolOwner,
} from "./../generated/NitroPoolFactory/NitroPoolFactory";
import { NitroPool } from "./../generated/templates";

export function handleCreateNitroPool(event: CreateNitroPool): void {
  let nitroPool = Nitro.load(event.params.nitroAddress.toHexString());

  if (!nitroPool) {
    nitroPool = new Nitro(event.params.nitroAddress.toHexString());
    nitroPool.createdAt = event.block.timestamp;
    nitroPool.depositAmount = BigInt.fromI32(0);
    nitroPool.withdrawAmount = BigInt.fromI32(0);

    nitroPool.save();

    NitroPool.create(event.params.nitroAddress);
  }
}
export function handlePublishNitroPool(event: PublishNitroPool): void {
  let nitroPool = Nitro.load(event.params.nitroAddress.toHexString());

  if (!nitroPool) {
    nitroPool = new Nitro(event.params.nitroAddress.toHexString());
    nitroPool.createdAt = event.block.timestamp;
    nitroPool.depositAmount = BigInt.fromI32(0);
    nitroPool.withdrawAmount = BigInt.fromI32(0);

    nitroPool.save();

    NitroPool.create(event.params.nitroAddress);
  }
}
