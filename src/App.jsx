import React from "react";
import Header from "./componente/Header";
import Contenido from "./componente/Contenido";
import Futter from "./componente/Futter";
import "/src/Css.css";

export default function App() {
  return (
    <main>
      <Header />
      <Contenido />
      <Futter />
    </main>
  );
}
