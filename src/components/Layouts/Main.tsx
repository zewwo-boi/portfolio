import Blobs from "@/components/Party/Blob/Blobs";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "../Common/Header";

interface Props {
    route: string;
    setRoute: React.Dispatch<React.SetStateAction<string>>;
    children: React.JSX.Element;
    overflow_hidden: boolean;
    blob_hidden: boolean;
}

function MainLayout({ children, blob_hidden = false, overflow_hidden = true, ...props }: Props) {
    return (
        <>
            <Header route={props.route} setRoute={props.setRoute} />
            <AnimatePresence>
                {!blob_hidden && <Blobs overflow_hidden={overflow_hidden} />}
            </AnimatePresence>
            <main>
                {React.cloneElement(children, {
                    route: props.route,
                    setRoute: props.setRoute,
                })}
            </main>
        </>
    );
}

export default MainLayout;
