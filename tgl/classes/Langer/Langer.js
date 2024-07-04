$(document).ready(async function () {
  // Get HTML head element
  const head = $('head')[0];
  const classPath = 'tgl/classes/Langer/';

  // Create new link element and assign all attributes
  // const link = document.createElement('link');
  // link.rel = 'stylesheet';
  // link.type = 'text/css';
  // link.href = classPath + 'UIComponents.css';
  // head.appendChild(link);

  // Create new script elements and assign all attributes
  const scriptLangHand = document.createElement('script');
  scriptLangHand.setAttribute('src', classPath + 'LanguageHandler.js');
  head.appendChild(scriptLangHand);
});
