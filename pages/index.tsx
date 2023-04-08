import Head from "next/head";
import { useState } from "react";
import Picker from "@/components/Picker";
import styles from "@/styles/Home.module.scss";
import fetchDestinations from "@/utils/fetchDestinations";
import { locationType } from "@/utils/types";
export default function Home() {
  const [destination, setDestination] = useState<String>();
  const onDestinationSelect = (_destination: locationType) => {
    setDestination(JSON.stringify(_destination, null, 4));
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
          <h1>pick destination</h1>
          <Picker
            onSelect={onDestinationSelect}
            fetchOptions={fetchDestinations}
            label={"Start"}
          ></Picker>
          <pre>{destination} </pre>
        </main>
      </div>
    </>
  );
}
