// Put import all in here
$(document).ready(async function () {
  // Get HTML head element
  const head = $('head')[0];
  const classPath = 'tgl/classes/CustomElements/';

  // Create new link element and assign all attributes
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = classPath + 'UIComponents.css';
  head.appendChild(link);

  // Create new script elements and assign all attributes
  const scriptTags = document.createElement('script');
  scriptTags.setAttribute('src', classPath + 'Tags.js');
  head.appendChild(scriptTags);

  const scriptButtons = document.createElement('script');
  scriptButtons.setAttribute('src', classPath + 'Buttons.js');
  head.appendChild(scriptButtons);

  const scriptSlideToggles = document.createElement('script');
  scriptSlideToggles.setAttribute('src', classPath + 'SlideToggles.js');
  head.appendChild(scriptSlideToggles);

  const scriptSliders = document.createElement('script');
  scriptSliders.setAttribute('src', classPath + 'Sliders.js');
  head.appendChild(scriptSliders);

  const scriptLanguageMenus = document.createElement('script');
  scriptLanguageMenus.setAttribute('src', classPath + 'LanguageMenus.js');
  head.appendChild(scriptLanguageMenus);
});
