import { ReactNode } from "react";
export default interface IProps{
    /**
     // Reveal modal if true
     * 
     */
    open: boolean;
    title?: string;
    value?: string;
    onChangeDialog?: any;
    updateModal?: any;
    children?: ReactNode;
}