'use client'
import { ChangeEvent, FC, useState } from "react";
import Image from "next/image"
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

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
			{!isEditing && (handleDelete || handleEdit) &&
				<span className="flex w-full justify-end p-2 gap-4">
					{
						handleEdit && !isEditing &&
						<button
							onClick={handleEdition}
						>
							<AiOutlineEdit />
						</button>}
					{
						handleDelete && !isEditing &&
						<button onClick={handleDeletion}>
							<AiOutlineDelete />
						</button>
					}
				</span>
			}

			{!isEditing && <h3 className="h-1/5 flex items-center font-bold">{title}</h3>}

			{isEditing &&
				<form onSubmit={handleSubmit}>
					<input
						className="p-4"
						type="text"
						value={newTitle}
						onChange={handleChange}
					/>
				</form>
			}
			<span className="h-4/5">
				<Image src={url} alt='gift image' width={300} height={300} />
			</span>
		</div>
	)
}
