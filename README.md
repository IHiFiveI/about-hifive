# about-hifive

<nav>
    <strong>EN</strong> |
    <a href="./README-RU.md">RU</a>
</nav>

<br>

Pet project and a personal landing.
<br>
Check it out at:
<a target="_blank" href="./README.md">https://about-hifive.web.app/</a>!

> [!WARNING]
> The project is currently WIP and im only working on it in my free time.

I tried my best to make the experience smooth and easy for anyone interested in information on the site, so I provided:

- Adaptive layouts for convenient mobile viewing
- Translation for the languages I speak
- Beautiful theming with the help of <https://tweakcn.com/>
- Light and Dark themes
- Automated deployment pipeline using GitHub actions and Firebase

# Stack

- React (19)
- Tailwind CSS + shadcn/ui
- bun (1.3.0)
- Vite (7)
- Firebase (hosting, CD)

While I'm a big fan of the `FSD` architecture, I've specifically chosen to avoid it here because I don't plan for the project size to ever reach a point where it would be justified.

# Getting started

Needs no env configuration or anything, to launch simply do:

```bash
bun install
bun run dev
```
