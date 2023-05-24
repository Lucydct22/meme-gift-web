import { FC } from "react";
import Image from "next/image"
// import logosample from '@images/bird-logo.png'

interface GifCardProps {
	title: string;
	url: string;
}

export const GifCard: FC<GifCardProps> = ({
	title,
	url
}) => {
	return (
		<div className="flex flex-col border-black border-2 rounded-md items-center h-48 w-48">
			<h3 className="h-1/5 flex items-center">{title}</h3>
			<span className="h-4/5">
				<Image src={url} alt='gift image' width={200} height={200} />
			</span>
		</div>
	)
}
