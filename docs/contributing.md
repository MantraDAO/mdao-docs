---
id: contributing
title: How to Contribute to the Docs
---

This page is a guide to help users with updating this documentation page. It's written for users with minimal technical knowledge. For those with web development experience, we recommend cloning the entire project locally from the [official repo](https://github.com/royalefinancev1/docs), and following the instructions on the official [Docusaurus 2.0 documentation website](https://v2.docusaurus.io/docs/installation#running-the-development-server). 

## Basic Concepts

To get started, you should understand some basic concepts first:

### Markdown

The documents on the docs site are written using Markdown, which is a markup language like HTML that is used for defining how content will display on a web page. However, it is much much simpler and easier than HTML, and anyone can pick it up and get started in a few minutes - no need for programming skills. 

The [markdownguide.org](https://www.markdownguide.org/) website has some great guides and tutorials which will get you up to speed in no time. Their [cheat sheet](https://www.markdownguide.org/cheat-sheet/) is the quickest way to get started.

### Docusaurus 2.0

The site is made with [Docusaurus 2.0](https://v2.docusaurus.io/docs/), which is a React based framework for building static websites. It's aimed at documentation websites, but can actually be used to make almost static site you can think of. 

When using Docusaurus 2.0, each Markdown file you create inside the `docs` folder will become a new page on your site, and will be accessible from the URL matching that filename.

Docusaurus has many useful tools and presets for building and customizing documentation websites, and can also draw on the full power of React. 

If you're just concerned with adding new pages and editing existing ones, you don't really need to know anything about how Docusaurus works, but it's good to know what's possible so you can ask your web developer or add or modify some feature.

### How does the website get updated with new content?

The documentation website source files are hosted on GitHub, and the live website files are hosted on Netlify (or potentially another site in the future, this doesn't really matter to you as the editor). 

Whenever the source files on GitHub are changed, Netlify will detect that a change occurred, and update the live website with the changed content. There are several ways to change the GitHub source files:

## Ways to Edit them Docs

:::caution
Editing the sidebar and navbar requires editing configuration files. If you haven't read and understood the [Docusaurus 2.0 documentation](https://v2.docusaurus.io/docs/) on these topics, please don't attempt to modify the configuration files. If you need help modifying sidebar or navbar, ask your friendly neighborhood web developer or contact the docs maintainer - @noahniuwa on Telegram.
:::

### 1. Directly on GitHub

GitHub has a built in Markdown editor which allows you to open, edit, preview, and commit new changes for any Markdown files (files ending in `.md`). You can use this method from any browser without any special tools or set up. This is the best option for small edits which need to be made quickly such as typos, broken links, or any other very small edits.

1. *Open the `docs` folder:*  
    
  From the main repo for the docs site, open up the `docs` folder in order to view all the Markdown files which are used to make individual pages on the docs site.     
   
    ![](https://cdn-images-1.medium.com/max/1200/1*hNrrFq8DGFmhWI4xyDaRsQ.png)     
  
2. *Select file to edit:*

  Click the file you want to edit:

    ![](https://cdn-images-1.medium.com/max/1200/1*_ZqjQUTcrKa2ev0PE7LK1w.png)

  Which will bring you to the page for that file. Click the edit icon to open the file:

  ![](https://cdn-images-1.medium.com/max/1200/1*9zYKJvqVu6S7xd__8qeTGQ.png)

3. *Begin making edits*

Make any edits here. Pay special attention to the top section. This section is part of Markdown and is called the Frontmatter. It stores data about the file. This one has two fields, `id`, and `title`. `id` is not displayed to the user and is just used by the documentation software for reference. Generally speaking you should never change it. `title` however *is* displayed to the user. It is used as the title and label on the sidebar. Feel free to edit it. 

All content is written using Markdown. See [this guide](https://www.markdownguide.org/) for a refresher of Markdown syntax.
 
  ```
    ---
    id: contributing
    title: How to Contribute to the Docs
    ---
  ```

4. *Preview changes*

After making you edits, click the "Preview changes" button to check how your edits will display. If you have made any Markdown syntax mistakes you will be able to find and fix them:

![](https://cdn-images-1.medium.com/max/1200/1*f56x6Bueqr6xRCFYRZgfEw.png)

As you can see, there are several errors, let's fix them. Click "Edit file" to go back to edit mode:

![](https://cdn-images-1.medium.com/max/1200/1*0OtSKo5c7Krk7b00CXkRaw.png)

  First we corrected the Markdown link syntax which should look like:

 `![](https://link-url.com)`

  And we also made certain that each item has its pwn line by adding at least two spaces at the end of each line:

 ![](https://cdn-images-1.medium.com/max/1200/1*PQG9h5UNsuFngG2lFLWfeQ.png)

  And back to "Preview changes" to check:

  ![](https://cdn-images-1.medium.com/max/1200/1*jKJnK-AiTqc81jaUff7RYw.png)

  And everything looks good! We will save it in the next step.

5. "Commit changes" to make changes go live

Click "Commit changes" while on the master branch to add changes to the repository and make them go live on the website:

![](https://cdn-images-1.medium.com/max/1200/1*PKlPzgTB_dyZG_MOLwh2Jw.png)

The page is accessible at the URL which matches the document `id` exactly "links-downloads":

![](https://cdn-images-1.medium.com/max/1200/1*2BB_5SlS_EXhVox9PUtFxQ.png)

## Editing Tips:

There are some quirks you should be aware of while editing with Markdown.

1. Newlines require at least two "space" characters at the end of the line, otherwise all your sentences will appear on the same line, so make sure to tap space twice if you need a line break.
1. When numbering lists, you can set all the numbers as "1", and they will automatically be converted to the correct number. This can be a bit finicky when used with images in your lists, so be careful. 
1. You can use hashtags "#" to mark headers of varying importance, from # being most important to ##### being of low importance. Using ## or ### will create items in the table of contents of that page on the docs site, and you can nest ### inside ## to create subsections. 



## Different ways to edit the site:


Depending on your skill level and the type of editing you want to do, you will want to choose a different method for editing:

### Edit in a dedicated Markdown editor first

For this method, first sign up with [HackMD](https://hackmd.io/), a cloud based Markdown editor. Editing hon HackMD allows you to use many great tools such as live reload and cloud based group editing while you edit Markdown files.

1. Create a new Markdown document. 
2. Copy the contents of the Markdown file you want to work on from step 2 in the instructions above on how to edit directly in Github, and paste them into your new HackMD Markdown document. 
3. Now you can edit while taking advantage of all HackMD's advanced Markdown tools, and can even invite someone to edit together with you.
4. When finished editing, copy the contents of your file and paste them into the matching file on GitHub and commit them according to the instructions starting from Step 5 int he instructions above.

### Clone the files and run a local dev server 
:::caution
This method is recommended only for advanced users.
:::

If you have a bit of experience with HTML/CSS and JavaScript, you may want to try cloning the entire project locally from the [official repo](https://github.com/royalefinancev1/docs), and following the instructions on the official [Docusaurus 2.0 documentation website](https://v2.docusaurus.io/docs/installation#running-the-development-server) to run a local dev server, make changes there, and push your local commits to the main repo. 

We won't have step by step instructions for this method as it is aimed at web developers who should be able to get started from just the [official docs](https://v2.docusaurus.io/).


