import { IgifsData } from "../types";

export const parseGifsDataFromApi = (data: any) => {
	return data.map((gifApi: any) => ({
		type: gifApi.type,
		id: gifApi.id,
		title: gifApi.title,
		url: gifApi.url
	})) as IgifsData[]
}