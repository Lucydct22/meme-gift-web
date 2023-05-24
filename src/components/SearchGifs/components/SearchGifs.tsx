'use client'

import { useEffect, useState } from "react"
import { GifCard } from "@components/MyGifs"
import { parseGifsDataToSearchGifs } from "../utils"
import { ISearchGifs } from "../types"
import { useSearchParams } from 'next/navigation';

export const SearchGifs = () => {
	const [searchGifs, setSearchGifs] = useState<ISearchGifs[]>([])
	const searchParams = useSearchParams();
	const [querySearchGifs, setQuerySearchGifs] = useState<ISearchGifs[]>([])

	useEffect(() => {
		const getSearchGiphys = async () => {
			const response = await fetch(`${process.env.BASE_URL}/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=cats&limit=25&offset=0&rating=g&lang=en`)
			const { data } = await response.json();
			const searchGifsData = parseGifsDataToSearchGifs(data)
			setSearchGifs(searchGifsData)
		}
		getSearchGiphys()
	}, [])

	useEffect(() => {
		const query = searchParams.get('query')
		const filteredGifs = query && searchGifs.filter((gif) => {
			const regex = new RegExp(query, 'i');
			return regex.test(gif.title);
		}) || [];
		setQuerySearchGifs(filteredGifs)

	}, [searchParams, searchGifs])

	if (querySearchGifs.length) return (
		<div className="layout-gifs">
			{(querySearchGifs.map(({ id, title, url }: ISearchGifs) => (
				<GifCard key={id} title={title} url={url} />
			)))}
		</div>
	)

	return (
		<>
			<div className="layout-gifs">
				{searchGifs.length ? (searchGifs.map(({ id, title, url }: ISearchGifs) => (
					<GifCard key={id} title={title} url={url} />
				))) : null}
			</div>
		</>
	)
}
