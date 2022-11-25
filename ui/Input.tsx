import { ComponentPropsWithoutRef, forwardRef } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
    textarea?: boolean;
    rows?: number;
    error?: boolean;
    transparent?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, textarea, error, transparent, ...props }, ref) => {
        return textarea ? (
            <textarea
                ref={ref as any}
                className={className}
                data-testid="textarea"
                {...(props as any)}
            />
        ) : (
            <input
                ref={ref}
                className={className}
                data-testid="input"
                spellCheck={false}
                autoCapitalize={`off`}
                autoComplete={`off`}
                autoCorrect={`off`}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";

export default Input;
