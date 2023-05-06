import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { keyframes } from "styled-components";
const Modal = (props) => {
    return (_jsxs(_Fragment, { children: [_jsx(BackDrop, { "$isOpen": props.isOpen, onClick: props.onClose }), _jsx(ModalWrapper, Object.assign({ "$isOpen": props.isOpen, "$height": props.height }, { children: props.children }))] }));
};
const ModalWrapper = styled.div `
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
const BackDrop = styled.div `
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const slideBottomToUp = keyframes `
0% {
  -webkit-transform: translateY(100%);
          transform: translateY(100%);
}
100% {
  -webkit-transform: translateY(0);
          transform: translateY(0);
}
`;
const slideUpToBottom = keyframes `
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
