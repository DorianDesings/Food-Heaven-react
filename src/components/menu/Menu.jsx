import { StyledMenu, StyledNavLink } from './styles';

const Menu = () => {
	return (
		<nav>
			<StyledMenu>
				<li>
					<StyledNavLink to='/'>Home</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/about-us'>About Us</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/menu'>Menu</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/blog'>Blog</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/contact'>Contact</StyledNavLink>
				</li>
			</StyledMenu>
		</nav>
	);
};

export default Menu;
