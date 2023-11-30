import {Address, BigInt, Bytes, ethereum} from "@graphprotocol/graph-ts";
import {Account, NFTPool, NitroPool, Protocol, Token, spNFT} from "../../generated/schema";
import {ERC20} from "../../generated/templates/NitroPool/ERC20";
import {ERC20Bytes} from "../../generated/templates/NitroPool/ERC20Bytes";
import {NitroPool as NitroPoolTempate} from "../../generated/templates";

const PROTOCOL = Address.fromString("0x6dB1EF0dF42e30acF139A70C1Ed0B7E6c51dBf6d");

//get protocol etc
export function getProtocol(): Protocol {
  let protocol = Protocol.load(PROTOCOL);

  if (!protocol) {
    protocol = new Protocol(PROTOCOL);

    protocol.spNFTCount = 0;
    protocol.NFTPoolCount = 0;
  }
  return protocol as Protocol;
}

export function getOrCreateNFTPool(address: Address): NFTPool {
  let nftPool = NFTPool.load(address.toHexString());

  if (!nftPool) {
    nftPool = new NFTPool(address.toHexString());
    nftPool.emergencyUnlock = false;
    nftPool.protocol = PROTOCOL;
    nftPool.save();
  }

  return nftPool as NFTPool;
}

export function getOrCreatespNFT(address: Address, id: BigInt, block: ethereum.Block): spNFT {
  let _spNFTid = address.toHexString() + "-" + id.toString();
  let _spNFT = spNFT.load(_spNFTid);
  let nftPool = getOrCreateNFTPool(address);

  if (!_spNFT) {
    _spNFT = new spNFT(_spNFTid);
    let protocol = getProtocol();
    protocol.spNFTCount = protocol.spNFTCount + 1;
    protocol.save();

    _spNFT.protocol = protocol.id; // Protocol!
    _spNFT.NFTPool = nftPool.id;
    _spNFT.tokenId = id;
    _spNFT.owner = Address.fromString("0x0000000000000000000000000000000000000000"); // Account!
    _spNFT.amount = BigInt.fromI32(0); // Int!
    _spNFT.createdAt = block.timestamp; // BigInt!
  }

  return _spNFT as spNFT;
}

export function getOrCreateAccount(address: Address): Account {
  let account = Account.load(address);

  if (!account) {
    account = new Account(address);
    account.spNFTCount = 0;
  }

  return account as Account;
}

export function getOrCreateNitro(address: Address, block: ethereum.Block): NitroPool {
  let nitroPool = NitroPool.load(address.toHexString());

  if (!nitroPool) {
    nitroPool = new NitroPool(address.toHexString());
    nitroPool.createdAt = block.timestamp;
    nitroPool.protocol = PROTOCOL;
    nitroPool.poolOwner = Address.fromString("0x0000000000000000000000000000000000000000");
    nitroPool.amount = BigInt.fromI32(0);
    nitroPool.depositAmount = BigInt.fromI32(0);
    nitroPool.withdrawAmount = BigInt.fromI32(0);
    nitroPool.harvestStartTime = BigInt.fromI32(0);
    nitroPool.depositEndTime = BigInt.fromI32(0);
    nitroPool.endTime = BigInt.fromI32(0);

    NitroPoolTempate.create(address);
  }
  return nitroPool as NitroPool;
}

export function GetOrCreateToken(address: Address): Token {
  let token = Token.load(address.toHexString());

  if (!token) {
    let _erc20 = ERC20.bind(address);
    let _erc20Bytes = ERC20Bytes.bind(address);
    let try_name = _erc20.try_name();
    let try_symbol = _erc20.try_symbol();
    let try_decimals = _erc20.try_decimals();

    let try_nameBytes = _erc20Bytes.try_name();
    let try_symbolBytes = _erc20Bytes.try_symbol();

    let name_issue = "Error";
    let symbol_issue = "Error";

    if (!try_nameBytes.reverted) {
      name_issue = try_nameBytes.value.toString();
    }
    if (!try_symbolBytes.reverted) {
      symbol_issue = try_symbolBytes.value.toString();
    }

    // ETH calls to build out token
    token = new Token(address.toHexString());
    token.name = try_name.reverted ? name_issue : try_name.value;
    token.symbol = try_symbol.reverted ? symbol_issue : try_symbol.value;
    token.decimals = try_decimals.reverted ? 18 : try_decimals.value;
    token.save();
  }
  return token as Token;
}
