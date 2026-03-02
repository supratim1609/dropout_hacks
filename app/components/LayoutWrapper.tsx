"use client";

import React from "react";
import { SpideyCursor } from "./SpideyCursor";
import { WebShooter } from "./WebShooter";
import { Navbar } from "./Navbar";
import { LoadingScreen } from "./LoadingScreen";
import { HoliEffect } from "./HoliEffect";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <LoadingScreen>
            <HoliEffect />
            <SpideyCursor />
            <WebShooter />
            <Navbar />
            {children}
        </LoadingScreen>
    );
};
