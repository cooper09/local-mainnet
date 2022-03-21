/* 
1) Cooper S - Here are the transactions you’d need to execute before your contract can interact with Uniswap’s Dai exchange:
2) Deploy the UniswapExchange contract
3) Deploy the UniswapFactory contract
4) Initialize the UniswapFactory (with the UniswapExchange address)
5) Deploy the Dai ERC20 token contract
6) Deploy the Dai UniswapExchange contract (using the Dai address)
7) Approve the Dai UniswapExchange contract to transfer Dai
8)Add liquidity to the Dai UniswapExchange contract

(https://medium.com/@samajammin/how-to-interact-with-ethereums-mainnet-in-a-development-environment-with-ganache-3d8649df0876)
*/

require('dotenv').config();
const Web3 = require('web3');

console.log("No ifs ands or bots!")