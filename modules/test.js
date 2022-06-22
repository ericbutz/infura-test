import { config as loadEnv } from 'dotenv';
import { SDK, Auth, TEMPLATES } from '@infura/sdk';

loadEnv();

export const test = async () => {
    const Chains = {
        mainnet: 1,
        goerli: 5,
        rinkeby: 4,
        ropsten: 3,
    };

    const auth = new Auth({
        projectId: process.env.INFURA_PROJECT_ID,
        secretId: process.env.INFURA_PROJECT_SECRET,
        privateKey: '',
        chainId: 4,
    });
/*
    const sdk = new SDK(auth);

    const myNFTs = await sdk.getNFTs({
        publicAddress: process.env.WALLET_PUBLIC_ADDRESS,
        includeMetadata: true
    });
    console.log('My NFTs: \n', myNFTs);

*/
    const test2 = process.env.INFURA_PROJECT_ID;
    console.log('test: ', process.env.INFURA_PROJECT_ID);
    return "test2";
};

/**
 * Get NFTs by an account address
 * @param  {string} address Account address
 * @param  {string} [includeMetadata=false] flag to include the metadata object in the results
 * @returns {Promise<object>} List of NFTs with metadata if 'includeMetadata' flag is true
 */
export const GetNFTs = async () => {
    const publicAddress = '';
    const includeMetadata = false;
    if (!publicAddress || !utils.isAddress(publicAddress)) {
        throw new Error('[SDK.getNFTs] You need to pass a valid account address as parameter');
    }

    const apiUrl = `${this.#apiPath}/accounts/${publicAddress}/assets/nfts`;

    const { data } = await this.#httpClient.get(apiUrl);

    if (!includeMetadata) {
        return {
        ...data,
        assets: data.assets.map(asset => {
            const { metadata, ...rest } = asset;
            return rest;
        }),
        };
    }

return data;
}

//export { test };