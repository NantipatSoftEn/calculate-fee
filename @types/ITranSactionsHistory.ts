export interface FuturesAssetTransaction {
    id: string;
    assetPair: string;
    type: string;
    amount: number;
    asset: string;
    createdAt: string;
    baseAsset: string;
    quoteAsset: string;
}


export interface TradeHistory {
    code: number;
    message: string;
    response: {
        futuresAssetTransactions:FuturesAssetTransaction[]
    }
}