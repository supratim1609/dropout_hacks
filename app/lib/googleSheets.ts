export interface TeamMember {
    name: string;
    role: string;
    image: string;
    socials: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        instagram?: string;
    };
}

// Fallback data in case the sheet fails or isn't configured
const FALLBACK_MEMBERS: TeamMember[] = [
    {
        name: "Supratim Dhara",
        role: "Organiser",
        image: "https://drive.google.com/uc?export=view&id=1guK9sp3xdo_zuoXy716PAFxKYdauLMyW",
        socials: {
            linkedin: "https://www.linkedin.com/in/supratimdhara/",
            github: "https://github.com/supratim1609",
            instagram: "https://www.instagram.com/dhara_apk/"
        }
    },
    {
        name: "Diptish De",
        role: "Organiser",
        image: "https://drive.google.com/uc?export=view&id=1V2fVswuGdgzkxTm9hTsf4Nn9aft89hc_",
        socials: {
            linkedin: "https://www.linkedin.com/in/diptish-de/",
            github: "https://github.com/Diptish-De",
            instagram: "https://www.instagram.com/diptish.verse/",
            twitter: "https://x.com/DeDiptish"
        }
    },
    {
        name: "Sourodeep Paul",
        role: "Organiser",
        image: "https://drive.google.com/uc?export=view&id=1VV4NHC0b2h4Wm-n_37BPv751GREFv7ib",
        socials: {
            linkedin: "https://linkedin.com/in/sourodeeppaul",
            github: "https://github.com/sourodeeppaul",
            instagram: "https://instagram.com/sourodeeppaul",
            twitter: "https://x.com/sourodeeppaul"
        }
    },
    {
        name: "Prithwisha Biswas",
        role: "PR & Outreach",
        image: "https://drive.google.com/uc?export=view&id=13jfUm35lo9cr8_C9WfDKTBMz5Mtvkcpj",
        socials: {
            linkedin: "https://www.linkedin.com/in/prithisha-biswas-99a2a9334",
            instagram: "https://www.instagram.com/_prithwishaa_"
        }
    },
    {
        name: "Subhayan Basak",
        role: "Social Media Team",
        image: "https://drive.google.com/uc?export=view&id=1ouvKWnO5sktRlWARWxvuuybcm_782xDJ",
        socials: {
            linkedin: "https://www.linkedin.com/in/subhayan-basak-356319379",
            instagram: "https://www.instagram.com/__subhayaan__"
        }
    },
    {
        name: "Sarika Shaw",
        role: "Organiser",
        image: "https://drive.google.com/uc?export=view&id=1l5RHN42OFzOIDLEauQrF3Yl7mXom8h7O",
        socials: {
            linkedin: "https://www.linkedin.com/in/sarika-shaw-706424355"
        }
    }
];

export async function getTeamData(): Promise<TeamMember[]> {
    const SHEET_URL = process.env.NEXT_PUBLIC_TEAM_SHEET_URL;

    if (!SHEET_URL) {
        console.warn("Google Sheet URL not found in environment variables. Using fallback data.");
        return FALLBACK_MEMBERS;
    }

    try {
        const response = await fetch(SHEET_URL, { cache: "no-store" }); // Disable cache for instant updates
        if (!response.ok) throw new Error("Failed to fetch CSV");

        const text = await response.text();
        const rows = text.split("\n").slice(1); // Skip header

        return rows.map(row => {
            // Check if row is empty or just commas
            if (!row.trim() || row.replace(/,/g, '').trim() === '') return null;

            // Simple CSV split
            // Format: Timestamp, Name, Photo, LinkedIn, GitHub, Instagram, Twitter, Role
            const cols = row.split(",").map(c => c.trim().replace(/^"|"$/g, '')); // Remove quotes

            if (cols.length < 2) return null; // Skip empty rows

            // Revised for structure: Timestamp, Name, Photo, LinkedIn, GitHub, Instagram, Twitter, Role
            return {
                name: cols[1] || "Unknown",
                image: cols[2]?.replace("/open?id=", "/uc?export=view&id=") || "",
                socials: {
                    linkedin: cols[3] || undefined,
                    github: cols[4] || undefined,
                    instagram: cols[5] || undefined,
                    twitter: cols[6] || undefined,
                },
                role: cols[7] || "Member"
            };
        }).filter((item): item is TeamMember => item !== null).sort((a, b) => {
            const roleA = a.role.toLowerCase();
            const roleB = b.role.toLowerCase();

            // Organisers come first
            if (roleA.includes("organiser") && !roleB.includes("organiser")) return -1;
            if (!roleA.includes("organiser") && roleB.includes("organiser")) return 1;

            return 0; // Keep original order otherwise
        });

    } catch (error) {
        console.error("Error fetching team data:", error);
        return FALLBACK_MEMBERS;
    }
}
