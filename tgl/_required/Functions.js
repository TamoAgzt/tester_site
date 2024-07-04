//Torn Gems Libraries | Functions

function SelectFromWhere(_select, _from, _whereField, _whereValue) {
  // Select from table where field is a specific value
  // Loop through all entries from the table until the right field has the right value, than return the outcome.
  for (let index = 0; index < _from.length; index++) {
    if (_from[index][_whereField] == _whereValue) {
      return _from[index][_select];
    }
  }
  return 'tgl/_required/Functions.SelectFromWhere: Entry not found';
}

async function LoadJSONFiles(alias, path) {
  // Get JSON data from path with alias to use in scripts
  const response = await fetch(path);
  const data = await response.json();
  return { alias, data };
}

async function InitializeJSONData() {
  // Initialize JSON data with path and an alias to use in scripts
  const jsonData = {};
  const files = [
    { alias: 'User', path: './assets/data/_users.json' },
    { alias: 'Lang', path: './assets/data/_languages.json' }
  ];
  for (const file of files) {
    const { alias, data } = await LoadJSONFiles(file.alias, file.path);
    jsonData[alias] = data;
  }
  return jsonData;
}
