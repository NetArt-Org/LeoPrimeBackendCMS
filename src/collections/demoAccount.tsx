import { buildCollection } from "@firecms/core";

export const demoCollection = buildCollection({
    id: "demo",
    path: "demo",
    name: "Demo Account",
    singularName: "Demo Account entry",
    icon: "article",
    group: "Content",
    description: "Demo Account Page Content",
    defaultSize: "l",
    properties: {
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
                    markdown: true,
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
        advantages: {
            name: "Advantages Section",
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
                                name: "Heading(Optional)",
                                dataType: "string",
                            },
                            content: {
                                name: "Content(Optional)",
                                dataType: "string",
                            },
                            imageUrl: {
                                name: "Image Url",
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
        keyDifference: {
            name: "Key Difference Section",
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
                difference: {
                    name: "Difference",
                    dataType: "string",
                    markdown: true
                }
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
