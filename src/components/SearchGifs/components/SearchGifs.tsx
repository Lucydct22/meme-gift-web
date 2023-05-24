'use client'

import { useEffect, useState } from "react"
import { GifCard } from "@components/MyGifs"
// import { parseGifsDataFromApi } from "../utils"
import { ISearchGifs } from "../types"
import { useSearchParams } from 'next/navigation';

export const SearchGifs = () => {
	const [randomGifs, setRandomGifs] = useState<ISearchGifs[]>([])
	const searchParams = useSearchParams();

	useEffect(() => {
		console.log('queryParams keyword',)
		const getSearchGiphys = async () => {
			const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=40EFVVVBiNp354iOddq5gaeSolWIbGjd&q=${searchParams.get('query')}&limit=25&offset=0&rating=g&lang=en`)
			// const response = await fetch(`${process.env.BASE_URL}/gifs/trending?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&limit=25&rating=g`)
			const { data } = await response.json();
			console.log(data, 'data')
			// const gifsData = parseGifsDataFromApi(data)
			// setRandomGifs(gifsData)
		}
		getSearchGiphys()
	}, [searchParams])

	return (
		<>
			<div>TrendingGifs</div>

			{randomGifs.length ? (randomGifs.map(({ id, title, url }: ISearchGifs) => (
				<GifCard key={id} title={title} url={url} />
			))) : null}
		</>
	)
}
