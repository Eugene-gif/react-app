import styles from './CardItem.module.css';
import cn from 'classnames';
import IconStar from '../../assets/icons/IconStar';
import IconBookmark from '../../assets/icons/IconBookmark';
import IconLike from '../../assets/icons/IconLike';

function CardItem({ rate, img, title, isFavorite = false }) {

  return (
    <div className={styles.card}>
      <div className={styles['card-header']}>
        <div className={styles['card-rate']}>
          <IconStar />
          <span className={styles['card-rate__value']}>{rate}</span>
        </div>
        <img className={styles['card-img']} src={img} alt="poster" />
      </div>
      <div className={styles['card-body']}>
        <h3 className={styles['card-title']}>{title}</h3>
        <div onClick={() => {console.log('Click on favorite')}} className={cn({
          [styles['card-favorite']]: true,
          [styles['card-is-favorite']]: isFavorite
        })}>
          {isFavorite ? <><IconBookmark /> В избранном</> : <><IconLike /> В избранное</>}
        </div>
      </div>
    </div>
  );
}

export default CardItem;
