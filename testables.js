$(document).ready(function () {
  $('#sliderHeight').slider({
    min: 50,
    max: 300,
    value: 100,
    slide: function (event, ui) {
      $('#sliderHeightValue').text(ui.value + 'cm');
    }
  });

  $('#sliderWeight').slider({
    min: 20,
    max: 500,
    value: 75,
    slide: function (event, ui) {
      $('#sliderWeightValue').text(ui.value + 'kg');
    }
  });

  $('#sliderHeightValue').text($('#sliderHeight').slider('value') + 'cm');
  $('#sliderWeightValue').text($('#sliderWeight').slider('value') + 'kg');

  const dbName = 'SettingsDB';
  let db;
  const request = indexedDB.open(dbName, 1);

  request.onerror = function (event) {
    console.log('Error opening DB', event);
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    console.log('DB opened successfully');
  };

  request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objectStore = db.createObjectStore('settings', { keyPath: 'id' });
    objectStore.transaction.oncomplete = function (event) {
      console.log('ObjectStore created');
    };
  };

  $('#saveButton').click(function () {
    const transaction = db.transaction(['settings'], 'readwrite');
    const objectStore = transaction.objectStore('settings');

    const settings = {
      id: 1,
      height: $('#sliderHeight').slider('value'),
      weight: $('#sliderWeight').slider('value'),
      hair: $('#dropdownHair').val()
    };

    const request = objectStore.put(settings);

    request.onsuccess = function (event) {
      $('#statusMessage').text('Settings saved successfully!');
    };

    request.onerror = function (event) {
      $('#statusMessage').text('Error saving settings.');
      console.log('Error saving settings', event);
    };
  });

  $('#loadButton').click(function () {
    const transaction = db.transaction(['settings'], 'readonly');
    const objectStore = transaction.objectStore('settings');
    const request = objectStore.get(1);

    request.onsuccess = function (event) {
      const settings = event.target.result;
      if (settings) {
        $('#sliderHeight').slider('value', settings.height);
        $('#sliderWeight').slider('value', settings.weight);
        $('#dropdownHair').val(settings.hair);

        $('#sliderHeightValue').text(settings.height);
        $('#sliderWeightValue').text(settings.weight);

        $('#statusMessage').text('Settings loaded successfully!');
      } else {
        $('#statusMessage').text('No settings found.');
      }
    };

    request.onerror = function (event) {
      $('#statusMessage').text('Error loading settings.');
      console.log('Error loading settings', event);
    };
  });
});
