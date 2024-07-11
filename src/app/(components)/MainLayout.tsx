"use client";

import Link from "next/link";
import { ReactNode } from "react";

const Page = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <div className="drawer drawer-end">
                    <input
                        id="my-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content">
                        <header className="navbar bg-neutral">
                            <div className="navbar-start">
                                <Link
                                    href="/"
                                    className="btn btn-ghost text-2xl"
                                >
                                    BandSync
                                </Link>
                            </div>
                            <div className="navbar-end">
                                <label
                                    htmlFor="my-drawer"
                                    className="btn btn-square btn-ghost drawer-button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-5 w-5 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </label>
                            </div>
                        </header>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="my-drawer"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            <p className="text-2xl p-4">BandSync</p>
                            <li className="pt-4">
                                <Link
                                    href="/gigs"
                                    onClick={() => {
                                        document
                                            .getElementById("my-drawer")
                                            ?.click();
                                    }}
                                >
                                    Gigs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/clients"
                                    onClick={() => {
                                        document
                                            .getElementById("my-drawer")
                                            ?.click();
                                    }}
                                >
                                    Clients
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/members"
                                    onClick={() => {
                                        document
                                            .getElementById("my-drawer")
                                            ?.click();
                                    }}
                                >
                                    Members
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/inventory"
                                    onClick={() => {
                                        document
                                            .getElementById("my-drawer")
                                            ?.click();
                                    }}
                                >
                                    Inventory
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/set-lists"
                                    onClick={() => {
                                        document
                                            .getElementById("my-drawer")
                                            ?.click();
                                    }}
                                >
                                    Set Lists
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/fund-watcher"
                                    onClick={() => {
                                        document
                                            .getElementById("my-drawer")
                                            ?.click();
                                    }}
                                >
                                    FundWatcher
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {children}
                </div>
            </body>
        </html>
    );
};

export default Page;
