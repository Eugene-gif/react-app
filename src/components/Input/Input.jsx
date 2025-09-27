import './Input.css';
import IconSearch from '../../assets/icons/IconSearch';
import Button from '../Button/Button';

function Input({ placeholder, inputChange, onClickSearch, isSearch = false }) {
  const clIcon = isSearch ? 'field field-search' : 'field';
  console.log('clIcon: ', clIcon);

  return (
    <>
      <div className="field-wrapper">
        <label className={clIcon}>
          <IconSearch className="field-icon" />
          <input type="text"
            autoComplete="off"
            className="field-input"
            placeholder={placeholder}
            onChange={inputChange}
          />
        </label>
        <Button text="Поиск" onClick={onClickSearch} />
      </div>
    </>
  );
}

export default Input;
