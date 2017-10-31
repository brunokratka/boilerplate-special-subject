import styled from "styled-components";

export const Card = styled.div`
  opacity: 0;
  width: 296px;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.14902) 0px 2px 4px;
  transition: transform 550ms cubic-bezier(0.7, 0, 0.3, 1) 50ms,
    opacity 750ms cubic-bezier(0.7, 0, 0.3, 1) 50ms;
  transform: translateY(100%);
  &.animate {
    opacity: 1;
    transform: translateY(0%);
    &:hover {
      div {
        opacity: 1;
        transform: translateY(0%);
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    div {
      bottom: 0;
      opacity: 0;
      width: 100%;
      height: 50px;
      padding: 0px;
      color: white;
      display: flex;
      position: absolute;
      align-items: center;
      box-sizing: border-box;
      justify-content: center;
      transform: translateY(100%);
      background-color: rgba(0, 0, 0, 0.57);
      transition: transform 200ms ease-out, opacity 200ms linear;
    }
  }
`;
