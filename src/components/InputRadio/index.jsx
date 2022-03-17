import { useState } from "react";
import {
  Container,
  TextContainer,
  InputsContainer,
  InputContainer,
} from "./style";

function InputRadio({ isErrored = false, inputName, register, data, ...rest }) {
  const [focus, setFocus] = useState(false);

  return (
    <Container {...rest} isErrored={isErrored}>
      <TextContainer isErrored={isErrored} focus={focus}>
        {inputName}
      </TextContainer>

      <InputsContainer>
        {data.map(({ name, label, value, checked }, index) => {
          return (
            <InputContainer key={index}>
              <input
                type="radio"
                value={value}
                {...register(name)}
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
                checked={checked}
              />
              <span>{label}</span>
            </InputContainer>
          );
        })}
      </InputsContainer>
    </Container>
  );
}

export default InputRadio;
