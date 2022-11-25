import React, { FC } from "react";

export interface LabelProps {
    className?: string;
    title: string;
}

const Label: FC<LabelProps> = ({ className, title, ...props }) => {
    return (
        <label className={className} {...props}>
            {title}
        </label>
    );
};

export default Label;
