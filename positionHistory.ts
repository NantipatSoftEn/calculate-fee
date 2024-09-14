const positionHistory = [
  {
    pnl: 55,
    type: "1",
  },
  {
    pnl: 33,
    type: "1",
  },
  {
    pnl: -12,
    type: "1",
  },
  {
    pnl: 271,
    type: "1",
  },
  {
    pnl: 71,
    type: "2",
  },
  {
    pnl: 6,
    type: "2",
  },
  {
    pnl: 107,
    type: "2",
  },
  {
    pnl: 115,
    type: "2",
  },
  {
    pnl: 124,
    type: "2",
  },
  {
    pnl: 509,
    type: "1",
  },
  {
    pnl: -19,
    type: "1",
  },
  {
    pnl: -28,
    type: "1",
  },
  {
    pnl: 180,
    type: "1",
  },
  {
    pnl: 22,
    type: "1",
  },
  {
    pnl: -3934,
    type: "1",
  },
  {
    pnl: 30,
    type: "1",
  },
  {
    pnl: -153,
    type: "1",
  },
  {
    pnl: -18,
    type: "1",
  },
  {
    pnl: 8,
    type: "1",
  },
  {
    pnl: 63,
    type: "1",
  },
  {
    pnl: -7,
    type: "1",
  },
  {
    pnl: 12,
    type: "1",
  },
  {
    pnl: 72,
    type: "1",
  },
  {
    pnl: 9.53,
    type: "1",
  },
  {
    pnl: 230,
    type: "1",
  },
  {
    pnl: -23,
    type: "1",
  },
  {
    pnl: -25,
    type: "1",
  },
  {
    pnl: -39,
    type: "1",
  },
  {
    pnl: -83,
    type: "1",
  },
  {
    pnl: -206,
    type: "1",
  },
  {
    pnl: 26,
    type: "1",
  },
  {
    pnl: 57,
    type: "1",
  },
  {
    pnl: -24,
    type: "1",
  },
  {
    pnl: 2,
    type: "1",
  },
  {
    pnl: 2,
    type: "1",
  },
  {
    pnl: -37,
    type: "1",
  },
  {
    pnl: 97,
    type: "1",
  },
  {
    pnl: 45,
    type: "1",
  },
  {
    pnl: 20,
    type: "1",
  },
  {
    pnl: -73,
    type: "1",
  },
  {
    pnl: -75,
    type: "1",
  },
  {
    pnl: 89,
    type: "1",
  },
  {
    pnl: 90,
    type: "1",
  },
  {
    pnl: 78,
    type: "1",
  },
  {
    pnl: 165,
    type: "1",
  },
  {
    pnl: -2,
    type: "1",
  },
  {
    pnl: -11,
    type: "1",
  },
  {
    pnl: 274,
    type: "2",
  },
  {
    pnl: 86,
    type: "2",
  },
  {
    pnl: 452,
    type: "2",
  },
  {
    pnl: 140,
    type: "2",
  },
  {
    pnl: 113,
    type: "2",
  },
  {
    pnl: 123,
    type: "2",
  },
  {
    pnl: 266,
    type: "2",
  },
  {
    pnl: 93,
    type: "2",
  },
  {
    pnl: 216,
    type: "2",
  },
  {
    pnl: 68,
    type: "2",
  },
  {
    pnl: 144,
    type: "2",
  },
  {
    pnl: 238,
    type: "2",
  },
  {
    pnl: 120,
    type: "2",
  },
  {
    pnl: 25,
    type: "2",
  },
  {
    pnl: -1035,
    type: "2",
  },
  {
    pnl: 166,
    type: "2",
  },
  {
    pnl: 17,
    type: "1",
  },
  {
    pnl: -75,
    type: "1",
  },
];


let sumSelf = 0
let sumSocial = 0
positionHistory.forEach((t: {pnl:number,type:string}) => {
    if(t.type==="1"){
        sumSelf+=t.pnl
    }
    if(t.type==="2"){
        sumSocial+=t.pnl
    }
})

console.log("sumSelf",sumSelf)
console.log("sumSocial",sumSocial)