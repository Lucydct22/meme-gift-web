import Image from "next/image"
import logosample from '@images/bird-logo.png'

export const GifCard = () => {
	return (
		<div className="flex flex-col border-black border-2 rounded-md items-center h-48 w-48">
			<h3 className="h-1/5 flex items-center">Gift Card Title</h3>
			<span className="h-4/5">
				<Image src={logosample} alt='gift image' />
			</span>
		</div>
	)
}
