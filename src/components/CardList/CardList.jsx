import './CardList.css';
import CardItem from '../CardItem/CardItem';

function CardList({ items }) {
  if (items.length === 0) return <p>Фильмов пока нет, добавьте первый</p>;

  return (
    <div className='card-list'>
      {items.map((el) => (
        <CardItem
          key={el.id}
          rate={el.rate}
          img={el.img}
          title={el.title}
          isFavorite={el.isFavorite}
        />
      ))}
    </div>
  )
}

export default CardList;
