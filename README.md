# Personal Website

This repo hosts the code for my personal website. You are free to clone this project and use it as a template for your own website.

## Cloning this project

Clone this project using `git clone ...`. You can start the dev server by navigating to the project directory and running `pnpm dev`.

## Running DecapCMS to edit posts locally

First start the dev server with `pnpm dev`, then run `pnpm cms`.
You can now edit your posts at [http://localhost:4321/decapcms/index.html](http://localhost:4321/decapcms/index.html). Posts are only modified locally and still need to be pushed to Github.

NOTE: DecapCMS is disabled in production due to auth issues.
NOTE: Running `pnpm dev` without `pnpm cms` and trying to edit posts will directly update the posts in your Github repo, but not locally.
