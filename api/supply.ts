import { NowRequest, NowResponse } from "@vercel/node";
import {
  getBurnedSupply,
  getLockedWojk,
  getTotalSupply,
  maxSupply,
} from "../utils/supply";
import formatNumber from "../utils/formatNumber";

export default async (req: NowRequest, res: NowResponse): Promise<void> => {
  let totalSupply = await getTotalSupply();
  totalSupply = totalSupply.div(1e18);

  let totalBurnedTokens = await getBurnedSupply();
  totalBurnedTokens = totalBurnedTokens.div(1e18);

  let lockedWojk = await getLockedWojk();
  lockedWojk = lockedWojk.div(1e18);

  const burnedAndLockedTokens = totalBurnedTokens.plus(lockedWojk);

  const unburntWojk = totalSupply.minus(totalBurnedTokens);

  const circulatingSupply = totalSupply.minus(burnedAndLockedTokens);

  if (req.query?.q === "totalSupply") {
    res.json(unburntWojk.toNumber());
  } else if (req.query?.q === "circulatingSupply") {
    res.json(circulatingSupply.toNumber());
  } else if (req.query?.verbose) {
    res.json({
      totalMinted: formatNumber(totalSupply.toNumber()),
      totalSupply: formatNumber(unburntWojk.toNumber()),
      burnedSupply: formatNumber(totalBurnedTokens.toNumber()),
      circulatingSupply: formatNumber(circulatingSupply.toNumber()),
      lockedWojk: formatNumber(lockedWojk.toNumber()),
      maxSupply: formatNumber(maxSupply),
    });
  } else {
    res.json({
      totalSupply: unburntWojk.toNumber(),
      burnedSupply: totalBurnedTokens.toNumber(),
      circulatingSupply: circulatingSupply.toNumber(),
    });
  }
};
