import React from "react"

interface buttonProps {
    name: string
};

const Button: React.FC<buttonProps> = ({name}) => {
    return (
        <div className="parent-button">
            <div className="button">
                <p>{name}</p>
            </div>
        </div>
    )
};

export default Button;