import { Link, LinkProps } from "react-router-dom"

interface SecondaryButton extends LinkProps {
    className?: string
    children: React.ReactNode
}
export default function SecondaryButton(props: SecondaryButton) {

    const { className, children, ...rest } = props

    return (
        <Link {...rest} className={`border-2 border-slate-400 text-slate-400 hover:text-slate-100 
                hover:border-slate-100  transition-colors duration-300 text-xl flex 
                items-center px-4 rounded-lg text-center max-w-48 py-2 ${className}`}>
            {children}
        </Link>
    )
}