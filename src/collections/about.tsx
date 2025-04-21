import { buildCollection } from "@firecms/core";

export const aboutCollection = buildCollection({
    id: "about",
    path: "about",
    name: "About Us",
    singularName: "About Us entry",
    icon: "article",
    group: "Content",
    description: "About Us Page Content",
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
        keyStats: {
            dataType: "array",
            name: "KeyStats",
            of: {
                dataType: "map",
                properties: {
                    heading: {
                        name: "Heading",
                        dataType: "string"
                    },
                    content: {
                        name: "Content",
                        dataType: "string"
                    },
                }
            },
            expanded: true,
        },
        info: {
            name: "Info Section",
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
                            btnTxt: {
                                name: "Button Text",
                                dataType: "string",
                            },
                        }
                    },
                    expanded: true,
                },
            },
            expanded: true
        },
        buildTrust: {
            name: "Building Trust Section",
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
                            iconUrl: {
                                name: "Icon Url",
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
        milestone: {
            name: "Milestone Section",
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
                        }
                    },
                    expanded: true,
                },
            },
            expanded: true
        },
        award: {
            name: "Awards Section",
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
                                multiline:true
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
                        }
                    },
                    expanded: true,
                },
            },
            expanded: true
        },
    },
});
