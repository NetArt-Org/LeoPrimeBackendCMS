import { buildCollection } from "@firecms/core";

export const whyleoprimeCollection = buildCollection({
    id: "whyleoprime",
    path: "whyleoprime",
    name: "Why LeoPrime",
    singularName: "Why LeoPrime entry",
    icon: "article",
    group: "Content",
    description: "Why LeoPrime Page Content",
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
                            image1: {
                                name: "Image 1 Url",
                                dataType: "string",
                                url:true
                            },
                            image2: {
                                name: "Image 2 Url",
                                dataType: "string",
                                url:true
                            },
                            heading: {
                                name: "Heading",
                                dataType: "string",
                            },
                            content: {
                                name: "Content",
                                dataType: "string",
                                multiline:true
                            },
                        }
                    },
                    expanded: true,
                },
            },
            expanded: true
        },
        commitment: {
            name: "Commitment Section",
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
        riskInfo: {
            name: "Risk Info Section",
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
                            content: {
                                name: "Content",
                                dataType: "string",
                                multiline:true
                            },
                        }
                    },
                    expanded: true,
                },
                imageUrl: {
                    name: "Image Url",
                    dataType: "string",
                    url:true
                },
            },
            expanded: true
        },
        solutions:{
            name: "Solutions Section",
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
                            imageUrl: {
                                name: "Image Url",
                                dataType: "string",
                                url:true
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
        }
    },
});
