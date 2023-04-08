import { locationType } from "./types";

export default async (query: String) => {
  // proxy url to bypass proxy error
  const proxyURL = "https://cors-proxy-l7uu.onrender.com/";

  const response = await fetch(
    `${proxyURL}https://mvvvip1.defas-fgi.de/mvv/XML_STOPFINDER_REQUEST?%20language=de&coordOutputFormat=WGS84%5BDD.DDDDD%5D&outputFormat=RapidJSON&type_sf=any&name_sf=${query}`
  );
  const data = await response.json();
  return data.locations.map((location: locationType) => ({
    id: location.id,
    name: location.name,
    coord: location.coord,
    type: location.type,
  }));
};
