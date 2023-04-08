import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import Picker from "@/components/Picker";
import styles from "@/styles/Home.module.scss";
import fetchDestinations from "@/utils/fetchDestinations";
import { locationType } from "@/utils/types";
const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});
export default function Home() {
  const [destination, setDestination] = useState<locationType>();
  const onDestinationSelect = (_destination: locationType) => {
    setDestination(_destination);
  };
  return (
    <>
      <Head>
        <title>Wael Laataoui assessement</title>
        <meta name="description" content="brainstack demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <main className={styles.wrapper}>
          <div className={styles.planner}>
            <h1>Plan your journey!</h1>
            <Picker
              onSelect={onDestinationSelect}
              fetchOptions={fetchDestinations}
              label={"Start"}
            ></Picker>
            {destination && (
              <div className={styles.selectedDestination}>
                <h2> your starting point :</h2>
                <p>
                  <span>Name: </span> {destination?.name}
                </p>
                <p>
                  <span>Type: </span> {destination?.type}
                </p>
                <p>
                  <span>Coordinates: </span>
                  {`${destination?.coord[0]},${destination?.coord[1]}`}
                </p>
              </div>
            )}
          </div>
          <div className={styles.map}>
            <MapWithNoSSR
              coords={destination?.coord || [48.1351, 11.582]}
              infos={{ name: destination?.name, type: destination?.type }}
            ></MapWithNoSSR>
          </div>
        </main>
      </div>
    </>
  );
}
