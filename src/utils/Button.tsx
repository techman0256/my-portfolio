import './Button.css'

type ButtonProps = {
    children: React.ReactNode;
    type: "primary" | "highlight";
    height?: string;
    width?: string;
}

function Button({children, type, height, width} : ButtonProps) {
    const buttonClass = type === 'primary'
        ? 'border-primary hover:bg-primary-bg'
        : 'border-highlight hover:bg-highlight-bg'

    return (
        <div className={`button ${buttonClass}`}
            style={{
                height: height, // Dynamic height
                width: width, // Dynamic width
            }}
        >
            {children}
        </div>
    )
}


export default Button;