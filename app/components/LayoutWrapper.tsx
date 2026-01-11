"use client";

import React from "react";
import { SpideyCursor } from "./SpideyCursor";
import { WebShooter } from "./WebShooter";
import { Navbar } from "./Navbar";
import { LoadingScreen } from "./LoadingScreen"; // Spider-Web version
// import { PortalLoadingScreen } from "./PortalLoadingScreen"; // Portal version

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <LoadingScreen>
            <SpideyCursor />
            <WebShooter />
            <Navbar />
            {children}
        </LoadingScreen>
    );
};
