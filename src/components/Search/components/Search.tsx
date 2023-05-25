'use client'

import { useSearch } from '@hooks/useSearch'

export const Search = () => {
	const searchProps = useSearch('')

	return (
		<input
			className="w-4/5 rounded-md h-2 m-5 bg-white bg-opacity-40 p-8 font-large font-semibold shadow-md shadow-orange-400"
			type="text"
			placeholder="Search all the GIFs"
			{...searchProps}
		/>
	)
}
