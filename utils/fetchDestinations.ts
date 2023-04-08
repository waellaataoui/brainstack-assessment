import { locationType } from "./types";

export default async (query: String) => {
  // proxy url to bypass proxy error
  const proxyURL = "";
  // const proxyURL = "https://cors-anywhere.herokuapp.com/";

  const response = await fetch(
    `${proxyURL}https://mvvvip1.defas-fgi.de/mvv/XML_STOPFINDER_REQUEST?%20language=de&outputFormat=RapidJSON&type_sf=any&name_sf=${query}`,
    {
      //   headers: {
      //     "x-cors-api-key": "temp_bc3ed6e69185ff303a0a65c8eefc527e",
      //   },
    }
  );
  const data = await response.json();
  return data.locations.map((location: locationType) => ({
    id: location.id,
    name: location.name,
    coords: location.coord,
    type: location.type,
  }));
};
