import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledHeader = styled.header`
	padding: 0 12rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${COLORS.lightPrimary};
`;

const StyledHeaderTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 45rem;
`;

export { StyledHeader, StyledHeaderTop };
