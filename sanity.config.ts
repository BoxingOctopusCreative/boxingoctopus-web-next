import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { media } from "sanity-plugin-media"
import { scheduledPublishing } from "@sanity/scheduled-publishing"
import {codeInput} from '@sanity/code-input'
import { markdownSchema } from "sanity-plugin-markdown"
import schemas from "./sanity/schemas"

const config = defineConfig({
    projectId:  "soan4bom",
    dataset:    "production",
    title:      "Boxing Octopus Creative",
    apiVersion: "2023-04-07",
    basePath:   "/admin",
    plugins:    [
        deskTool(),
        media(),
        scheduledPublishing(),
        codeInput(),
        markdownSchema(),
    ],
    schema:     { types: schemas },
});

export default config;