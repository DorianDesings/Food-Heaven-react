import { StyledButton } from './styles';

const Button = ({ path, children }) => {
	return <StyledButton to={path}>{children}</StyledButton>;
};

export default Button;
