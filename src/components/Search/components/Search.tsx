'use client'

import { useSearch } from '@hooks/useSearch'

export const Search = () => {
	const searchProps = useSearch('')

	return (
		<input
			className="w-4/5 rounded-md h-2 p-4 m-5"
			type="text"
			placeholder="Search all the GIFs"
			{...searchProps}
		/>
	)
}
