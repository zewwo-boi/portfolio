import Header from "../Common/Header";

function HeaderLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}

export default HeaderLayout;
