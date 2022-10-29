# helth app

Helth app aims to be a minimalist web app for tracking calories, sodium, and water intake. It is built with [`sveltekit`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Getting started

+ Clone this [repository](https://github.com/Dilden/helth)
+ `npm install`
+ `npm run dev`

## Building

To create a production version of helth app:

```bash
npm run build
```

You can preview the production build with `npm run preview`. Helth app uses the node [adapter](https://kit.svelte.dev/docs/adapters) and requires a Node.js backend to fully function.

## Packages
This app makes use of the following packages:
+ [SvelteKit](https://github.com/sveltejs/kit/)
+ [Chart.js](https://www.chartjs.org/)
+ [zxing-js](https://github.com/zxing-js/library)
+ [Vite PWA](https://github.com/vite-pwa/vite-plugin-pwa)
+ [Dexie](https://github.com/dexie/Dexie.js/)

## Layout
Various reusable components are located in `src/components/`. All data is stored locally in the user's browser and is managed via `src/stores/`.
