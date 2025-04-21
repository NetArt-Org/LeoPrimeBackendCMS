import { buildCollection } from "@firecms/core";

export const tradingCollection = buildCollection({
    id: "trading",
    path: "trading",
    name: "Trading",
    singularName: "Trading entry",
    icon: "article",
    group: "Content",
    description: "Trading Page Content",
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
                },
                content: {
                    name: "Content",
                    dataType: "string",
                },
                btnTxt1: {
                    name: "Button Text 1",
                    dataType: "string",
                },
                btnLink1: {
                    name: "Button Link 1",
                    dataType: "string",
                    url: true
                },
                btnTxt2: {
                    name: "Button Text 2",
                    dataType: "string",
                },
                btnLink2: {
                    name: "Button Link 2",
                    dataType: "string",
                    url: true
                },
                imageUrl: {
                    name: "Image URL",
                    dataType: "string",
                    url: true
                }
            },
            expanded: true
        },
        info: {
            name: "Info Section",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                },
                content1: {
                    name: "First Para",
                    dataType: "string",
                    multiline:true,
                },
                content2: {
                    name: "Second Para",
                    dataType: "string",
                    multiline:true,
                },
            },
            expanded: true
        },
        table: {
            name: "Table Section",
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
                classic:{
                    name:"Classic",
                    dataType:"string",
                    markdown:true,
                },
                pro:{
                    name:"Pro",
                    dataType:"string",
                    markdown:true,
                },
                ecn:{
                    name:"ECN",
                    dataType:"string",
                    markdown:true,
                },
                cent:{
                    name:"Cent",
                    dataType:"string",
                    markdown:true,
                }
            },
            expanded: true
        },
        keyFeatures: {
            name: "Key Features Section",
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
                list: {
                    dataType: "array",
                    name: "List",
                    of: {
                        dataType: "map",
                        properties: {
                            heading: {
                                name: "Heading",
                                dataType: "string",
                            },
                            content1: {
                                name: "Content 1",
                                dataType: "string",
                                multiline:true
                            },
                            content2: {
                                name: "Content 2",
                                dataType: "string",
                                multiline:true
                            },
                            imageUrl: {
                                name: "Image URL",
                                dataType: "string",
                                url: true
                            },
                        }
                    },
                    expanded: true,
                },
            },
            expanded: true
        },
        tradingStrategy: {
            name: "Trading Strategy Section",
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
                list: {
                    dataType: "array",
                    name: "List",
                    of: {
                        dataType: "map",
                        properties: {
                            imageUrl: {
                                name: "Image URL",
                                dataType: "string",
                                url: true
                            },
                            heading: {
                                name: "Heading",
                                dataType: "string",
                            },
                            content: {
                                name: "Content",
                                dataType: "string",
                            },
                        }
                    },
                    expanded: true,
                },
            },
            expanded: true
        },
    },
});
