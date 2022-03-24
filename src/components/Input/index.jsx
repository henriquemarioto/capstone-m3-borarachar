import { useState } from "react";
import { Container, TextContainer } from "./style";

function Input({
  isErrored = false,
  inputName,
  register,
  name,
  type = "text",
  maxLength,
  min,
  max,
  ...rest
}) {
  const [focus, setFocus] = useState(false);

  return (
    <Container {...rest} isErrored={isErrored}>
      <TextContainer isErrored={isErrored} focus={focus}>
        {inputName}
      </TextContainer>
      {type === "number" ? (
        <input
          {...register(name)}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          type={type}
          min={min}
          max={max}
        />
      ) : (
        <input
          {...register(name)}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          type={type}
          maxLength={maxLength}
        />
      )}

      {}
    </Container>
  );
}

export default Input;
