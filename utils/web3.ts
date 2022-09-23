import Web3 from "web3";

const BSC_NODE_RPC = [
  "https://rpc-sg.dogechain.dog",
  "https://rpc-us.dogechain.dog",
  "https://rpc.dogechain.dog",
  "https://dogechain.ankr.com"
];

const BSC_ARCHIVE_NODE_RPC = [
  "https://rpc01-sg.dogechain.dog",
  "https://rpc02-sg.dogechain.dog",
  "https://rpc03-sg.dogechain.dog",
];

export const getWeb3 = (archive = false): Web3 => {
  const provider: string = archive
    ? BSC_ARCHIVE_NODE_RPC[Math.floor(Math.random() * BSC_ARCHIVE_NODE_RPC.length)]
    : BSC_NODE_RPC[Math.floor(Math.random() * BSC_NODE_RPC.length)];

  return new Web3(new Web3.providers.HttpProvider(provider, { timeout: 30000 }));
};

export const getContract = (abi: any, address: string, archive = false) => {
  const web3: Web3 = getWeb3(archive);

  return new web3.eth.Contract(abi, address);
};
