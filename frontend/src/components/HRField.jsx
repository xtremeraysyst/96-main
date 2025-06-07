import React, { useRef, useEffect, useState } from 'react';

function HrField({ type = "text", id, value, handleChange }) {
    const spanRef = useRef(null);
    const inputRef = useRef(null);
    const [inputWidth, setInputWidth] = useState(50);

    useEffect(() => {
        if (spanRef.current) {
            const width = spanRef.current.offsetWidth + 20;
            setInputWidth(width);
        }
    }, [value]);

    return (
        <div className="inline-block relative">
            <span
                ref={spanRef}
                className="absolute top-0 left-0 invisible whitespace-pre pl-1 py-1 font-sans text-base"
            >
                {value || ""}
            </span>

            <input
                ref={inputRef}
                className="pl-1 py-1 rounded appearance-none bg-yellow-300"
                style={{ width: `${inputWidth + 15}px` }}
                type={type}
                id={id}
                name={id}
                value={value}
                required={true}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
    );
}

export default HrField;