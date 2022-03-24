import { useState } from "react";

import { Container, ContentContainer } from "./styles";

import { RiCloseFill } from "react-icons/ri";

export default function AlertBar() {
  const [playAnimation, setPlayAnimation] = useState(
    !!localStorage.getItem("@BoraRachar:user")
  );
  const [closeAlert, setCloseAlert] = useState(
    !!localStorage.getItem("@BoraRachar:user")
  );

  return !closeAlert ? (
    <Container playAnimation={playAnimation}>
      <ContentContainer>
        <p>
          Este site foi desenvolvido apenas para fins de estudo,{" "}
          <strong>não utilize informações verdadeiras!</strong>
        </p>

        <button
          onClick={() => {
            setPlayAnimation(true);
            setTimeout(() => {
              setCloseAlert(true);
            }, 300);
          }}
        >
          <RiCloseFill />
        </button>
      </ContentContainer>
    </Container>
  ) : (
    <></>
  );
}
