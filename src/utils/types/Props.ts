import { Route } from "@/utils/types/Routes";
import { Dispatch, SetStateAction } from "react";

interface DefaultProps {
    route?: Route;
    setRoute?: Dispatch<SetStateAction<string>>;
}

export type { DefaultProps };
export default DefaultProps;
