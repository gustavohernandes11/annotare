import { useState, useEffect } from "react";

export const useWindowWidth = () => {
    const verifyChanges = () => {
        setWindowWidth(() => window.screen.width);
    };

    useEffect(() => {
        window.addEventListener("resize", verifyChanges);
        return () => {
            window.removeEventListener("resize", verifyChanges);
        };
    }, []);

    const [windowWidth, setWindowWidth] = useState();

    return [windowWidth];
};
