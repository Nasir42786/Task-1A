import { useState } from 'react'
import "./index.css";
import { headerData, hoverCardsData, staticCardsData } from "./data/cardsData";
import HoverCard from "./components/HoverCard";
import Card from "./components/Card";

function App() {
  const [showSubtract3, setShowSubtract3] = useState(false);

  return (
    <div className="container">
      <span className="text">{headerData.note}</span>
      <div className="features">
        <div className="content">
          <div className="features-1">
            <span className="info-1">{headerData.title}</span>
            <span className="info-2">
              <text>Step</text> In. <text>Skill</text> Up. <text>Stand</text>{" "}
              Out. 🚀
            </span>
          </div>
          <div className="features-2">
            <div className="part-1">
              {hoverCardsData.map((card) => (
                <HoverCard
                  key={card.id}
                  data={card}
                  showSubtract3={showSubtract3}
                  setShowSubtract3={setShowSubtract3}
                />
              ))}
            </div>
            <div className="part-2">
              {staticCardsData.map((card) => (
                <Card
                  key={card.id}
                  cardClass={card.cardClass}
                  image={card.image}
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
