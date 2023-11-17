import { useEffect } from "react";
import { createPortal } from "react-dom"

interface IPortalProps {
    children: React.ReactNode
    onClose: () => void
}

export const Portal: React.FC<IPortalProps> = ({ children, onClose }) => {
    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.body.addEventListener("keydown", closeOnEscapeKey);

        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [onClose]);

    return createPortal(
        children, document.body)
}