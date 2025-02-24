import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Connect to WebSocket server

const containerStyle = { width: "100%", height: "500px" };
const center = { lat: 28.7041, lng: 77.1025 }; // Default center (Delhi, India)

function GoogleMapComponent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  const [location, setLocation] = useState(center);

  useEffect(() => {
    socket.on("receiveLocation", (data) => {
      console.log("Location Update:", data);
      setLocation({ lat: data.latitude, lng: data.longitude });
    });

    return () => socket.off("receiveLocation");
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
      <Marker position={location} />
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}

export default GoogleMapComponent;
