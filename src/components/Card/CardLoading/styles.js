import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 76px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid var(--light-gray);
  background-color: var(--white);
  min-height: 76px;
  overflow: hidden;
`;

export const InfoMembers = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;

  .span {
    padding-top: 3px;
    height: 19px;
    width: 72px;
    background: var(--light-gray);

    &.small {
      height: 10px;
      width: 82px;
    }
  }

  .places {
    display: flex;
    gap: 5px;
    .span {
      background: var(--light-gray);
      height: 10px;
      width: 72px;
    }
    .strong {
      background: var(--light-gray);
      height: 10px;
      width: 20px;
    }
  }

  .members {
    padding-top: 3px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 3px;

    .img {
      width: 15px;
      height: 15px;
      border-radius: 100%;
      background: var(--light-gray);

      &.square {
        width: 13px;
        height: 14px;
        border-radius: 3px;
      }
    }
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  overflow: hidden;
  position: relative;

  ::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5),
      transparent
    );
    animation: shimmer 2s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

export const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .h3 {
    height: 20px;
    width: 190px;
    background: var(--light-gray);
    &.short {
      width: 120px;
    }
  }

  .img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background: var(--light-gray);

    &.round {
      border-radius: 100%;
    }
  }
`;
