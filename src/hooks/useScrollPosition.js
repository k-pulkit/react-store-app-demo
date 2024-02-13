import { useEffect, useState } from "react";

export default function useScrollPosition(threshold) {
    const [scrollPositionChanged, setScrollPositionChanged] = useState(false);
    const handler = () => {
        const position = window.scrollY;
        (position > threshold ? setScrollPositionChanged(true) : setScrollPositionChanged(false))
    }

    useEffect( () => {
        window.addEventListener('scroll', handler)

        return () => window.removeEventListener('scroll', handler)
    }, []);

    return scrollPositionChanged;
}