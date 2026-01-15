import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Code of Conduct & Rules",
    description: "Read the Code of Conduct and rules for Dropout Hacks hackathon. We are committed to providing a harassment-free, inclusive, and welcoming environment for all participants in Kolkata's premier tech event.",
    keywords: [
        "dropout hacks rules",
        "hackathon code of conduct",
        "dropout hacks guidelines",
        "hackathon rules kolkata",
        "tech event conduct",
        "inclusive hackathon"
    ],
    openGraph: {
        title: "Code of Conduct & Rules | Dropout Hacks",
        description: "Read the Code of Conduct and rules for Dropout Hacks hackathon. Creating an inclusive and welcoming environment for all.",
        url: "https://dropouthacks.tech/rules",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Dropout Hacks Code of Conduct",
            },
        ],
    },
    alternates: {
        canonical: "https://dropouthacks.tech/rules",
    },
};

export default function RulesPage() {
    return (
        <main className="min-h-screen bg-[var(--color-comic-dark)] text-white relative selection:bg-[var(--color-comic-red)] selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">

                {/* Header */}
                <div className="mb-16 border-b border-gray-800 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-body)] mb-4">
                        Code of Conduct
                    </h1>

                </div>

                {/* Content */}
                <div className="space-y-12 font-[family-name:var(--font-body)] text-gray-300 leading-relaxed text-lg">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. The Pledge</h2>
                        <p>
                            We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
                        </p>
                        <p className="mt-4">
                            We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Our Standards</h2>
                        <div className="space-y-4">
                            <p>Examples of behavior that contributes to a positive environment for our community include:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-400">
                                <li>Demonstrating empathy and kindness toward others</li>
                                <li>Being respectful of differing opinions, viewpoints, and experiences</li>
                                <li>Giving and gracefully accepting constructive feedback</li>
                                <li>Accepting responsibility and apologizing to those affected by our mistakes</li>
                                <li>Focusing on what is best not just for us as individuals, but for the overall community</li>
                            </ul>
                        </div>
                        <div className="space-y-4 mt-8">
                            <p>Examples of unacceptable behavior include:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-400">
                                <li>The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
                                <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
                                <li>Public or private harassment</li>
                                <li>Publishing others' private information, such as a physical or email address, without their explicit permission</li>
                                <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Enforcement</h2>
                        <p>
                            Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement by connecting directly with the <strong className="text-white">ORGANISERS</strong>.
                        </p>
                        <p className="mt-4">
                            All complaints will be reviewed and investigated promptly and fairly. All community leaders are obligated to respect the privacy and security of the reporter of any incident.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Scope</h2>
                        <p>
                            This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
