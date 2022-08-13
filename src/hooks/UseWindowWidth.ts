import { useEffect, useState } from "react";

const debounce = (fn: () => void, ms: number) => {
    let timer: number | undefined;
    return () => {
        clearTimeout(timer);
        timer = setTimeout((_) => {
            timer = undefined;
            fn();
        }, ms);
    };
};

export const useWindowWidth = () => {

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setWidth(window.innerWidth);
        }, 500);

        window.addEventListener("resize", debouncedHandleResize);

        return () => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    });
    return width
}