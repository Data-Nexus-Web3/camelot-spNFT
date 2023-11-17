// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class NFTPool extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("NFTPool", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext("NFTPool", [address.toHex()], context);
  }
}

export class NitroPool extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("NitroPool", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "NitroPool",
      [address.toHex()],
      context
    );
  }
}
