import { Route, RouteOptions } from "@/utils/types/Routes";

interface IOption {
    route: Route;
    options: RouteOptions;
}

const routes: IOption[] = [
    {
        route: "/",
        options: {
            blobs: {
                hidden: false,
                overflow_hidden: true,
            },
        },
    },
    {
        route: "/about",
        options: {
            blobs: {
                hidden: true,
            },
        },
    },
    {
        route: "/gallery",
        options: {
            blobs: {
                hidden: false,
                overflow_hidden: false,
            },
        },
    },
];

export { routes };
