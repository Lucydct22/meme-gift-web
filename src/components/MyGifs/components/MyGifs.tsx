'use client'

import { ChangeEvent, useEffect, useState } from "react"
import { GifCard } from "./GifCard"
import { IUploadedImages } from "../types"
import { v4 as uuidv4 } from 'uuid';
import { useSearchParams } from "next/navigation";

export const MyGifs = () => {
	const searchParams = useSearchParams();
	const [uploadedImages, setUploadedImages] = useState<IUploadedImages[]>([])
	const [queryUploadingImages, setQueryUploadingImages] = useState<IUploadedImages[]>([])

	useEffect(() => {
		const localStorageState = localStorage.getItem("uploadedImages")
		if (localStorageState) {
			setUploadedImages(JSON.parse(localStorageState))
		}
	}, [])

	useEffect(() => {
		const query = searchParams.get('query')
		const filteredImages = query && uploadedImages.filter((gif: IUploadedImages) => {
			const regex = new RegExp(query, 'i');
			return regex.test(gif.title);
		}) || [];
		setQueryUploadingImages(filteredImages)

	}, [searchParams, uploadedImages])

	const handleSetUploadedImagesState = (state: IUploadedImages[]) => {
		localStorage.setItem("uploadedImages", JSON.stringify(state));
		setUploadedImages(state)
	}

	const handleClick = () => console.log(uploadedImages)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.target.files && handleSetUploadedImagesState([...uploadedImages, { title: 'sample title', id: uuidv4(), image: URL.createObjectURL(event.target.files[0]) }])
	}

	const handleEdit = (gifId: string, newTitle: string) => {
		const uploadedImagesCopy = [...uploadedImages];
		const index = uploadedImagesCopy.findIndex(obj => obj.id === gifId);
		if (index !== -1) {
			uploadedImagesCopy[index].title = newTitle;
		}
		handleSetUploadedImagesState(uploadedImagesCopy)
	}

	const handleDelete = (gifId: string) => {
		const newGifs = uploadedImages.filter((gif) => gif.id !== gifId)
		handleSetUploadedImagesState(newGifs)
	}

	if (queryUploadingImages.length) return (
		<>
			{(queryUploadingImages.map(({ id, title, image }: IUploadedImages) => (
				<GifCard key={id} title={title} url={image} handleEdit={handleEdit} handleDelete={handleDelete} id={id} />
			)))}
		</>
	)

	return (
		<div className="">
			<div className="w-screen flex justify-around">
				<h1>MyGifs</h1>
				<span>
					<button onClick={handleClick}>Add gifs</button>
					<input
						type="file"
						value=''
						accept="image/jpeg, image/png, image/jpg"
						onChange={handleChange}
					/>
				</span>
			</div>

			<div className="layout-gifs">
				{uploadedImages.length ? (
					uploadedImages.map(
						({ id, title, image }: IUploadedImages) => <GifCard key={id} title={title} url={image} id={id} handleEdit={handleEdit} handleDelete={handleDelete} />
					)) : null}
			</div>
		</div>
	)
}
