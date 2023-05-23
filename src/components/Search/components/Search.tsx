'use client'

import { ChangeEvent, useState } from "react"

export const Search = () => {
	const [search, setSearch] = useState('')

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	return (
		<input
			className="w-4/5 rounded-md h-2 p-4 m-5"
			type="text"
			placeholder="Search all the GIFs"
			value={search}
			onChange={handleChange}
		/>
	)
}
