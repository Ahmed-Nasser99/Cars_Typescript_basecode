import React from "react";
import "./App.css";
import Cars from "./Components/Cars";

interface CarModel {
  id: number;
  name: string;
}

const futureCars: CarModel[] = [
  {
    id: 1,
    name: "Volkswagen",
  },
  {
    id: 2,
    name: "BMW",
  },
  {
    id: 3,
    name: "Toyota",
  },
  {
    id: 4,
    name: "Nissan",
  },
  {
    id: 5,
    name: "General Motors",
  },
  {
    id: 6,
    name: "Hyundai",
  },
  {
    id: 7,
    name: "Peugeot",
  },
  {
    id: 8,
    name: "Kia",
  },
  {
    id: 9,
    name: "Volvo",
  },
  {
    id: 10,
    name: "Mazda",
  },
];

function App() {
  return (
    <div className="App h-100 w-100 d-flex align-items-center justify-content-center">
      <Cars futureCars={futureCars} />
    </div>
  );
}

export default App;
