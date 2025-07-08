import { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
    src: string;
    alt?: string;
    className?: string;
    width?: string | number;
    height?: string | number;
}

function LazyImage({ src, alt = '', className = '', width, height }: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '50px 0px',
                threshold: 0.01,
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
        <img
            ref={imgRef}
            src={isInView ? src : ''}
            alt={alt}
            className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
            style={{ width, height }}
            onLoad={() => setIsLoaded(true)}
        />
    );
}

export default LazyImage; 