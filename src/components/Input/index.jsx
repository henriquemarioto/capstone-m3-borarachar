import { useState } from "react";
import { Container, TextContainer } from "./style";

function Input({ isErrored = false, inputName, ...rest }) {
  const [focus, setFocus] = useState(false);

  return (
    <Container {...rest} isErrored={isErrored}>
      <TextContainer isErrored={isErrored} focus={focus}>
        {inputName}
      </TextContainer>
      <input onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} />
    </Container>
  );
}

export default Input;
