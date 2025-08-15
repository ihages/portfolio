export type Page = {
    name: string,
    url: string,
}

// Helper to determine base path

const getBasePath = () => {
    if (typeof window === 'undefined') {
        return '';
    }
    const host = window.location.host;
    if (host.startsWith('localhost')) {
        return '/';
    } else if (host.includes('github.io')) {
        return 'portfolio'; // no leading slash for GitHub Pages
    }
    return '/';
};

export const LinkMap: Page[] = [
    {
        name: "Home",
        url: typeof window !== 'undefined' && window.location.host.includes('github.io')
            ? `${getBasePath()}/`
            : `${getBasePath()}`
    },
    {
        name: "Test Environment",
        url: typeof window !== 'undefined' && window.location.host.includes('github.io')
            ? `${getBasePath()}/test-environment`
            : `${getBasePath()}test-environment`
    }
];