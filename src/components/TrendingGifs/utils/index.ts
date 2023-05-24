import { ITrendingGifs } from "../types";

export const parseGifsDataFromApi = (data: any) => {
	return data.map(({ type, id, title, images: { original: { url } } }: any) => ({
		type: type,
		id: id,
		title: title,
		url: url
	})) as ITrendingGifs[]
}