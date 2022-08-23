import React from "react";

function SolidButton({ children, className }) {
    className ? (className = className) : (className = "");

    return (
        <button
            className={`${className} relative box-border h-auto min-h-[2rem] w-auto min-w-[5rem] rounded-lg border border-solid border-primary bg-btn-primary py-1 px-3 text-center text-sm font-semibold tracking-wide text-btn-primary transition-all duration-200 hover:border-primary_hover hover:bg-btn-primary_hover hover:text-btn-primary_hover`}>
            {children}
        </button>
    );
}

function LightButton({ children, className }) {
    return (
        <button
            className={`${className} relative box-border h-auto min-h-[2rem] w-auto min-w-[5rem] rounded-lg py-1 px-3 text-center text-sm font-semibold tracking-wide text-btn-primary transition-all duration-200 hover:bg-btn-secondary_hover hover:text-btn-primary_hover`}>
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
    return buttonType === "solid" ? (
        <>{SolidButton({ children, className })}</>
    ) : (
        <>{LightButton({ children, className })}</>
    );
}
