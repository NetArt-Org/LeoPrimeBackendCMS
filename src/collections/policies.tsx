import { buildCollection } from "@firecms/core";
export const policyCollection = buildCollection({
    id: "policy",
    path: "policy",
    name: "Policy",
    singularName: "Policy entry",
    icon: "article",
    group: "Content",
    description: "Policy Page Content",
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
        content: {
            name: "Policy Page Content",
            dataType: "map",
            properties: {
                content: {
                    name: "Content",
                    dataType: "string",
                    markdown:true
                },
            },
            expanded: true
        },
    },
});
