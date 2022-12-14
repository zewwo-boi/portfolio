function BlockText({ children, ...props }) {
    return (
        <span style={{ display: "block" }} {...props}>
            {children}
        </span>
    );
}

export default BlockText;
