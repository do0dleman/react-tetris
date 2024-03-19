import { FaPlay } from "react-icons/fa"
import { Link, LinkProps } from "react-router-dom"

interface MainButtonProps extends LinkProps {
    className?: string
    children: React.ReactNode
}
export default function MainButton(props: MainButtonProps) {

    const { className, children, ...rest } = props

    return (
        <Link {...rest}
            className={`text-2xl relative w-64 ${className} h-full`}
        >
            <div className="pl-8 justify-between text-2xl flex items-center bg-blue-600
                relative hover:translate-y-0.5 active:translate-y-1.5 transition-transform duration-200">
                <span className="">{children}</span>
                <span className="px-4 py-4 bg-blue-600 relative">
                    <FaPlay />
                    <span className="absolute inset-0 bg-white opacity-20" />
                </span>
            </div>
            <div className="absolute w-full -bottom-2 bg-blue-600 -z-20 h-1/3" >
                <div className="bg-black absolute inset-0 opacity-40" />
            </div>
        </Link>
    )
}