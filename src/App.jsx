import './App.css';
import Heading from './components/Heading/Heading';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
  return (
    <>
      <Heading>Поиск</Heading>
      <Button>Кнопка</Button>
      <Paragraph fontSize={'20px'}>Какой-то параграф</Paragraph>
    </>
  );
}

export default App;
