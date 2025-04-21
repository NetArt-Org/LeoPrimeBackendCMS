import { buildCollection } from "@firecms/core";
export const ctaCollection = buildCollection({
    id: "cta",
    path: "cta",
    name: "CTA",
    singularName: "CTA entry",
    icon: "article",
    group: "Content",
    description: "CTA Page Content",
    defaultSize: "l",
    properties: {
        cta: {
            name: "CTA",
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
        }
    },
});
