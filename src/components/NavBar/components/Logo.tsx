import Image from "next/image"
import logo from '@images/bird-logo.png'
import Link from "next/link"

export const Logo = () => {
	return (
		<Link href={'/'}>
			<Image src={logo} alt={"website logo"} width={100} height={100} />
		</Link>
	)
}
