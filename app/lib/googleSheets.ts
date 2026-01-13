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
    gender?: string;
}

function getGoogleDriveDirectLink(url: string | undefined): string {
    if (!url) return "";
    // Matches standard Google Drive File IDs (alphanumeric, -, _, usually 33 chars long)
    // Works for:
    // https://drive.google.com/file/d/FILE_ID/view
    // https://drive.google.com/open?id=FILE_ID
    // https://drive.google.com/uc?id=FILE_ID
    const idRegex = /[-\w]{25,}/;
    const match = url.match(idRegex);
    return match ? `https://drive.google.com/uc?export=view&id=${match[0]}` : url;
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
        const response = await fetch(SHEET_URL, { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to fetch CSV");

        const text = await response.text();
        const rows = text.split("\n").slice(1);
        const members: TeamMember[] = [];

        for (const row of rows) {
            if (!row.trim() || row.replace(/,/g, '').trim() === '') continue;

            const cols = row.split(",").map(c => c.trim().replace(/^"|"$/g, ''));
            if (cols.length < 2) continue;

            members.push({
                name: cols[1] || "Unknown",
                image: getGoogleDriveDirectLink(cols[2]),
                socials: {
                    linkedin: cols[3] || undefined,
                    github: cols[4] || undefined,
                    instagram: cols[5] || undefined,
                    twitter: cols[6] || undefined,
                },
                role: cols[7] || "Member",
                gender: cols[8] || "M" // Default to M if missing, or handle undefined
            });
        }

        return members.sort((a, b) => {
            const roleA = a.role.toLowerCase();
            const roleB = b.role.toLowerCase();

            const isOrgA = roleA.includes("organiser");
            const isOrgB = roleB.includes("organiser");

            // Organisers always come first
            if (isOrgA && !isOrgB) return -1;
            if (!isOrgA && isOrgB) return 1;

            // If both are organisers, keep their original order (stable sort)
            // Or sort them alphabetically too if desired? User said "other than the organisers all will come in alphabetical order"
            // implying organisers stay as is or have their own rule. Assuming keeping distinct.
            if (isOrgA && isOrgB) return 0;

            // If neither are organisers, sort alphabetically by name
            return a.name.localeCompare(b.name);
        });

    } catch (error) {
        console.error("Error fetching team data:", error);
        return FALLBACK_MEMBERS;
    }
}
