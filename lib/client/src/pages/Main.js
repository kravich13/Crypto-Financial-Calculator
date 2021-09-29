"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const react_1 = __importDefault(require("react"));
const coingecko_api_1 = __importDefault(require("coingecko-api"));
const react_2 = require("react");
const react_3 = require("react");
const MultipleSearch_1 = require("../components/search forms/MultipleSearch");
const Main = () => {
    const CoinGeckoClient = (0, react_3.useMemo)(() => new coingecko_api_1.default(), []);
    (0, react_2.useEffect)(() => {
        ;
        (async () => {
            // const dsds = await CoinGeckoClient.coins.fetchMarketChart('bitcoin', { days: 28 })
            // console.log(dsds.data)
            // const data = await CoinGeckoClient.coins.fetchMarketChartRange(['bitcoin', 'litecoin'], {
            //   from: 1514764800,
            //   to: 1631720497456,
            // })
            // console.log(await CoinGeckoClient.coins.list())
            // const arrPrices: [] = data.prices
            // const monthlyPrices: number[] = []
            // let numberOfCoins: number = 0
            // arrPrices.forEach((elem: number[]) => {
            //   const [timestamp, price] = elem
            //   const day: number = Number(new Date(timestamp).toLocaleString('en', { day: 'numeric' }))
            //   if (day === 28) monthlyPrices.push(Number(price.toFixed(0)))
            // })
            // monthlyPrices.forEach((elem: number): number => (numberOfCoins += 100 / elem))
            // const investedFunds: number = monthlyPrices.length * 100
            // console.log(numberOfCoins)
            // console.log(investedFunds)
        })();
    }, [CoinGeckoClient]);
    return (<section>
      <MultipleSearch_1.MultipleSearch />
    </section>);
};
exports.Main = Main;
