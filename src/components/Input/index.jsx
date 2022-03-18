import { useState } from "react";
import { Container, TextContainer } from "./style";

function Input({ isErrored = false, inputName, register, name, ...rest }) {
  const [focus, setFocus] = useState(false);

  return (
    <Container {...rest} isErrored={isErrored}>
      <TextContainer isErrored={isErrored} focus={focus}>
        {inputName}
      </TextContainer>
      <input
        {...register(name)}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      />
    </Container>
  );
}

export default Input;
