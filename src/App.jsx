import './App.css';
import Header from './components/Header/Header';
import Body from './components/Layouts/Body/Body';
import Heading from './components/Heading/Heading';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Input from './components/Input/Input';
import CardList from './components/CardList/CardList';
import Image1 from './assets/images/black-widow.webp';
import Image2 from './assets/images/big-band-theory.webp';
import Image3 from './assets/images/friends.webp';
import Image4 from './assets/images/how-i-met-your-mother.webp';
import Image5 from './assets/images/loki.webp';
import Image6 from './assets/images/money-heist-5.webp';
import Image7 from './assets/images/shang-chi.webp';
import Image8 from './assets/images/two-and-a-half-men.webp';

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

  const films = [
    {
      id: 0,
      rate: 230,
      img: Image1,
      title: 'Black Widow',
      isFavorite: true,
    },
    {
      id: 1,
      rate: 21,
      img: Image2,
      title: 'The Big Bang theory',
      isFavorite: false,
    },
    {
      id: 2,
      rate: 211,
      img: Image3,
      title: 'Friends',
      isFavorite: false,
    },
    {
      id: 3,
      rate: 2123,
      img: Image4,
      title: 'How I met your mother',
      isFavorite: false,
    },
    {
      id: 4,
      rate: 2123,
      img: Image5,
      title: 'Loki',
      isFavorite: true,
    },
    {
      id: 5,
      rate: 2123,
      img: Image6,
      title: 'Money Heist Part 5',
      isFavorite: false,
    },
    {
      id: 6,
      rate: 2123,
      img: Image7,
      title: 'Shang Chi',
      isFavorite: false,
    },
    {
      id: 7,
      rate: 2123,
      img: Image8,
      title: 'Two and a half men',
      isFavorite: false,
    },
    {
      id: 8,
      rate: 216,
      img: Image1,
      title: 'Black Widow',
      isFavorite: false,
    }
  ];

  return (
    <>
      <Header />
      <Body>
        <Heading>Поиск</Heading>
        <Paragraph fontSize={'20px'}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
        <Input placeholder='Введите название'
          inputChange={inputSearch}
          onClickSearch={onClickSearch}
          isSearch
        />
        <CardList items={films} />
      </Body>
    </>
  );
}

export default App;
