type TitleProps = {
    children: React.ReactNode
    className?: string
}
function Title({children, className} : TitleProps) {
    return (
        <div className={`text-start text-white text-[32px] font-medium ${className}`}>
            <span className="text-highlight">#</span>{children}
        </div>
    )
}

export default Title;