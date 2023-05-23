import { ChangeEvent, useState } from "react"

export const Search = () => {
	const [search, setSearch] = useState('')

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	return (
		<input
			type="text"
			placeholder="Search all the GIFs"
			value={search}
			onChange={handleChange}
		/>
	)
}
