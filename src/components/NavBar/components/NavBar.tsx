import { Logo } from "./Logo"
import { NavBarButton } from "./NavBarButton"

export const NavBar = () => {
	return (
		<nav className="flex justify-evenly w-screen">
			<Logo />

			<span>
				<NavBarButton href={'/search'} title='search' />
				<NavBarButton href={'/trending'} title='trending' />
			</span>

			<span>
				Login
			</span>
		</nav>
	)
}
