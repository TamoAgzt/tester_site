async function LanguageCheck() {
  const data = await InitializeJSONData();
  var lang = sessionStorage.getItem('lang');

  // Set the default language based on session storage, if there is nothing, use the first language available
  if (lang) {
    $('input[name=languageCode][value=' + lang + ']').prop('checked', true);
  } else {
    lang = $('input[name=languageCode]:checked').val();
  }

  // Perform updateContent when the language changes
  $('input[name=languageCode]').change(function () {
    lang = $('input[name=languageCode]:checked').val();
    // Set the new language in session storage
    sessionStorage.setItem('lang', lang);
    UpdateContent(data, lang);
  });
  UpdateContent(data, lang);
}

function UpdateContent(data, lang) {
  // Update the headers
  $('h1').each(function (index) {
    var originalText = $(this).text().trim();
    $(this).text(data.Lang[lang].Headers[originalText] || originalText);
  });

  // Update the paragraphs
  $('p').each(function (index) {
    var originalText = $(this).text().trim();
    $(this).text(data.Lang[lang].Contents[originalText] || originalText);
  });

  // Update the buttons
  $('button').each(function (index) {
    var originalText = $(this).text().trim();
    $(this).text(data.Lang[lang].Buttons[originalText] || originalText);
  });

  console.log(data.Lang[lang].Headers.Title1);
}
