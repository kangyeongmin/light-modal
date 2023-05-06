import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

interface ModalType {
  children?: ReactNode;
  height: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = (props: ModalType) => {
  return (
    <>
      <BackDrop $isOpen={props.isOpen} onClick={props.onClose} />
      <ModalWrapper $isOpen={props.isOpen} $height={props.height}>
        {props.children}
      </ModalWrapper>
    </>
  );
};

const ModalWrapper = styled.div<{
  $isOpen: boolean;
  $height: string;
}>`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  height: ${(props) => props.$height};
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0px;

  background: #fdfdfd;
  border-radius: 5px 5px 0px 0px;

  animation: ${(props) => (props.$isOpen ? slideBottomToUp : slideUpToBottom)}
    0.7s;
`;

const BackDrop = styled.div<{ $isOpen: boolean }>`
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const slideBottomToUp = keyframes`
0% {
  -webkit-transform: translateY(100%);
          transform: translateY(100%);
}
100% {
  -webkit-transform: translateY(0);
          transform: translateY(0);
}
`;

const slideUpToBottom = keyframes`
0% {
  -webkit-transform: translateY(0);
          transform: translateY(0);
}
100% {
  -webkit-transform: translateY(100%);
          transform: translateY(100%);
}
`;

export default Modal;
