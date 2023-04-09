import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import UserIcons from '../user-icons/UserIcons';
import { StyledHeader, StyledHeaderTop } from './styles';

const Header = () => {
	return (
		<>
			<StyledHeader>
				<Logo />
				<StyledHeaderTop>
					<Menu />
					<UserIcons />
				</StyledHeaderTop>
			</StyledHeader>
		</>
	);
};

export default Header;
