import Button from "../../components/common/Button";

export default function Website() {
    return (
        <>
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-solid border-primary bg-body-secondary">
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-solid border-primary bg-body-tertiary">
                    <Button
                        buttonType="solid"
                        className="top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2">
                        Solid
                    </Button>
                    <Button className="top-1/2 left-1/2 mt-4 block -translate-x-1/2 -translate-y-1/2">
                        Light
                    </Button>
                </div>
            </div>
        </>
    );
}
