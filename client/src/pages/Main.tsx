import React from 'react'
import CoinGecko from 'coingecko-api'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { MultipleSearch } from '../components/search forms/MultipleSearch'

export const Main: React.FC = () => {
  const CoinGeckoClient = useMemo((): any => new CoinGecko(), [])

  useEffect((): void => {
    ;(async (): Promise<void> => {
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
    })()
  }, [CoinGeckoClient])

  return (
    <section>
      <MultipleSearch />
    </section>
  )
}
