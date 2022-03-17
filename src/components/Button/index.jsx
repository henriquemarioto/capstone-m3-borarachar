import { Container } from "./style";

function Button({ hover = false, ...rest }) {
  return <Container hover={hover} {...rest}></Container>;
}

export default Button;
