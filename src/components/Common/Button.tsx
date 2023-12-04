import classnames from "classnames";
import React from "react";

export function SolidButton({ children, className }) {
    return (
        <button
            className={classnames(
                className,
                "relative box-border h-auto min-h-[2rem] w-auto min-w-[5rem] rounded-lg border border-solid border-primary bg-btn-primary px-3 py-1 text-center text-sm font-semibold tracking-wide text-btn-primary transition-all duration-200 hover:border-primary_hover hover:bg-btn-primary_hover hover:text-btn-primary_hover"
            )}>
            {children}
        </button>
    );
}

export function LightButton({ children, className }) {
    return (
        <button
            className={classnames(
                className,
                "relative box-border h-auto min-h-[2rem] w-auto min-w-[5rem] rounded-lg px-3 py-1 text-center text-sm font-semibold tracking-wide text-btn-primary transition-all duration-200 hover:bg-btn-secondary_hover hover:text-btn-primary_hover"
            )}>
            {children}
        </button>
    );
}

type Props = {
    buttonType?: "solid" | "light";
    children?: React.ReactNode;
    className?: string;
};

export default function Button({ buttonType, children, className }: Props) {
    return buttonType === "light" ? (
        <LightButton className={className}>{children}</LightButton>
    ) : (
        <SolidButton className={className}>{children}</SolidButton>
    );
}
