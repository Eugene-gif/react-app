import hasIsLogged from "./hasIsLogged";

function getUserName() {
  if (hasIsLogged()) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return userInfo?.userName;
  } else {
    return '';
  }
}

export default getUserName;
