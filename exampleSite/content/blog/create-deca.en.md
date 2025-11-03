---
title: "Reasons and Design Approach for Creating Hugo Theme Deca"
date: '2025-10-29T06:17:21+08:00'
---

# Reasons and Design Approach for Creating Hugo Theme Deca

Deca (ten) is a [Hugo](https://gohugo.io/) documentation-style theme, notable for being the first documentation theme in the Hugo ecosystem to integrate AJAX functionality.

## Motivation

After experimenting with various SSG generators, I realized that the most fundamental user experience for documentation sites is a **three-column layout combined with AJAX navigation**. The three-column layout clearly shows users where they are, while AJAX avoids re-rendering the entire DOM when navigating between pages, maintaining visual stability and providing a smooth reading experience.

Experienced readers will recognize that I am referring to [Docusaurus](https://docusaurus.io/) and [Vitepress](https://vitepress.dev/). Compared to other documentation sites that do not support this, such a reading experience can be described as a clear competitive advantage. I wondered whether it would be possible to achieve the same in Hugo by integrating AJAX for documentation sites, supporting very large systems while making smaller systems even faster.

Since submitting PRs ultimately contributes to someone else's project and may not be accepted, I decided to create my own theme. Readers may also notice that Deca's layout is not exactly the same as Docusaurus, but it is almost entirely **inspired by it**.

## Market Research

Hugo's main advantage is its speed and capability to build large-scale websites. For example, this article mentions that Hugo [can generate a collection site with 1.2 million pages](https://discourse.gohugo.io/t/v-a-explore-the-collections-over-1-million-pages-generated-by-hugo/33227), whereas Docusaurus fails to build [20,000-page MDX sites](https://github.com/facebook/docusaurus/discussions/11259). Despite this, Hugo has never had a good documentation theme that allows users to read smoothly. My requirements were modest: at minimum, no flickering, preferably with AJAX functionality. Observing existing Hugo documentation themes, even the most well-known ones still have flickering issues, and none support AJAX.

## Design Approach

After trying several Hugo themes, I summarized some design principles and applied them to Deca.

1. **Avoid Tailwind**

   Hugo's core features include **single-binary operation** and **template automatic override**, allowing users to override theme files simply by creating files at the same relative path. This enables easy customization while still allowing users to follow upstream updates.

   Tailwind conflicts with this logic because templates are tightly coupled with CSS, making it impossible for users to use Tailwind classes not built upstream. Hugo has a built-in TailwindCSS method, but it still requires manually installing JS ecosystem tools. In that case, why not just use an SSG from the JS ecosystem and avoid unnecessary complexity?

2. **Battery not included**

   Compared to other SSG tools, Hugo is in a unique situation.

   Tools like Docusaurus and Vitepress have corporate backing, ensuring reliable maintenance. Hexo and Hugo, however, only provide the engine; themes are created by the community. Most open-source themes are individual projects without stable maintenance, so even simple issues that could be resolved in half an hour may remain unresolved for years.

   "Battery not included" means keeping the project lean and manageable, making theme maintenance easy and downstream customization simple.

3. **CSS Design**

   In my observation, most Hugo users are not front-end developers. Therefore, the initial CSS design goal was **simple, native, and customizable**. The approach is straightforward: no material design color customization, no Tailwind, just plain native CSS. Color customization is crude: since this project draws heavily from Docusaurus, it directly uses Infima colors, without secondary colors, using a single color palette for everything.

   Users can use Docusaurus's [color generator](https://docusaurus.io/docs/styling-layout#theme-class-names) to easily customize their site themes.

4. **API Usage**

   Many Hugo themes use the official API, but I noticed a curious problem: how templates behave depends on how theme developers use the API. Settings from the documentation may produce completely different results depending on the developer's implementation. This is usually not intentional but results from changes in official usage over time. Deca addresses this by using Hugo's reserved Params for all custom parameters, fundamentally avoiding this issue.

   Most importantly, Deca strictly follows Hugo documentation for basic settings, mirroring existing tools so users can transition seamlessly without relearning.

5. **Debugging Capability**

   Due to the API usage issues and the clarity of Hugo's documentation, many users encounter configuration problems. Deca provides a debugging entry point: users can enable it with the environment variable `HUGO_DEBUG_SIDEBAR=true hugo server`.

## Results

With the Hugo framework, we can take advantage of its **single-binary, ultra-fast, and override-friendly** characteristics, as well as more extensive [URL customization](https://gohugo.io/content-management/urls/) support compared to other SSGs. Deca also benefits from Hugo's simplicity with plain HTML/CSS/JS, requiring no learning of complex CSS frameworks or understanding of React/Vue, and most importantly, integrates AJAX functionality for a smooth browsing experience.

## Performance Testing

In an actual test of a [4000-page website](https://github.com/zachleat/bench-framework-markdown), Deca’s rendering performance was as follows*:

|                     | Default | sidebarCachedRender | vs Deca cached |
| ------------------- | ------- | ------------------- | :------------: |
| Deca                | 187.7s  | 24.3s               |        —       |
| Docusaurus 3.9.2**  | 539.6s  | —                   |   22× slower   |
| Hugo Doc theme A    | Error   | —                   |        —       |
| Hugo Doc theme B    | 382.4s  | —                   |  15.7× slower  |
| Hugo Doc theme C*** | 121.8s  | —                   |    5× slower   |

This benchmark primarily measured the speed of **website frameworks** and **basic text rendering**, using a large documentation site as the example. Since most pages consist mainly of text, the test results should be meaningful. For long documents, more performance bottlenecks tend to come from goldmark (the markdown-to-HTML tool used by Hugo), while the efficiency of the Go language remains reliable.

<div style="font-size: 90%;">

* *: Tested on M1 MacBook Pro 8G RAM at 2025/11/10.
* **: With Docusaurus Faster `experimental_faster: true`.
* ***: This theme doesn't have mobile sidebar. Without mobile sidebar, Deca takes 106s to build the site.

</div>

## Performance Bottlenecks{#performance-bottle-neck}

Deca caches the data collection for sidebars, so all sidebar data retrieval operations are simple lookups. Therefore, the performance bottleneck lies only in sidebar rendering. Since each page must traverse the pages within that sidebar, the time complexity is O(N²).

The sidebar now renders only expanded sections, skipping collapsed ones to improve performance. In benchmark tests with 1,000 Markdown files, completely disabling sidebar rendering still achieved a 70% performance gain. To balance performance and usability, Deca includes built-in sidebar rendering caching. By enabling `sidebarCachedRender = true` in `hugo.toml`, even large-scale documentation sites can maintain excellent performance without compromise.

## Why Not Deca

Unless this project gains significant attention, it is unlikely to be updated in the near term, primarily because the Deca developer is not a front-end developer.

Secondary reasons include Hugo's limitations and the rise of Rust. Hugo's Go template language requires developing front-end pages with a back-end language, forcing developers to manage both language characteristics. Hugo-related challenges are documented in Bootstrap's migration from Hugo to Astro:

1. [Docs: migration from Hugo to Astro #41251](https://github.com/twbs/bootstrap/pull/41251)
2. [[Prototype] Migrate docs from Hugo to Astro 🚀 #38319](https://github.com/twbs/bootstrap/pull/38319)

Even developers with only a week of Hugo experience will struggle with template debugging. For example, I faced issues where the `return` template could not output anything, and implementing recursive nested directories in the sidebar-init template was impossible to debug, which is daunting.

Additionally, [Hugo's documentation issues](https://discourse.gohugo.io/t/thoughts-about-hugos-documentation/55837) persist. While I can navigate them efficiently, typical users find it hard to get answers from the official docs.

Most importantly, versioning—a critical feature for most documentation—has been unsupported in Hugo for nearly a decade:

1. [Documentation site: versioning](https://discourse.gohugo.io/t/documentation-site-versioning/5898)
2. [How to Doc Variations](https://discourse.gohugo.io/t/how-to-doc-variations/19165)
3. [How to make Hugo working with multiple versions](https://discourse.gohugo.io/t/how-to-make-hugo-working-with-multiple-versions/26910)
4. [How to display different version docs when user switch between different document versions？](https://discourse.gohugo.io/t/how-to-display-different-version-docs-when-user-switch-between-different-document-versions/47841/2)

Some complex workarounds exist, but they are not clean solutions. Although recent efforts [may provide support](https://github.com/gohugoio/hugo/pull/13679), versioning is currently unsupported, and for a documentation project like Deca, lacking this feature reduces the incentive to continue development.

The final tipping point is Rust. [Docusaurus Faster](https://github.com/facebook/docusaurus/issues/10556) uses Rspack to accelerate builds, increasing speed by 2–5×. If Docusaurus can support large documentation sites in the future with Facebook backing, Deca's relevance diminishes.

Another factor is that developing front-end projects with Hugo requires integrating front-end tools, which fragments the workflow. For example, enabling AVIF is difficult because Go has no native AVIF tools, and Hugo does not integrate them. While reasonable, this is inconvenient for users. Similarly, I find Discourse's note display approach excellent for avoiding page reloads, but Hugo does not support a [footnote render hook](https://github.com/gohugoio/hugo/issues/7291).

In summary, Hugo occupies a unique niche in a rapidly evolving front-end environment. Based on these factors, Deca will not be updated for now due to a lack of compelling reasons to invest resources.

> Nevertheless, even as a POC, Deca's AJAX support already gives it a competitive edge over other themes in the Hugo ecosystem.
