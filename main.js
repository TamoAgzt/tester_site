// Setup for game
// $(document).ready(async function () {
//   const data = await InitializeJSONData();

//   // Example usage of SelectFromWhere
//   console.log(SelectFromWhere('Name', data.Test.Users, 'Id', '1'));

//   ShowCanvas();
// });
let data;
let loggedInUser;

// Update page content when page loads
$(document).ready(async function () {
  data = await InitializeJSONData();

  if (
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/'
  ) {
    loggedInUser = SelectFromWhere(
      'name',
      data.Users.User,
      'id',
      sessionStorage.getItem('user')
    );
    $('#username').text(loggedInUser);
  }

  // document.addEventListener('languageChange', async function (event) {
  //   const lang = event.detail.language;
  //   sessionStorage.setItem('lang', lang);
  //   await LanguageCheck();
  // });
  sessionStorage.setItem('lang', 'en');
  await LanguageCheck();
});

async function Login() {
  let inputUsername = $('#username').val();
  let inputPassword = $('#password').val();
  if (
    inputUsername ===
      SelectFromWhere('name', data.Users.User, 'name', inputUsername) &&
    inputPassword ===
      SelectFromWhere('password', data.Users.User, 'name', inputUsername)
  ) {
    sessionStorage.setItem('logedin', true);
    sessionStorage.setItem(
      'user',
      SelectFromWhere('id', data.Users.User, 'name', inputUsername)
    );
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

async function LanguageCheck() {
  const lang = sessionStorage.getItem('lang') || 'en';

  UpdateContent(data, lang);

  // $('input[name=languageCode]').each(function () {
  //   $(this).prop('checked', $(this).val() === lang);
  // });
}

function UpdateContent(data, lang) {
  $('h1').each(function () {
    var originalText = $(this).text().trim();
    $(this).text(data.Lang[lang].Headers[originalText] || originalText);
  });
  $('h2').each(function () {
    var originalText = $(this).text().trim();
    $(this).text(data.Lang[lang].Headers[originalText] || originalText);
  });

  $('p').each(function () {
    var originalText = $(this).text().trim();
    $(this).text(data.Lang[lang].Contents[originalText] || originalText);
  });

  $('button').each(function () {
    var originalText = $(this).text().trim();
    $(this).text(data.Lang[lang].Buttons[originalText] || originalText);
  });

  $('.button').each(function () {
    var originalText = $(this).text().trim();
    $(this).text(data.Lang[lang].Buttons[originalText] || originalText);
  });
}
