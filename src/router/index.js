import {lazy} from "react";

const History = lazy(() => import("../pages/History"))
const Table = lazy(() => import("../pages/Table"))
const NotFound = lazy(() => import("../pages/NotFound"))

export const router = [
    {
        path: "/:theme/rt/:sport/:id",
        element: (
            <History />
        )
    },
    {
        path: "/:theme/rh/:sport/:id",
        element: (
            <Table />
        )
    },
    {
        path: "*",
        element: (
            <NotFound />
        )
    }
];
