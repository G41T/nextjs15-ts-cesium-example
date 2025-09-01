import React from "react";
import styles from "./page.module.css";
import CesiumWrapper from "../components/cesium_components/CesiumWrapper"


async function getPosition() {
  //Mimic server-side stuff...
  return {
    position: {
      lat: 39.953436,
      lng: -75.164356
    }
  }
}

async function MainPage() {
  const fetchedPosition = await getPosition();
  return (
    <CesiumWrapper positions={[fetchedPosition.position]} />
  )
}

export default function Home() {
  return (
    <main>
      <a
        className={styles['source-link']}
        href='https://github.com/G41T/nextjs15-ts-cesium-example/tree/main'
        target='_blank'
        rel='noreferrer noopener'
      >
        GitHub Source link
      </a>
      <MainPage />
    </main>
  );
}