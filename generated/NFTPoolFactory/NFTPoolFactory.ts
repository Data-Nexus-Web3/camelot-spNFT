// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PoolCreated extends ethereum.Event {
  get params(): PoolCreated__Params {
    return new PoolCreated__Params(this);
  }
}

export class PoolCreated__Params {
  _event: PoolCreated;

  constructor(event: PoolCreated) {
    this._event = event;
  }

  get lpToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pool(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NFTPoolFactory extends ethereum.SmartContract {
  static bind(address: Address): NFTPoolFactory {
    return new NFTPoolFactory("NFTPoolFactory", address);
  }

  createPool(lpToken: Address): Address {
    let result = super.call("createPool", "createPool(address):(address)", [
      ethereum.Value.fromAddress(lpToken)
    ]);

    return result[0].toAddress();
  }

  try_createPool(lpToken: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("createPool", "createPool(address):(address)", [
      ethereum.Value.fromAddress(lpToken)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPool(param0: Address): Address {
    let result = super.call("getPool", "getPool(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_getPool(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("getPool", "getPool(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  grailToken(): Address {
    let result = super.call("grailToken", "grailToken():(address)", []);

    return result[0].toAddress();
  }

  try_grailToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("grailToken", "grailToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  master(): Address {
    let result = super.call("master", "master():(address)", []);

    return result[0].toAddress();
  }

  try_master(): ethereum.CallResult<Address> {
    let result = super.tryCall("master", "master():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pools(param0: BigInt): Address {
    let result = super.call("pools", "pools(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_pools(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("pools", "pools(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  poolsLength(): BigInt {
    let result = super.call("poolsLength", "poolsLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_poolsLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("poolsLength", "poolsLength():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  xGrailToken(): Address {
    let result = super.call("xGrailToken", "xGrailToken():(address)", []);

    return result[0].toAddress();
  }

  try_xGrailToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("xGrailToken", "xGrailToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get master_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get grailToken_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get xGrailToken_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreatePoolCall extends ethereum.Call {
  get inputs(): CreatePoolCall__Inputs {
    return new CreatePoolCall__Inputs(this);
  }

  get outputs(): CreatePoolCall__Outputs {
    return new CreatePoolCall__Outputs(this);
  }
}

export class CreatePoolCall__Inputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get lpToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CreatePoolCall__Outputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
