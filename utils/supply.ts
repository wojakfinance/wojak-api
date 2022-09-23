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

export const maxSupply = 15000000;
