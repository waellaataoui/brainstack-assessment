import "leaflet/dist/leaflet.css";

import { Icon, LatLngTuple, Point } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import markerIcon from "../public/img/marker.png";

type MapProps = {
  coords: LatLngTuple;
  infos: { name: String | undefined; type: String | undefined };
};
export function ChangeView({ coords }: { coords: LatLngTuple }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function Map(props: MapProps) {
  const iconMarker = new Icon({
    iconUrl: markerIcon.src,
    iconSize: new Point(50, 50),
  });

  const [lat, lng] = [props.coords[0], props.coords[1]];
  return (
    <MapContainer
      center={props.coords}
      zoom={12}
      style={{ height: "400px", zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lat && lng && (
        <Marker position={[lat, lng]} icon={iconMarker}>
          {props.infos.name && (
            <Popup>
              <center>{`Name: ${props.infos.name}`}</center>
              <center>{`Type: ${props.infos.type}`}</center>
            </Popup>
          )}
        </Marker>
      )}
      <ChangeView coords={props.coords} />
    </MapContainer>
  );
}
