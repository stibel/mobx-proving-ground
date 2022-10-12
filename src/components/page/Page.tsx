import {ReactNode} from "react";
import "./Page.css"

interface IPageProps {
    children: ReactNode | Array<ReactNode>
}

export const Page = ({children}: IPageProps) => {
    return (
        <div className={"wrapper"}>
            {children}
        </div>
    )
}