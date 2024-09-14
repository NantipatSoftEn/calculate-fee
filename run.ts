import { FuturesAssetTransaction } from "./@types/ITranSactionsHistory";
import tranSactionsHistorySelfTrade from "./TranSactionsHistory.SelfTrade.json";
import tranSactionsHistorySocialTrade from "./TranSactionsHistory.SocialTrade.json";
import historySelfTrade from "./TradeHistory.SelfTrade.json";
import historySocialTrade from "./TradeHistory.SocialTrade.json";
import { TradeTransaction } from "./@types/ITradeHistory";

const transectionSelfTrade: FuturesAssetTransaction[] =
  tranSactionsHistorySelfTrade.response.futuresAssetTransactions;

const transectionSocialTrade: FuturesAssetTransaction[] =
  tranSactionsHistorySocialTrade.response.futuresAssetTransactions;

// const calculateSums = (
//   transactions: FuturesAssetTransaction[]
// ): { sumFee: number; sumPNL: number } => {
//   let sumFee = 0;
//   let sumPNL = 0;

//   transactions.forEach((t: FuturesAssetTransaction) => {
//     if (t.type === "commission_fee") {
//       sumFee += t.amount;
//     }
//     if (t.type === "pnl") {
//       sumPNL += t.amount;
//     }
//   });
//   return { sumFee, sumPNL };
// };

// const t1 = calculateSums(transectionSelfTrade);
// console.log(`Sum of Fees: ${t1.sumFee}`);
// console.log(`Sum of PNL: ${t1.sumPNL}`);

// const t2 = calculateSums(transectionSocialTrade);
// console.log(`Sum of Fees: ${t2.sumFee}`);
// console.log(`Sum of PNL: ${t2.sumPNL}`);

const tradeHistorySelfTrade: TradeTransaction[] =
  historySelfTrade.response.transactions;
const tradeHistorySocialTrade: TradeTransaction[] =
  historySocialTrade.response.transactions;

const calculateSums2 = (
  transactions: TradeTransaction[]
): { sumFee: number; sumPNL: number } => {
  let sumFee = 0;
  let sumPNL = 0;

  transactions.forEach((t: TradeTransaction) => {
    sumFee += t.fee;
    sumPNL += t.pnl;
    // console.log("TEST",t.pnl)
  });

  return { sumFee, sumPNL };
};

const resultSelfTrade = calculateSums2(tradeHistorySelfTrade);
console.log(`sumFee SelfTrade = ${resultSelfTrade.sumFee}`);
console.log(`sumPNL SelfTrade = ${resultSelfTrade.sumPNL}`);
console.log(resultSelfTrade.sumPNL - resultSelfTrade.sumFee);

const resultSocialTrade = calculateSums2(tradeHistorySocialTrade);
console.log(`sumFee SocialTrade ${resultSocialTrade.sumFee}`);
console.log(`sumPNL SocialTrade ${resultSocialTrade.sumPNL}`);
console.log(resultSocialTrade.sumPNL - resultSocialTrade.sumFee);

