import { ReactNode } from "react";
interface ModalType {
    children?: ReactNode;
    height: string;
    isOpen: boolean;
    onClose: () => void;
}
declare const Modal: (props: ModalType) => JSX.Element;
export default Modal;
