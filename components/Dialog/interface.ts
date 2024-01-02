import { ReactNode } from "react";
export default interface IProps{
    /**
     // Reveal modal if true
     * 
     */
    open: boolean;
    title?: string;
    /**Event children */
    children?: ReactNode;
    submitBtn?: string;
    /** Event: Click cancel button */
    onCancel?: () => void;
    /** Event: Click submit button */
    onSubmit?: () => void;
}