# nextjs15-ts-cesium-example
An example of CesiumJS running in Next.js 15. This is a continuation of public examples where older versions of Cesium and Next.js were used. 

This work is a continuation of the example provided by hyundotio (https://github.com/hyundotio/nextjs-ts-cesium-example) which is based on an example provided by willwill96 (https://github.com/willwill96/cesium-nextjs-example). 

I don't have an example running. Download the files, use the standard `npm install`, `npm run dev`, or `npm run build` followed by `npm run start`. 

To use Cesium Ion you will need to make a "/env.local" file holding your Cesium Ion API key. Ex. `NEXT_PUBLIC_CESIUM_TOKEN='YOUR KEY'`. 

Read the quirks in hyundotio's example. Ensuring `info: {minimized: true}` is applied to all file copying is absolutely essential to get the terrain to show. If the Cesium HUD shows, but Earth does not, check how you are copying files over to the public folder. 
