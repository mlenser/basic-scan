This is a sample showing the balance and transactions of an address.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using the app

- Enter an address (such as `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`) into the input to see the address' balance and transactions
- Scroll to see more transactions

## Expected behavior

- `0x388c818ca8b9251b393131c08a736a67ccb19297` should have 0.0001 ETH
- `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 should` have 0.074062847318492938 ETH and lots of transactions

## Potential improvements

- Add USD values. Could be done with defillama and displayed.
- Add more fields to the transactions like Etherscan shows such as gas price, block, fees, etc.
- Significantly improve the UI. It's very basic.
- Handle edge cases like a wallet not having a balance or transactions.
  - Test it more thoroughly to ensure it handles all these cases.
- Handle ens names as well as addresses.
