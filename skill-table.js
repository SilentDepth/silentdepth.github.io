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
    case 'practiced': return '熟悉';
    case 'learning': return '学习中';
    default: return '??';
  }
}

HTMLElement.prototype.insertAdjacentElement = HTMLElement.prototype.insertAdjacentElement || function (position, element) {
  if (element instanceof HTMLElement) {
    this.insertAdjacentHTML(position, element.outerHTML);
  } else {
    console.error('What kind of element is it?');
  }
};

function makeTbody(data) {
  var tbody = document.createElement('tbody'), tr, th, td, rec;
  for (var i = data.length - 1; i >= 0; i--) {
    rec = data[i].split(':');
    tr = tbody.insertRow(0);
    tr.classList.add(rec[1]);
    th = document.createElement('th');
    th.textContent = rec[0];
    tr.insertAdjacentElement('afterbegin', th);
    td = tr.insertCell();
    td.textContent = _(rec[1]);
  }
  return tbody;
}

function makeSkillTable() {
  var table = document.createElement('table');
  table.createCaption().textContent = 'Skill';
  table.insertAdjacentElement('beforeend', makeTbody(langData));
  table.insertAdjacentElement('beforeend', makeTbody(techData));
  table.insertAdjacentElement('beforeend', makeTbody(toolData));
  return table;
}