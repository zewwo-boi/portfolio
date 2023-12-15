import { AnimatePresence } from "framer-motion";
import Blobs from "../Party/Blob/Blobs";

interface Props {
    overflow_hidden?: boolean;
    children: React.ReactNode;
    /** @deprecated */
    hidden?: boolean;
    visible?: boolean;
}

function BlobsLayout({ overflow_hidden = true, children, hidden = false, visible = true }: Props) {
    return (
        <>
            <AnimatePresence>
                {visible && <Blobs overflow_hidden={overflow_hidden} />}
            </AnimatePresence>
            {children}
        </>
    );
}

export default BlobsLayout;
