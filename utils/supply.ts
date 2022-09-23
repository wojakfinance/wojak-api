import BigNumber from "bignumber.js";
import { getContract } from "./web3";
import { WOJK, DEAD, LOCKED_WOJK_POOL } from "./constants";
import bep20 from "./abis/bep20.json";
import lockedWojkPool from "./abis/lockedWojkPool.json";

const contract = getContract(bep20, WOJK);
const lockedWojkPoolContract = getContract(lockedWojkPool, LOCKED_WOJK_POOL);

export const getTotalSupply = async (): Promise<BigNumber> => {
  const supply = await contract.methods.totalSupply().call();

  return new BigNumber(supply);
};

export const getBurnedSupply = async (): Promise<BigNumber> => {
  const balance = await contract.methods.balanceOf(DEAD).call();

  return new BigNumber(balance);
};

export const getLockedWojk = async (): Promise<BigNumber> => {
  const lockedAmount = await lockedWojkPoolContract.methods.totalLockedAmount().call();
  return new BigNumber(lockedAmount);
};

/**
 * User (Planet Finance) built a contract on top of our original manual WOJK pool,
 * but the contract was written in such a way that when we performed the migration from Masterchef v1 to v2, the tokens were stuck.
 * These stuck tokens are forever gone (see their medium post) and can be considered out of circulation."
 * https://planetfinanceio.medium.com/pancakeswap-works-with-planet-to-help-cake-holders-f0d253b435af
 * https://twitter.com/PancakeSwap/status/1523913527626702849
 * https://bscscan.com/tx/0xd5ffea4d9925d2f79249a4ce05efd4459ed179152ea5072a2df73cd4b9e88ba7
 */
export const planetFinanceBurnedTokensWei = new BigNumber("637407922445268000000000");

export const maxSupply = 15000000;
