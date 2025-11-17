import styles from './Login.module.css';
import Heading from '@/components/Heading/Heading';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import hasIsLogged from '@/utils/hasIsLogged';

function Login() {
  const loginObj = {
    userName: '',
    isLogined: false,
  }

  function login() {
    loginObj.isLogined = true;
    localStorage.setItem('userInfo', JSON.stringify(loginObj));
    location.reload();
  }

  function inputChangeName(evt) {
    console.log('inputChangeName: ', evt.target.value);
    loginObj.userName = evt.target.value;
  }

  function logOut() {
    localStorage.removeItem('userInfo');
    location.reload();
  }

  return (
    <>
      {!hasIsLogged() ?
        <form action={login} id='login-form' className={styles['login-form']}>
          <Heading>Войти</Heading>
          <Input placeholder='Ваше имя'
            inputChange={inputChangeName}
          />
          <Button text='Войти в профиль' />
        </form> :
        <Button id='logout' onClick={logOut} text='Выход' />
      }
    </>
  );
}

export default Login;
