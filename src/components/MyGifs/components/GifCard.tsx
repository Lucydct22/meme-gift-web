'use client'
import { ChangeEvent, FC, useState } from "react";
import Image from "next/image"
// import logosample from '@images/bird-logo.png'

interface GifCardProps {
	title: string;
	url: string;
	id?: string;
	handleEdit?: (gifId: string, newTitle: string) => void
	handleDelete?: (gifId: string) => void
}

export const GifCard: FC<GifCardProps> = ({
	title,
	url,
	id,
	handleEdit,
	handleDelete
}) => {
	const [isEditing, setIsEditing] = useState(false)
	const [newTitle, setNewTitle] = useState('')

	const handleSubmit = (event: any) => {
		event?.preventDefault();
		setIsEditing(false)
		newTitle && id && handleEdit && handleEdit(id, newTitle)
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNewTitle(event.target.value)
	}

	const handleEdition = () => {
		setIsEditing(true)
	}

	const handleDeletion = () => {
		id && handleDelete && handleDelete(id)
	}

	return (
		<div className="overflow-hidden flex flex-col border-black border-2 rounded-md items-center h-48 w-48">
			{!isEditing && <h3 className="h-1/5 flex items-center font-bold">{title}</h3>}
			{handleEdit && !isEditing && <button
				onClick={handleEdition}
			>E</button>}
			{isEditing &&
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={newTitle}
						onChange={handleChange}
					/>
				</form>
			}
			{
				handleDelete && !isEditing && <button onClick={handleDeletion}>D</button>
			}
			<span className="h-4/5">
				<Image src={url} alt='gift image' width={200} height={200} />
			</span>
		</div>
	)
}
