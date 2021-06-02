require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name rifle stick hole grid fork suit giggle'; 
let testAccounts = [
"0x7107b12a411f7198d300c635af9a898a65349f8aaab7d45eeb6ffa7004be5a1b",
"0xf6e520b943b722b223ab493deadce2f4aee30d900b95021b80490b8618c475a8",
"0x1d6002155c53f2da84b9604d75400bcf85c5076ec337800609eaf5ef7087306b",
"0xda01a114336dd65106490681620134da5a988b271476d79a0bee6c9163d50f34",
"0xc7446abc2c1d78c583b5448697247a8e501f2cf7829e35cdf14f3e0bebef74f8",
"0x74b870690c97f083975837af6eeeadabe3ddacd82cf6179d4d16e17a682c0e04",
"0xe77f24b06c7f214e6a3e2ee41e1b93cf1854ab361a3810fc0d9fde2cb7869273",
"0x26926a0637a343b42dfe8c01f44bf77ccbb2a582f3e1241d06aaa83272e7142c",
"0xe28ce73e05269f1e33e5fb790b606150bd34426cdd4c3ea883950f4c2ff673dd",
"0xc68ad233d7d3ac4969fdd3567dbd6e121ee846d8524f941d2310cfaf8effea58"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

