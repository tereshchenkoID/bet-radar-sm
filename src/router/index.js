import {lazy} from "react";

const History = lazy(() => import("../pages/History"))
const Table = lazy(() => import("../pages/Table"))
const Overview = lazy(() => import("../pages/Overview"))
const NotFound = lazy(() => import("../pages/NotFound"))

export const router = [
    {
        path: "/:theme/ro/:sport/:id",
        element: (
            <Overview />
        )
    },
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
