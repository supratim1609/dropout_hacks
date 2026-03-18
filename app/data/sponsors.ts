export interface Sponsor {
    name: string;
    logo: string;
    innerBgClass?: string;
}

export const SPONSORS: Sponsor[] = [
    { name: "Devfolio", logo: "/sponsors/Devfolio_Logo-Colored.png" },
    { name: "Algorand", logo: "/sponsors/Algorand.jpg" },
    { name: "CodeCrafters", logo: "/sponsors/CodeCrafters.png", innerBgClass: "bg-black" },
    { name: "Duality", logo: "/sponsors/Duality.jpg" },
    { name: "Shardeum", logo: "/sponsors/Shardeum.jpg" },
    { name: "Mastra", logo: "/sponsors/Mastra.jpg" },
    { name: "n8n", logo: "/sponsors/n8n.jpg" },
    { name: "v0 by Vercel", logo: "/sponsors/v0.jpg" }
];
