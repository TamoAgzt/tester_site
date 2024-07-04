// Setup for game
// $(document).ready(async function () {
//   const data = await InitializeJSONData();

//   // Example usage of SelectFromWhere
//   console.log(SelectFromWhere('Name', data.Test.Users, 'Id', '1'));

//   ShowCanvas();
// });
let data;
// Perform updateContent function when page loads
$(document).ready(async function () {
  data = await InitializeJSONData();
});

async function Login() {
  let inputUsername = $('#usrname').val();
  let inputPassword = $('#psswrd').val();
  if (
    inputUsername ==
      SelectFromWhere('name', data.User.User, 'name', inputUsername) &&
    inputPassword ==
      SelectFromWhere('password', data.User.User, 'name', inputUsername)
  ) {
    sessionStorage.setItem('logedin', true);
    window.location.href = 'index.html';
  } else {
    alert('Something wrong');
    sessionStorage.setItem('logedin', false);
  }
}
async function Logout() {
  sessionStorage.setItem('logedin', false);
  window.location.href = 'loginpage.html';
}
