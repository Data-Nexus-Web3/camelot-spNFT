import {Address} from "@graphprotocol/graph-ts";
import {CreateNitroPool, PublishNitroPool} from "./../generated/NitroPoolFactory/NitroPoolFactory";
import {getOrCreateNitro} from "./utils/entity-factory";

const PROTOCOL = Address.fromString("0x6dB1EF0dF42e30acF139A70C1Ed0B7E6c51dBf6d");

export function handleCreateNitroPool(event: CreateNitroPool): void {
  getOrCreateNitro(event.params.nitroAddress, event.block);
}

export function handlePublishNitroPool(event: PublishNitroPool): void {
  getOrCreateNitro(event.params.nitroAddress, event.block);
}
