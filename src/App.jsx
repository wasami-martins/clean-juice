import React from "react";
import Header from "./components/Header";
import TextContainer from "./components/TextContainer";
import BottleContainer from "./components/BottleContainer";
import LeavesContainer from "./components/LeavesContainer";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <TextContainer />
        <BottleContainer />
        <LeavesContainer />
      </main>
    </div>
  );
}
