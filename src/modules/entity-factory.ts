import { Address } from "@graphprotocol/graph-ts";
import { Pool, Protocol } from "../../generated/schema";

//get protocol etc
export function getProtocol(): Protocol {
  let protocol = Protocol.load(
    Address.fromString("0x6EcCab422D763aC031210895C81787E87B43A652")
  );

  if (!protocol) {
    protocol = new Protocol(
      Address.fromString("0x6EcCab422D763aC031210895C81787E87B43A652")
    );

    protocol.poolCount = 0;
  }
  return protocol as Protocol;
}

export function getPool(): void {
  let pool = Pool.load();

  if (!pool) {
    pool = new Pool();
  }
  pool.save();
}
