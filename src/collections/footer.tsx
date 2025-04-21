import { buildCollection } from "@firecms/core";

export const footerCollection = buildCollection({
    id: "footer",
    path: "footer",
    name: "Footer",
    singularName: "Footer entry",
    icon: "article",
    group: "Content",
    description: "Global Footer Content",
    defaultSize: "l",
    properties: {
        menu: {
            name: "Footer Menu",
            dataType: "string",
            markdown:true
        },
        subscribeHeading: {
            name: "Footer Subscribe Heading",
            dataType: "string",
        },
        subscribeContent: {
            name: "Footer Subscribe Content",
            dataType: "string",
        },
        contact: {
            name: "Footer Contact Content",
            dataType: "string",
            markdown:true
        },
        companyInfo: {
            name: "Footer Content Company Info",
            dataType: "string",
            multiline:true
        },
        operation: {
            name: "Footer Content Operation Info",
            dataType: "string",
            multiline:true
        },
        disclaimer: {
            name: "Footer Content Disclaimer",
            dataType: "string",
            multiline:true
        },
        riskWarning: {
            name: "Footer Content Risk Warning",
            dataType: "string",
            multiline:true
        },
        jurisdiction: {
            name: "Footer Content Jurisdiction",
            dataType: "string",
            multiline:true
        },
        copyright: {
            name: "Footer Copyright",
            dataType: "string",
        },
    },
});

  