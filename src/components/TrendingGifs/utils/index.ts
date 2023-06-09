import { ITrendingGifs } from "../types";

export const parseGifsDataToTrendingGifs = (data: any) => {
	return data.map(({ type, id, title, images: { original: { url } } }: any) => ({
		type: type,
		id: id,
		title: title,
		url: url
	})) as ITrendingGifs[]
}