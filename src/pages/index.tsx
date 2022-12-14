import BlobsLayout from "@/components/Layouts/Blobs";
import Layout from "@/components/Layouts/Header";
import Hero from "@/components/Sections/Hero";

// TODO: Add responsive ui for mobile

function Home() {
    return (
        <>
            <Hero />
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return (
        <BlobsLayout>
            <Layout>{page}</Layout>
        </BlobsLayout>
    );
};

export default Home;
