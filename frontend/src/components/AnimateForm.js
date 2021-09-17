import React, { useState, useEffect, useRef } from 'react';

const AnimateForm = ({ text }) => {
    const index = useRef(0);
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        index.current = 0;
        setCurrentText("");
    }, [text]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentText((value) => value + text.charAt(index.current));
            index.current += 1;
        }, 100);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [currentText, text]);
    
    return (
        <input 
            value={currentText}
            disabled
        />
    )
}

export default AnimateForm
