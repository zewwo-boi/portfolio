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

### Performance

Turns out, Three.js dies when I add multiple canvases to the page.
Research is further needed.

### WebGL Depth Write

Due to the way WebGL renders transparent objects, it sort of creates a "void" within the object.
See more on [renderOrder](https://threejs.org/docs/#api/en/core/Object3D.renderOrder) and [depth writes](https://threejs.org/docs/#api/en/materials/Material.depthWrite)

## Features

### Blobs

Blobs are very important; they live on (almost) every single page. I included them in the project because they make the website more aesthetic.

### Smooth Animations

I love animated websites that are fast and responsive. This was my goal for this project.
