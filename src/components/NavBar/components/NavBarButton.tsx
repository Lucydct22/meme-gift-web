'use client'
import Link from "next/link"
import { FC } from "react"

interface NavBarButtonProps {
	href: string;
	title: string;
}

export const NavBarButton: FC<NavBarButtonProps> = ({
	href,
	title
}) => {
	return (
		<Link href={href}>
			<button type="button" className="btn-navbar">{title}</button>
		</Link>
	)
}
