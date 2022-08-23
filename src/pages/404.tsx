import { useRouter } from "next/router";

export default function Error404() {
    const router = useRouter();

    return (
        <div className="h-screen w-full p-8">
            <div
                onClick={() => router.back()}
                className="go_back group relative h-auto w-24 cursor-pointer">
                <span className="relative left-0 transition-[left] group-hover:-left-[2px]">
                    ←{" "}
                </span>
                <span>Go back</span>
            </div>
            <div className="error relative top-1/2 left-1/2 flex -translate-y-1/2 -translate-x-1/2 flex-col leading-loose">
                <h1 className="text-6xl leading-snug tracking-wide">Error 404</h1>
                <hr className="w-96" />
                <h2 className="leading-[4]">Page not found.</h2>
            </div>
        </div>
    );
}
