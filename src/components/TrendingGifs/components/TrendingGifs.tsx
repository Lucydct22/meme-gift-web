'use client'

import { GifCard } from "@components/MyGifs"
import { useEffect, useState } from "react"
import { parseGifsDataFromApi } from "../utils"
import { IgifsData } from "../types"

export const TrendingGifs = () => {
	const [trendingGifs, setTrendingGifs] = useState<IgifsData[]>([])

	useEffect(() => {
		const getTrendingGiphys = async () => {
			const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=40EFVVVBiNp354iOddq5gaeSolWIbGjd&limit=25&rating=g')
			const { data } = await response.json();
			const gifsData = parseGifsDataFromApi(data)
			console.log(gifsData, 'gifs DATA')
			setTrendingGifs(gifsData)
		}

		getTrendingGiphys()
	}, [])

	return (
		<>
			<div>TrendingGifs</div>

			{trendingGifs.length ? (trendingGifs.map(({ id, title, url }: IgifsData) => (
				<GifCard key={id} title={title} url={url} />
			))) : null}
		</>
	)
}
