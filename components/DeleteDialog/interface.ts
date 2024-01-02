export default interface IProps{
    open: boolean;
    submitBtn?: string;
     /** Event: Click cancel button */
     onCancel?: () => void;
     /** Event: Click submit button */
     onSubmit?: () => void;
}