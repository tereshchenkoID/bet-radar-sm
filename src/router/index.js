import {lazy} from "react";

const History = lazy(() => import("pages/History"))
const Table = lazy(() => import("pages/Table"))
const Overview = lazy(() => import("pages/Overview"))
const NotFound = lazy(() => import("pages/NotFound"))
const Live = lazy(() => import("pages/Live"))

export const router = [
    {
        path: "/:language/:theme/ro/:sport/:id",
        element: (
            <Overview />
        )
    },
    {
        path: "/:language/:theme/rt/:sport/:id",
        element: (
            <History />
        )
    },
    {
        path: "/:language/:theme/rh/:sport/:id",
        element: (
            <Table />
        )
    },
    {
        path: "/live/:language/:theme",
        element: (
            <Live />
        )
    },
    {
        path: "*",
        element: (
            <NotFound />
        )
    }
];
