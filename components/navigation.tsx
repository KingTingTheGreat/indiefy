import Link from "next/link";
import ProfileLink from "./profile-link";

const NavLink = ({ name, path }: { name: string; path: string }) => {
	return (
		<Link href={path} className="m-1 p-2 rounded bg-nullGray">
			{name}
		</Link>
	);
};

const loggedIn = true;

const Navigation = () => {
	return (
		<nav className="flex justify-between items-center">
			{loggedIn ? <ProfileLink /> : <NavLink name="Login" path="/login" />}
			<NavLink name="Rankings" path="/rankings" />
			<NavLink name="Distribution" path="/distribution" />
			<NavLink name="About" path="/about" />
		</nav>
	);
};

export default Navigation;
