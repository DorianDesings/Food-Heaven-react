import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledButton = styled(Link)`
	padding: 0.75rem 2rem;
	border-radius: 1rem;
	color: ${COLORS.white};
	background-color: ${COLORS.primary};
`;

export { StyledButton };
