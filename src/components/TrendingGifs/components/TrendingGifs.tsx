'use client'

import { GifCard } from "@components/MyGifs"
import { useEffect, useState } from "react"
import { parseGifsDataToTrendingGifs } from "../utils"
import { ITrendingGifs } from "../types"
import { useSearchParams } from 'next/navigation';

export const TrendingGifs = () => {
	const [trendingGifs, setTrendingGifs] = useState<ITrendingGifs[]>([])
	const searchParams = useSearchParams();
	const [queryTrendingGifs, setQueryTrendingGifs] = useState<ITrendingGifs[]>([])

	useEffect(() => {
		const getTrendingGiphys = async () => {
			const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=40EFVVVBiNp354iOddq5gaeSolWIbGjd&limit=25&rating=g')
			// const response = await fetch(`${process.env.BASE_URL}/gifs/trending?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&limit=25&rating=g`)
			const { data } = await response.json();
			const gifsData = parseGifsDataToTrendingGifs(data)
			setTrendingGifs(gifsData)
		}

		getTrendingGiphys()
	}, []);

	useEffect(() => {
		const query = searchParams.get('query')
		const filteredGifs = query && trendingGifs.filter((gif) => {
			const regex = new RegExp(query, 'i');
			return regex.test(gif.title);
		}) || [];
		setQueryTrendingGifs(filteredGifs)

	}, [searchParams, trendingGifs])

	if (queryTrendingGifs.length) return (
		<>
			{(queryTrendingGifs.map(({ id, title, url }: ITrendingGifs) => (
				<GifCard key={id} title={title} url={url} />
			)))}
		</>
	)

	return (
		<>
			<div>TrendingGifs</div>

			{trendingGifs.length ? (trendingGifs.map(({ id, title, url }: ITrendingGifs) => (
				<GifCard key={id} title={title} url={url} />
			))) : null}
		</>
	)
}
