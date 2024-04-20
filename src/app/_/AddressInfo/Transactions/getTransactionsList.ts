'use server';

import { type Address } from 'viem';

type OriginalDataType = {
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
};

const TIMESTAMP_MULTIPLIER = 1000;

export type GetTransactionsListResponse = {
  onLastPage: boolean;
  page: number;
  transactions: {
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
    timeStamp: number;
    to: Address;
    transactionIndex: string;
    txreceipt_status: string;
    value: string;
  }[];
};

export const getTransactionsList = async ({
  address,
  limit,
  page,
}: {
  address: Address | undefined;
  limit: number;
  page: number;
}): Promise<GetTransactionsListResponse> => {
  const paramsObj = {
    action: 'txlist',
    address: String(address),
    apikey: process.env.ETHERSCAN_API || '',
    module: 'account',
    offset: limit.toString(),
    page: page.toString(),
    sort: 'asc',
  };
  const searchParams = new URLSearchParams(paramsObj);

  const url = new URL(
    `https://api.etherscan.io/api?${searchParams.toString()}`
  );
  const response = await fetch(url);
  const data = await response.json();

  const originalResult: OriginalDataType[] = data.result;

  return {
    onLastPage: false,
    page,
    transactions: originalResult.map(({ timeStamp, ...rest }) => ({
      ...rest,
      timeStamp: Number(timeStamp) * TIMESTAMP_MULTIPLIER,
    })),
  };
};
