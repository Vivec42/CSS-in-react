import { useState } from "react";
import "./App.scss";
import Card from "./components/Card.jsx";
import NavBar from "./components/NavBar.jsx";

const CardList = [
  {
    name: "Shelby GT500",
    imgSrc:
      "https://www.421chevaux.com/wp-content/uploads/2019/08/cropped-1967-SHELBY-GT500-FASTBACK-002.jpg",
  },
  {
    name: "Plymouth Barracuda",
    imgSrc:
      "https://cdn.dealeraccelerate.com/fastlane/1/398/19991/1920x1440/1970-plymouth-barracuda",
  },
  {
    name: "Mig-21",
    imgSrc:
      "https://msfsaddons.com/wp-content/uploads/2021/12/GKS-Mig-21-MSFS-header.jpg",
  },
  {
    name: "BSG",
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BZjBjMjk4YWQtZjY1MC00NTI5LWEwZDMtYWMyYjk2MjkzMThhXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg",
  },
  {
    name: "Black Hole",
  },
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = CardList[currentCardIndex];
  return (
    <div>
      <header>
        <NavBar
          currentCardIndex={currentCardIndex}
          setCurrentCardIndex={setCurrentCardIndex}
          CardList={CardList}
        />
      </header>
      <main>
        <Card card={currentCard} />
      </main>
    </div>
  );
}

export default App;
