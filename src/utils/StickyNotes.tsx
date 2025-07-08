import Button from "./Button";
import LazyImage from "./LazyImage";

type StickyNoteProp = {
    image?: string
    title: string
    description: string
    isLive?: string
    github? :string
    techstack: string
    children?: React.ReactNode
    className?: string
}

function StickyNote({image, title, description, isLive, github, techstack, children, className} : StickyNoteProp) {
    
    return (
        <div className={`w-full t p-0 ${className}`}>
            { image && (
                <div className="border-1 border-primary border-b-0">
                    <LazyImage className="w-full" src={image} alt={`${title} project screenshot`} />
                </div>
            )}
            { techstack && (
                <div className="techstack border-1 border-primary p-2 text-primary text-[16px] text-left font-regular">{techstack}</div>
            )}
            <div className="notes flex flex-col gap-4 text-left border-1 border-primary p-4">
                <div className="title text-white text-[24px] font-medium">{title}</div>
                <div className="description text-primary text-[16px] font-regular">{description}</div>
                { children && (
                    <div> {children} </div>
                )}
                <div className="flex gap-4">
                    { isLive && (
                        <a href={isLive} target="_blank" rel="noopener noreferrer" style={{ all: "unset" }}>
                            <Button type="highlight">Live &lt;~&gt;</Button>
                        </a>
                    )}
                    { github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" style={{ all: "unset" }}>
                            <Button type="primary">Github &lt;~&gt;</Button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default StickyNote;