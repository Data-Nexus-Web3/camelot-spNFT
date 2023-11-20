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

export function handleHarvest(event: Harvest): void {
  let a = event.params.rewardsToken;
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
export function handlePublish(event: Publish): void {}
export function handleSetDateSettings(event: SetDateSettings): void {}
export function handleSetDescription(event: SetDescription): void {}
export function handleSetRewardsToken2(event: SetRewardsToken2): void {}
export function handleUpdatePool(event: UpdatePool): void {}

export function handleWithdraw(event: Withdraw): void {}
export function handleDeposit(event: Deposit): void {}
