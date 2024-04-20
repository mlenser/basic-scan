'use server';

import { type Address } from 'viem';

export const getTransactionsList = async ({
  address,
}: {
  address: Address | undefined;
}): Promise<
  {
    blockHash: string;
    blockNumber: string;
    confirmations: string;
    contractAddress: string;
    cumulativeGasUsed: string;
    from: Address;
    functionName: string;
    gas: string;
    gasPrice: string;
    gasUsed: string;
    hash: string;
    input: string;
    isError: string;
    methodId: string;
    nonce: string;
    timeStamp: string;
    to: Address;
    transactionIndex: string;
    txreceipt_status: string;
    value: string;
  }[]
> => {
  const paramsObj = {
    action: 'txlist',
    address: String(address),
    apikey: process.env.ETHERSCAN_API || '',
    module: 'account',
    offset: '10', // TODO: useInfiniteQuery to paginate
    page: '1', // TODO: useInfiniteQuery to paginate
    sort: 'asc',
  };
  const searchParams = new URLSearchParams(paramsObj);

  const url = new URL(
    `https://api.etherscan.io/api?${searchParams.toString()}`
  );
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};
