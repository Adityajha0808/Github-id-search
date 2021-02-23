import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Card from "./Card";

function App() {
  const [cards, setCards] = useState([]);

  function addNewCard(cardInfo) {
    setCards(cards.concat(cardInfo));
  }

  return (
    <div>
      <Header />
      <Form className="form-input" onSubmit={addNewCard} />
      {cards.map((card, index) => {
        return <Card key={index} id={index} className="form-card" {...card} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
