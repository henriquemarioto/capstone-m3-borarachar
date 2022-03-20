import { Main } from "./styles";

import Header from "../Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
