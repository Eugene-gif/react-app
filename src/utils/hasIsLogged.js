function hasIsLogged() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo?.isLogined) return true;
  else return false;
}

export default hasIsLogged;
