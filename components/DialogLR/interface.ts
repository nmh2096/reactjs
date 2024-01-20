import { ReactNode } from "react";

export default interface IProps {
  /** Reveal modal if true */
  open: boolean;
  /** Title of modal */
  title?: string;
  /** Title of modal */
  title1?: string;
  /** Children */
  children?:ReactNode;
  /** Text of OK button */
  submitBtn?: string;
  /** Event: Click cancel button */
  onCancel?: () => void;
  /** Event: Click submit button */
  onSubmit?: () => void;
}