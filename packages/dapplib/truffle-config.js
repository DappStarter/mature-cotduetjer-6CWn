require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan random saddle milk install close box slogan'; 
let testAccounts = [
"0x199a4a31e268d62e7528eb0349534773cc4407d34a4c0e22c1c10edb1b84801f",
"0xf5cbbf034cd090be67084abbffaa28060973d8341a75fe805428849178a3b15c",
"0xadaeda934d551ab950df4ee8ebdf4f5f7594427b83e50d25860d06632f8be20a",
"0xdeb752a0424e29f2be5315bf0f1f73de06d3790e2e256f9b8de2a77fce37d653",
"0x7b9e1557ad2b46f58dd4153b924b91cc27b0cfa01f6993657c1c15a2307bce99",
"0x24c138c2524ab3dbfbd8bab036463b2d40089ee1252a0f3213ceb5889f053927",
"0xeeb3e760a5f666ea1d93b52391fab122b2f178afde132c94b526ae432b10ddf4",
"0x14c2d905fb430210a5a7677d21362d2ac9a873ffe0c8be0660aaea9c22b0809e",
"0xc5c69c738af31defa5ccd57352e04b0b799e4449ead626da27b46500b9627560",
"0xc63a8dacf05c4e13c053e71ccd80f47b74ae61b658a801506d7c8cd3bd73398d"
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

