import { Collapse, useScrollTrigger } from "@mui/material";
import { useEffect, useState } from "react";


function HideOnScroll({ children }) {
    const triggle = useScrollTrigger({
        threshold: 5,
    });

    const [atTop, setAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setAtTop(window.scrollY <= 5)
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    return (
        <Collapse in={!triggle && atTop} timeout="auto" unmountOnExit={false}>
            {children}
        </Collapse>
    )
}

export default HideOnScroll;