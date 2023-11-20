import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { PoolCreated } from "../generated/Contract/Contract"

export function createPoolCreatedEvent(
  lpToken: Address,
  pool: Address
): PoolCreated {
  let poolCreatedEvent = changetype<PoolCreated>(newMockEvent())

  poolCreatedEvent.parameters = new Array()

  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("lpToken", ethereum.Value.fromAddress(lpToken))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )

  return poolCreatedEvent
}
