import { buildCollection } from "@firecms/core";

export const toolsCollection = buildCollection({
    id: "tools",
    path: "tools",
    name: "Tools",
    singularName: "Tools entry",
    icon: "article",
    group: "Content",
    description: "Tools Page Content",
    defaultSize: "l",
    properties: {
        pageData:{
            name:"Page Data",
            dataType:"map",
            properties: {
                pageName: {
                    name: "Page Name",
                    dataType: "string",
                },
                pageSlug: {
                    name: "Page Slug",
                    dataType: "string",
                },
            },
        },
        metaData: {
            name: "SEO Meta Data",
            dataType: "map",
            properties: {
                title: {
                    name: "Meta Title",
                    dataType: "string",
                },
                description: {
                    name: "Meta Description",
                    dataType: "string",
                    multiline: true,
                },
                canonical: {
                    name: "Canonical URL",
                    dataType: "string",
                },
                imageUrl: {
                    name: "Image URL",
                    dataType: "string",
                    url: true
                }
            },
            expanded: true
        },
        banner: {
            name: "Banner",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                    multiline: true,
                },
                content: {
                    name: "Content",
                    dataType: "string",
                    multiline: true,
                },
                btnTxt: {
                    name: "Button Text",
                    dataType: "string",
                },
                btnLink: {
                    name: "Button Link",
                    dataType: "string",
                    url: true
                },
            },
            expanded: true
        },
        steps: {
            name: "Steps Account Section",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                },
                content: {
                    name: "Content",
                    dataType: "string",
                },
                steps: {
                    dataType: "array",
                    name: "Steps",
                    of: {
                        dataType: "map",
                        properties: {
                            heading: {
                                name: "Heading",
                                dataType: "string",
                            },
                            content: {
                                name: "Content",
                                dataType: "string",
                            },
                            imageUrl: {
                                name: "Image URL",
                                dataType: "string",
                                url: true
                            },
                            btnTxt: {
                                name: "Button Text",
                                dataType: "string",
                            },
                            link: {
                                name: "Link",
                                dataType: "string",
                                url: true
                            }
                        }
                    },
                    expanded: true,
                },
            },
            expanded: true
        },
    },
});
