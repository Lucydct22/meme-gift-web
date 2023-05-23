'use client'

import { GifCard } from "./GifCard"

export const MyGifs = () => {

	const handleClick = () => console.log('open file system and add gifs')

	return (
		<div className="">
			<div className="w-screen flex justify-around">
				<h1>MyGifs</h1>
				<span>
					<button onClick={handleClick}>Add gifs</button>
				</span>
			</div>

			<p className="block">	we will map the saved gifs here</p>
			<div className="w-screen flex justify-center flex-wrap gap-8">
				map gifs saved
			</div>
		</div>
	)
}
