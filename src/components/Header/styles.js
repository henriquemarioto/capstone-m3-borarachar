import styled, { css } from "styled-components";

export const Container = styled.div`
  min-height: 90px;
  max-height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background: var(--darker-blue);
  background: linear-gradient(to bottom, #07387b, #050b2f);
  font-family: "Roboto", sans-serif;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: 2rem;
  }
  .legenda {
    display: none;
  }

  .divNav {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      border-radius: 70px;
      padding: 3px;
      margin-right: 5px;
      width: 100%;
      height: 30px;
    }
  }
  .bttIcons {
    color: var(--white-50);
    border: none;
    background-color: transparent;
    text-align: center;
  }
  .bttIcons :hover {
    border-radius: 100%;
    background-color: var(--white);
    color: var(--darker-blue);
  }

  .bttPesquisar {
    background-color: var(--white-15);
    border-radius: 100%;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bttPesquisar:hover {
    background-color: var(--white);
    color: var(--darker-blue);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    .bttIcons {
      min-width: 120px;
    }
    .legenda {
      display: unset;
      margin-left: 5px;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button:hover {
      svg {
        border-radius: 100%;
        background-color: var(--white);
        color: var(--darker-blue);
      }

      .legenda {
        background-color: transparent;
        color: var(--white);
      }
    }
  } ;
`;

export const ContentLogo = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--white-15);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  h2 {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    border-bottom: none;
  } ;
`;
export const ContentMenu = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ContentSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--white-15);
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  input {
    width: 90%;
    height: 30px;
    border-radius: 70px;
    padding-left: 6px;
  }
  input::placeholder {
    color: var(--dark);
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: var(--white);
    width: 100%;
    height: 100%;
  }
  button:hover {
    transition: 0.6s;
    filter: invert();
  }
  .divIconSearch {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .divIconSearch:hover {
    transition: 0.6s;
    filter: invert();
  }

  @media (min-width: 768px) {
    border-bottom: none;

    button:hover {
      svg {
        border-radius: 100%;
        background-color: transparent;
        color: var(--white);
      }
    }
  } ;
`;
