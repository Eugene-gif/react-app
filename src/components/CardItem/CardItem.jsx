import './CardItem.css';
import IconStar from '../../assets/icons/IconStar';
import IconBookmark from '../../assets/icons/IconBookmark';
import IconLike from '../../assets/icons/IconLike';

function CardItem({ rate, img, title, isFavorite }) {
  const favoriteBlock = isFavorite
    ? <div className="card-favorite card-is-favorite">
      <IconBookmark /> В избранном
    </div>
    : <div className="card-favorite"><IconLike /> В избранное</div>;

  return (
    <div className='card'>
      <div className="card-header">
        <div className="card-rate">
          <IconStar />
          <span className='card-rate__value'>{rate}</span>
        </div>
        <img className='card-img' src={img} alt="poster" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {favoriteBlock}
      </div>
    </div>
  );
}

export default CardItem;
