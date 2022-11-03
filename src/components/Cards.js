import data from '../data';
import Card from './Card';

export default function Cards() {
  const cards = data.map(cardData => <Card {...cardData} key={cardData.id} />);

  return (
    <div className="cards">
      {cards}
    </div>
  )
}
