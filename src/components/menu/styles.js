import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledMenu = styled.ul`
	display: flex;
	justify-content: space-between;
	width: 500px;
`;

const StyledNavLink = styled(NavLink)`
	&.active {
		color: ${COLORS.primary};
	}
`;

export { StyledMenu, StyledNavLink };
