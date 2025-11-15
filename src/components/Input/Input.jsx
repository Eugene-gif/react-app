import styles from './Input.module.css';
import cn from 'classnames';
import IconSearch from '../../assets/icons/IconSearch';
import Button from '../Button/Button';

function Input({ placeholder, inputChange, onClickButtonSearch=null}) {

  return (
    <>
      <div className={styles['field-wrapper']}>
        <label className={cn({
          [styles['field']]: true,
          [styles['field-search']]: onClickButtonSearch
        })}>
          {onClickButtonSearch && <IconSearch className={styles['field-icon']} />}
          <input type="text"
            autoComplete="off"
            className={styles['field-input']}
            placeholder={placeholder}
            onChange={inputChange}
          />
        </label>
        {onClickButtonSearch && <Button text='Поиск' onClick={onClickButtonSearch} />}
      </div>
    </>
  );
}

export default Input;
