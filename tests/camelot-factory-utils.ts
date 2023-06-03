import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  FeePercentOwnershipTransferred,
  FeeToTransferred,
  OwnerFeeShareUpdated,
  OwnershipTransferred,
  PairCreated,
  ReferrerFeeShareUpdated,
  SetStableOwnershipTransferred
} from "../generated/CamelotFactory/CamelotFactory"

export function createFeePercentOwnershipTransferredEvent(
  prevOwner: Address,
  newOwner: Address
): FeePercentOwnershipTransferred {
  let feePercentOwnershipTransferredEvent = changetype<
    FeePercentOwnershipTransferred
  >(newMockEvent())

  feePercentOwnershipTransferredEvent.parameters = new Array()

  feePercentOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("prevOwner", ethereum.Value.fromAddress(prevOwner))
  )
  feePercentOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return feePercentOwnershipTransferredEvent
}

export function createFeeToTransferredEvent(
  prevFeeTo: Address,
  newFeeTo: Address
): FeeToTransferred {
  let feeToTransferredEvent = changetype<FeeToTransferred>(newMockEvent())

  feeToTransferredEvent.parameters = new Array()

  feeToTransferredEvent.parameters.push(
    new ethereum.EventParam("prevFeeTo", ethereum.Value.fromAddress(prevFeeTo))
  )
  feeToTransferredEvent.parameters.push(
    new ethereum.EventParam("newFeeTo", ethereum.Value.fromAddress(newFeeTo))
  )

  return feeToTransferredEvent
}

export function createOwnerFeeShareUpdatedEvent(
  prevOwnerFeeShare: BigInt,
  ownerFeeShare: BigInt
): OwnerFeeShareUpdated {
  let ownerFeeShareUpdatedEvent = changetype<OwnerFeeShareUpdated>(
    newMockEvent()
  )

  ownerFeeShareUpdatedEvent.parameters = new Array()

  ownerFeeShareUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevOwnerFeeShare",
      ethereum.Value.fromUnsignedBigInt(prevOwnerFeeShare)
    )
  )
  ownerFeeShareUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "ownerFeeShare",
      ethereum.Value.fromUnsignedBigInt(ownerFeeShare)
    )
  )

  return ownerFeeShareUpdatedEvent
}

export function createOwnershipTransferredEvent(
  prevOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("prevOwner", ethereum.Value.fromAddress(prevOwner))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPairCreatedEvent(
  token0: Address,
  token1: Address,
  pair: Address,
  length: BigInt
): PairCreated {
  let pairCreatedEvent = changetype<PairCreated>(newMockEvent())

  pairCreatedEvent.parameters = new Array()

  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("length", ethereum.Value.fromUnsignedBigInt(length))
  )

  return pairCreatedEvent
}

export function createReferrerFeeShareUpdatedEvent(
  referrer: Address,
  prevReferrerFeeShare: BigInt,
  referrerFeeShare: BigInt
): ReferrerFeeShareUpdated {
  let referrerFeeShareUpdatedEvent = changetype<ReferrerFeeShareUpdated>(
    newMockEvent()
  )

  referrerFeeShareUpdatedEvent.parameters = new Array()

  referrerFeeShareUpdatedEvent.parameters.push(
    new ethereum.EventParam("referrer", ethereum.Value.fromAddress(referrer))
  )
  referrerFeeShareUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevReferrerFeeShare",
      ethereum.Value.fromUnsignedBigInt(prevReferrerFeeShare)
    )
  )
  referrerFeeShareUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "referrerFeeShare",
      ethereum.Value.fromUnsignedBigInt(referrerFeeShare)
    )
  )

  return referrerFeeShareUpdatedEvent
}

export function createSetStableOwnershipTransferredEvent(
  prevOwner: Address,
  newOwner: Address
): SetStableOwnershipTransferred {
  let setStableOwnershipTransferredEvent = changetype<
    SetStableOwnershipTransferred
  >(newMockEvent())

  setStableOwnershipTransferredEvent.parameters = new Array()

  setStableOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("prevOwner", ethereum.Value.fromAddress(prevOwner))
  )
  setStableOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return setStableOwnershipTransferredEvent
}
