import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { FeePercentOwnershipTransferred } from "../generated/schema"
import { FeePercentOwnershipTransferred as FeePercentOwnershipTransferredEvent } from "../generated/CamelotFactory/CamelotFactory"
import { handleFeePercentOwnershipTransferred } from "../src/camelot-factory"
import { createFeePercentOwnershipTransferredEvent } from "./camelot-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let prevOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newFeePercentOwnershipTransferredEvent = createFeePercentOwnershipTransferredEvent(
      prevOwner,
      newOwner
    )
    handleFeePercentOwnershipTransferred(newFeePercentOwnershipTransferredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FeePercentOwnershipTransferred created and stored", () => {
    assert.entityCount("FeePercentOwnershipTransferred", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FeePercentOwnershipTransferred",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "prevOwner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FeePercentOwnershipTransferred",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newOwner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
