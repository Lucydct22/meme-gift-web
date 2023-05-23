import { Logo } from "./Logo"
import { NavBarButton } from "./NavBarButton"

export const NavBar = () => {
	return (
		<nav className="flex justify-evenly w-screen">
			<Logo />

			<span>
				<NavBarButton href={'/option1'} title='Option 1' />
				<NavBarButton href={'/option2'} title='Option 2' />
				<NavBarButton href={'/option3'} title='Option 3' />
			</span>

			<span>
				Login
			</span>
		</nav>
	)
}
