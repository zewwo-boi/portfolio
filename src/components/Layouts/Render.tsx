import BlobsLayout from "@/components/Layouts/Blobs";
import MainLayout from "@/components/Layouts/Main";
import Layouts from "@/utils/types/Layouts";

interface Props {
    layouts: Layouts;
    children: React.JSX.Element;
}

export default function Render({ layouts, children }: Props) {
    return (
        <BlobsLayout visible={layouts.blobs}>
            <MainLayout visible={layouts.header}>{children}</MainLayout>
        </BlobsLayout>
    );
}
