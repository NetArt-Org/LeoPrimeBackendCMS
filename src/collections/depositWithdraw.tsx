import { buildCollection } from "@firecms/core";

export const depositCollection = buildCollection({
    id: "deposit",
    path: "deposit",
    name: "Deposit",
    singularName: "Deposit Withdraw entry",
    icon: "article",
    group: "Content",
    description: "Deposit Withdraw Page Content",
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
                imageUrl: {
                    name: "Image URL",
                    dataType: "string",
                    url: true
                }
            },
            expanded: true
        },
        info: {
            name: "Payment Soltuion Section",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                },
                content: {
                    name: "Content",
                    dataType: "string",
                    multiline:true,
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
        paymentOption: {
            name: "Payment Option Section",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                },
                content: {
                    name: "Content",
                    dataType: "string",
                    multiline:true,
                },
                deposit: {
                    name: "Deposit",
                    dataType: "string",
                    markdown:true,
                },
                withdraw: {
                    name: "Withdraw",
                    dataType: "string",
                    markdown:true,
                },
            },
            expanded: true
        },
        customerSupport: {
            name: "Customer Support Section",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                },
                list: {
                    dataType: "array",
                    name: "List",
                    of: {
                        dataType: "map",
                        properties: {
                            content: {
                                name: "Content",
                                dataType: "string",
                            },
                        }
                    },
                    expanded: true,
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
        keyInfo: {
            name: "Key Information Section",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                },
                content: {
                    name: "Content",
                    dataType: "string",
                    multiline:true,
                },
            },
            expanded: true
        },
    },
});
