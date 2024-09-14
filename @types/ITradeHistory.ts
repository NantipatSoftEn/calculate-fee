export interface TradeTransaction {
    assetPair: string;
    baseAsset: string;
    quoteAsset: string;
    type: string;
    price: number;
    filled: number;
    fee: number;
    role: string;
    pnl: number;
    side: string;
    filledAt: string;
}



export interface TradeHistory {
    code: number;
    message: string;
    response: {
        transactions:TradeTransaction[]
    }
}