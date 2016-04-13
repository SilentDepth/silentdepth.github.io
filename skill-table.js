var langData = [
  'HTML+CSS:skilled',
  'JavaScript:skilled',
  'Java:practiced',
  'Windows Batch:practiced',
  'Perl:learning',
  'Kotlin:learning',
  'PowerShell:learning'
];
var techData = [
  'jQuery:skilled',
  'Node.js:practiced',
  'Vue.js:practiced',
  'React.js:practiced',
  'Raphael.js:practiced',
  'Spring:practiced'
];
var toolData = [
  'Sublime Text:skilled',
  'IntelliJ IDEA:skilled',
  'Visual Studio Code:practiced',
  'Git:practiced'
];

function _(code) {
  switch (code) {
    case 'skilled': return '熟练';
    case 'practiced': return '有实践经验';
    case 'learning': return '学习中';
    default: return '??';
  }
}

function makeTbody(data) {
  var tbody = document.createElement('tbody'), tr, th, td, rec;
  for (var i = data.length - 1; i >= 0; i--) {
    rec = data[i].split(':');
    tr = tbody.insertRow(0);
    th = document.createElement('th');
    td = tr.insertCell();
    th.textContent = rec[0];
    td.textContent = _(rec[1]);
    tr.insertAdjacentElement('afterBegin', th);
  }
  return tbody;
}

function makeSkillTable() {
  var table = document.createElement('table');
  table.createCaption().textContent = 'Skill';
  table.insertAdjacentElement('beforeEnd', makeTbody(langData));
  table.insertAdjacentElement('beforeEnd', makeTbody(techData));
  table.insertAdjacentElement('beforeEnd', makeTbody(toolData));
  return table;
}