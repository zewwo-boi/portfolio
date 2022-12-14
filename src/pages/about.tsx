import BlobsLayout from "@/components/Layouts/Blobs";
import Layout from "@/components/Layouts/Header";

function About() {
    return <div className="lol">Hello</div>;
}

About.getLayout = function getLayout(page) {
    return (
        <BlobsLayout>
            <Layout>{page}</Layout>
        </BlobsLayout>
    );
};

export default About;
