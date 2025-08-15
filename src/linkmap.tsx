export type Page = {
    name: string,
    url: string,
}

// Helper to determine base path
const getBasePath = () => {
    if (typeof window !== 'undefined') {
        const host = window.location.host;
        if (host.startsWith('localhost')) { //handles local
            return '';
        } else if (host.includes('github.io')) { //handles prod
            return '/portfolio';
        }
    }
    return '';
};

export const LinkMap: Page[] = [
    {
        name: "Home",
        url: `${getBasePath()}/`
    },
    {
        name: "Test Environment",
        url: `${getBasePath()}/test-environment`
    }
];