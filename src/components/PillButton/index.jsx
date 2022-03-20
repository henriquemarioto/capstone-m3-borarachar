import { Container } from "./styles";

export default function PillButton({ label, icon: Icon, color, ...rest }) {
  return (
    <Container color={color} {...rest}>
      <Icon />
      {label}
    </Container>
  );
}
