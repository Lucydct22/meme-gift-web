'use client'

import { GifCard } from "@components/MyGifs"
import { useEffect, useState } from "react"
import { parseGifsDataFromApi } from "../utils"

export const TrendingGifs = () => {
	const [trendingGifs, setTrendingGifs] = useState([])

	useEffect(() => {
		const getTrendingGiphys = async () => {
			const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=40EFVVVBiNp354iOddq5gaeSolWIbGjd&limit=25&rating=g')
			const { data } = await response.json();
			const gifsData = parseGifsDataFromApi(data)
			setTrendingGifs(data)
		}

		getTrendingGiphys()
	}, [])

	return (
		<>
			<div>TrendingGifs</div>

			{trendingGifs.length && trendingGifs.map((gif) => (
				// eslint-disable-next-line react/jsx-key
				<h1>map gifs</h1>
			))}
		</>
	)
}
