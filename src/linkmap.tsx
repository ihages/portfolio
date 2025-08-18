export type Page = {
    name: string,
    url: string,
    title: string,
    metaDesc: string,
}

export const LinkMap: Page[] = [
    {
        name: "Home",
        url: "/portfolio/",
        title: "Ihages | Home",
        metaDesc: "Isabelle Hageman's portfolio and web development testing grounds",
    },
    {
        name:"Test Environment",
        url:"/portfolio/test-environment",
        title: "Ihages | Test Environment",
        metaDesc: "Isabelle Hageman's testing environment for various npm libraries, currently including ShadCN",
    }
]