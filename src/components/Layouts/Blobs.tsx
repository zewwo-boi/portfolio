import Blobs from "../Party/Blobs";

interface Props {
    overflow_hidden?: boolean;
    children;
}

function BlobsLayout({ overflow_hidden, children }: Props) {
    return (
        <>
            <Blobs overflow_hidden={overflow_hidden} />
            <main>{children}</main>
        </>
    );
}

export default BlobsLayout;
