import { PoolCreated } from "./../generated/NFTPoolFactory/NFTPoolFactory";
import { NFTPool } from "./../generated/templates";

export function handlePoolCreated(event: PoolCreated): void {
  NFTPool.create(event.params.pool);
}
