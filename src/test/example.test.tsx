import { loadRenderers } from "astro:container";
import { expect, test } from "vitest";
import { getContainerRenderer as reactContainerRenderer } from "@astrojs/react";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import IndexPage from "../pages/index.astro";
import ReactWrapper from "../components/ReactWrapper.astro";

test("Counter component contains the word 'count'", async () => {
    const renderers = await loadRenderers([reactContainerRenderer()]);
    const container = await AstroContainer.create({
        renderers,
    });
    const result = await container.renderToString(ReactWrapper);
    console.log({ result })
    expect(result).toContain("Count")

})