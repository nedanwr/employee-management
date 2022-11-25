import React, {
    FC,
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    ReactNode
} from "react";

export type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    loading?: boolean;
    icon?: ReactNode;
    variant?: "default";
};

const Button: FC<ButtonProps> = ({
    children,
    disabled,
    loading,
    icon,
    variant,
    className,
    ...props
}) => {
    return (
        <button
            disabled={disabled || loading}
            className={
                variant === "default"
                    ? `bg-blue-600 text-white py-3.5 rounded w-full mt-4 font-medium hover:bg-blue-700 duration-300 ease-linear ${className}`
                    : className
            }
            data-testid="button"
            {...props}
        >
            <span className={`text-center`}>{children}</span>
        </button>
    );
};

export default Button;
