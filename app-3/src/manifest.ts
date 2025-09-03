type MFSidebarMenu = { 
    "key": string;
    "item": string;
    "icon": string;
    "text": string; 
};

type MFAssets = {
    logo: string;
} & Record<string, string>

type Manifest = {
    appName: string;
    version: string;
    routeName: string;
    engineId: number;
    engineKey: string;
    sidebar: MFSidebarMenu[];
    preloads: string[];
    components: Record<string, string>;
    features?: {
        sidebar?: boolean;
        auth?: boolean;
    };
    icons?: string[];
    assets: MFAssets
}

const manifest: Manifest = {
    appName: "engine3",
    version: "1.0.0",
    routeName: "Route",
    engineId: 12,
    engineKey: "engine3",
    sidebar: [
        { "key": "overview", "item": "overview", "icon": "folder", "text": "Overview" },
        { "key": "analytics", "item": "analytics", "icon": "trending-up", "text": "Analytics" }
    ],
    preloads: [],
    components: {},
    features:{
        sidebar: true,
        auth: true
    },
    icons: [],
    assets: {
        logo: "/assets/logo.svg",
    },
}

export default manifest;