import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

type SpotLightProps = {
    children : React.ReactNode;
}
const SpotLightEffect : React.FC<SpotLightProps> = ({children}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const location = useLocation();

    
    useEffect(() => {
        setOpacity(1);
        setIsFocused(false);
    }, [location]);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    // need to handle the focus and blur events correctly
    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative overflow-hidden"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                opacity,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px,  rgba(29, 78, 216, 0.15), transparent 80%)`,
                }}
            />
            {children}
        </div>
    );
}

export default SpotLightEffect;