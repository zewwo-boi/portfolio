# A portfolio of an independent web-developer

## Stack

* [TypeScript](https://www.typescriptlang.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [Next.js](https://nextjs.org/)
* [Three.js](https://threejs.org/)
  * [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
* [Framer Motion](https://www.framer.com/motion/)

## Architecture

### Layouts

This project uses layouts, brought from [this](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts) documentation. It adds an additional function to components, which is then passed on to _app.tsx, where it is parsed and rendered.

## Known Problems

### Rerendering Layouts

Because of the nature of React, removing or modifying layouts across pages requires a rerender. Hence, it is difficult to persist data and layouts across pages that have different layouts.

The solution does not exist yet, but I am actively working on improving the codebase.

### Performance

Turns out, Three.js dies when I add multiple canvases to the page.

Research is further needed.

### GSAP

I attempted to implement GSAP instead of Framer Motion. However, since Next.js inevitably executes Javascript before rendering, GSAP could not precalculate the animation coefficients.

No solution found (yet)

## Features

### Blobs

Blobs are very important; they live on (almost) every single page. I included them in the project because they make the website more aesthetic.

### Smooth Animations

I love animated websites that are fast and responsive. This was my goal for this project.
