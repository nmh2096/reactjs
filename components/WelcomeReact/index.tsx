import { ReactNode } from "react";
import "./style.scss"

interface IProps {
    initNumber?: string | number;
    props1?: string;
    props2?: number;
    // nếu có dấu hỏi chấm thì có thể truyền hay không truyền tùy( đây là ở bên js là dấu ?)
    // initNumber không có dấu ? nên bắt buộc phải truyền bên app để nhận
    checkEmit: (a: string) => void;
    // react khi gọi 1 hàm hay params thì bắt buộc phải truyền xuống 1 hàm hoặc 1 params function
    children?: ReactNode
}

interface IObj {
    a: string;
    b: number;
    c: boolean
}

export default function WelcomeReact(props: IProps) {
    const { checkEmit, children } = props;

    const emit: string = 'Emitted'

    const pureObj: IObj = {
        a: '1',
        b: 2,
        c: true
    };

    const strArray: string[] = ['a,b,c']

    // const pureArray = [
    //     {
    //         a: '1',
    //         b: 2,
    //         c: true
    //     },
    //     {
    //         a: '2',
    //         b: 4,
    //         c: false
    //     },        
    // ]

    console.log(pureObj);
    // console.log(pureArray);
    console.log(strArray);

    return (
        <div className="welcome-container">
            <div>{children}</div>

            {/* //!-- trong thẻ p không được bọc thêm thẻ nào khác mà chỉ có 1 children con duy nhất */}
            <button onClick={() => checkEmit(emit)}>CLick</button>
        </div>
    )
}
