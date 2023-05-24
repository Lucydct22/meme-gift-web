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
			const response = await fetch(`${process.env.BASE_URL}/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=25&rating=g`)
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
		<div className="layout-gifs">
			{(queryTrendingGifs.map(({ id, title, url }: ITrendingGifs) => (
				<GifCard key={id} title={title} url={url} />
			)))}
		</div>
	)

	return (
		<div className="layout-gifs">
			{trendingGifs.length ? (trendingGifs.map(({ id, title, url }: ITrendingGifs) => (
				<GifCard key={id} title={title} url={url} />
			))) : null}
		</div>
	)
}
