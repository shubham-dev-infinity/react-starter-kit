import { HTMLProps, ReactNode } from "react"

type TContainer = {
    children: ReactNode;
} & HTMLProps<HTMLDivElement>

const Container = ({ children }: TContainer) => {
    return (
        <div className='container'>
            {children}
        </div>
    )
}

export default Container