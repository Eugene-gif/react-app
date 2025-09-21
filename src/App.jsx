import './App.css';
import Header from './components/Header/Header';
import Body from './components/Layouts/Body/Body';
import Heading from './components/Heading/Heading';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Input from './components/Input/Input';

function App() {

  const login = () => {
    console.log('Логика входа в профиль');
  }

  let inputSearchValue = '';

  const inputSearch = (evt) => {
    inputSearchValue = evt.target.value;
    console.log('inputSearch(evt): ', inputSearchValue);
  }

  const onClickSearch = () => {
    console.log('onClickSearch(): ', inputSearchValue);
  }

  const inputLogin = (evt) => {
    console.log('inputLogin(evt): ', evt.target.value);
  }

  return (
    <>
      <Header />
      <Body>
        <Heading>Поиск</Heading>
        <Paragraph fontSize={'20px'}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
        <Button text="Войти в профиль" onClick={login} />
        <Input placeholder='Введите название'
          inputChange={inputSearch}
          onClickSearch={onClickSearch}
          isSearch
        />

        <Input placeholder='Введите имя' inputChange={inputLogin} />
      </Body>
    </>
  );
}

export default App;
