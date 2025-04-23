import { buildCollection } from "@firecms/core";

export const accountCollection = buildCollection({
    id: "account",
    path: "account",
    name: "Account",
    singularName: "Account entry",
    icon: "article",
    group: "Content",
    description: "Account Page Content",
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
                    dataType: "array",
                    oneOf: {
                        typeField: "type", // this will be the dropdown field
                        valueField: "value", // this will hold the actual content data
                        properties: {
                            imageUrl: {
                                name: "Image Url",
                                dataType: "string",
                                url: true
                            },
                            heading: {
                                dataType: "string",
                                name: "Heading",
                            },
                        }
                    }
                },
                mobileHeading:{
                    name: "Mobile Heading",
                    dataType: "string",
                    markdown:true
                },
                content: {
                    name: "Content",
                    dataType: "string",
                },
            },
            expanded: true
        },
        account: {
            name: "Account Section",
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
                accountName: {
                    name: "Account Name",
                    dataType: "string",
                },
                table1:{
                    name:"Table 1",
                    dataType:"string",
                    markdown:true
                },
                table2:{
                    name:"Table 2",
                    dataType:"string",
                    markdown:true
                },
                note: {
                    name: "Note",
                    dataType: "string",
                    multiline:true
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
        beginTrading: {
            name: "Begin Trading Section",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
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
                imageUrl: {
                    name: "Image URL",
                    dataType: "string",
                    url: true
                }
            },
            expanded: true
        },
    },
});
