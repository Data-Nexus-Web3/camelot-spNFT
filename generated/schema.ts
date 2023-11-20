// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Protocol extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Protocol entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Protocol must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Protocol", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Protocol | null {
    return changetype<Protocol | null>(
      store.get_in_block("Protocol", id.toHexString())
    );
  }

  static load(id: Bytes): Protocol | null {
    return changetype<Protocol | null>(store.get("Protocol", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get spNFTCount(): i32 {
    let value = this.get("spNFTCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set spNFTCount(value: i32) {
    this.set("spNFTCount", Value.fromI32(value));
  }

  get NFTPoolCount(): i32 {
    let value = this.get("NFTPoolCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set NFTPoolCount(value: i32) {
    this.set("NFTPoolCount", Value.fromI32(value));
  }

  get spNFT(): spNFTLoader {
    return new spNFTLoader("Protocol", this.get("id")!.toString(), "spNFT");
  }
}

export class Account extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Account must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Account | null {
    return changetype<Account | null>(
      store.get_in_block("Account", id.toHexString())
    );
  }

  static load(id: Bytes): Account | null {
    return changetype<Account | null>(store.get("Account", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get spNFTCount(): i32 {
    let value = this.get("spNFTCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set spNFTCount(value: i32) {
    this.set("spNFTCount", Value.fromI32(value));
  }

  get spNFT(): spNFTLoader {
    return new spNFTLoader("Account", this.get("id")!.toString(), "spNFT");
  }
}

export class NFTPool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTPool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NFTPool must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NFTPool", id.toString(), this);
    }
  }

  static loadInBlock(id: string): NFTPool | null {
    return changetype<NFTPool | null>(store.get_in_block("NFTPool", id));
  }

  static load(id: string): NFTPool | null {
    return changetype<NFTPool | null>(store.get("NFTPool", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get protocol(): Bytes {
    let value = this.get("protocol");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set protocol(value: Bytes) {
    this.set("protocol", Value.fromBytes(value));
  }

  get spNFTs(): spNFTLoader {
    return new spNFTLoader("NFTPool", this.get("id")!.toString(), "spNFTs");
  }

  get emergencyUnlock(): boolean {
    let value = this.get("emergencyUnlock");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set emergencyUnlock(value: boolean) {
    this.set("emergencyUnlock", Value.fromBoolean(value));
  }
}

export class spNFT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save spNFT entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type spNFT must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("spNFT", id.toString(), this);
    }
  }

  static loadInBlock(id: string): spNFT | null {
    return changetype<spNFT | null>(store.get_in_block("spNFT", id));
  }

  static load(id: string): spNFT | null {
    return changetype<spNFT | null>(store.get("spNFT", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get protocol(): Bytes {
    let value = this.get("protocol");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set protocol(value: Bytes) {
    this.set("protocol", Value.fromBytes(value));
  }

  get NFTPool(): string {
    let value = this.get("NFTPool");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set NFTPool(value: string) {
    this.set("NFTPool", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get nitro(): string | null {
    let value = this.get("nitro");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nitro(value: string | null) {
    if (!value) {
      this.unset("nitro");
    } else {
      this.set("nitro", Value.fromString(<string>value));
    }
  }

  get lockDuration(): BigInt | null {
    let value = this.get("lockDuration");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lockDuration(value: BigInt | null) {
    if (!value) {
      this.unset("lockDuration");
    } else {
      this.set("lockDuration", Value.fromBigInt(<BigInt>value));
    }
  }

  get lockStartTime(): BigInt | null {
    let value = this.get("lockStartTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lockStartTime(value: BigInt | null) {
    if (!value) {
      this.unset("lockStartTime");
    } else {
      this.set("lockStartTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get boostPoints(): BigInt | null {
    let value = this.get("boostPoints");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set boostPoints(value: BigInt | null) {
    if (!value) {
      this.unset("boostPoints");
    } else {
      this.set("boostPoints", Value.fromBigInt(<BigInt>value));
    }
  }

  get totalMultiplier(): BigInt | null {
    let value = this.get("totalMultiplier");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalMultiplier(value: BigInt | null) {
    if (!value) {
      this.unset("totalMultiplier");
    } else {
      this.set("totalMultiplier", Value.fromBigInt(<BigInt>value));
    }
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get boost(): boolean {
    let value = this.get("boost");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set boost(value: boolean) {
    this.set("boost", Value.fromBoolean(value));
  }
}

export class Nitro extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Nitro entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Nitro must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Nitro", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Nitro | null {
    return changetype<Nitro | null>(store.get_in_block("Nitro", id));
  }

  static load(id: string): Nitro | null {
    return changetype<Nitro | null>(store.get("Nitro", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get poolOwner(): Bytes | null {
    let value = this.get("poolOwner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set poolOwner(value: Bytes | null) {
    if (!value) {
      this.unset("poolOwner");
    } else {
      this.set("poolOwner", Value.fromBytes(<Bytes>value));
    }
  }

  get depositAmount(): BigInt {
    let value = this.get("depositAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set depositAmount(value: BigInt) {
    this.set("depositAmount", Value.fromBigInt(value));
  }

  get withdrawAmount(): BigInt {
    let value = this.get("withdrawAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set withdrawAmount(value: BigInt) {
    this.set("withdrawAmount", Value.fromBigInt(value));
  }

  get rewardTokens(): Array<string> | null {
    let value = this.get("rewardTokens");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rewardTokens(value: Array<string> | null) {
    if (!value) {
      this.unset("rewardTokens");
    } else {
      this.set("rewardTokens", Value.fromStringArray(<Array<string>>value));
    }
  }

  get stakedPositions(): spNFTLoader {
    return new spNFTLoader(
      "Nitro",
      this.get("id")!.toString(),
      "stakedPositions"
    );
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Token | null {
    return changetype<Token | null>(store.get_in_block("Token", id));
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }
}

export class spNFTLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): spNFT[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<spNFT[]>(value);
  }
}
