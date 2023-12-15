import { AnimatePresence } from "framer-motion";
import Blobs from "../Party/Blob/Blobs";

interface Props {
    overflow_hidden?: boolean;
    children: React.ReactNode;
    hidden?: boolean;
}

function BlobsLayout({ overflow_hidden = true, children, hidden = false }: Props) {
    return (
        <>
            <AnimatePresence>
                {!hidden && <Blobs overflow_hidden={overflow_hidden} />}
            </AnimatePresence>
            <div>{children}</div>
        </>
    );
}

export default BlobsLayout;
