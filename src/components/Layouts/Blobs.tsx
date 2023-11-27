import Blobs from "../party/Blobs";

interface Props {
    overflow_hidden?: boolean;
    children: React.ReactNode;
}

function BlobsLayout({ overflow_hidden = true, children }: Props) {
    return (
        <>
            <Blobs overflow_hidden={overflow_hidden} />
            <div>{children}</div>
        </>
    );
}

export default BlobsLayout;
