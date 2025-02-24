// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import GoogleMapComponent from "./components/GoogleMapComponent";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Wearable Safety Device Tracker</h1>
      <GoogleMapComponent />
    </div>
  );
}

export default App;
