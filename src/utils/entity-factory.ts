import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import {
  Account,
  NFTPool,
  Nitro,
  Protocol,
  spNFT,
} from "../../generated/schema";

//get protocol etc
export function getProtocol(): Protocol {
  let protocol = Protocol.load(
    Address.fromString("0x6dB1EF0dF42e30acF139A70C1Ed0B7E6c51dBf6d")
  );

  if (!protocol) {
    protocol = new Protocol(
      Address.fromString("0x6dB1EF0dF42e30acF139A70C1Ed0B7E6c51dBf6d")
    );

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
    nftPool.save();
  }

  return nftPool as NFTPool;
}

export function getOrCreatespNFT(
  address: Address,
  id: BigInt,
  block: ethereum.Block
): spNFT {
  let _spNFT = spNFT.load(address.toHexString() + "-" + id.toString());
  let nftPool = getOrCreateNFTPool(address);

  if (!_spNFT) {
    _spNFT = new spNFT(address.toHexString() + "-" + id.toString());
    let protocol = getProtocol();
    protocol.spNFTCount = protocol.spNFTCount + 1;
    protocol.save();

    _spNFT.protocol = protocol.id; // Protocol!
    _spNFT.NFTPool = nftPool.id;
    _spNFT.owner = Address.fromString(
      "0x0000000000000000000000000000000000000000"
    ); // Account!
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

export function getOrCreateNitro(address: Address): Nitro {
  let nitroPool = Nitro.load(address.toHexString());

  if (!nitroPool) {
    nitroPool = new Nitro(address.toHexString());
  }
  return nitroPool as Nitro;
}
