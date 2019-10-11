---
layout: none  
---

function clearLanguageSelection() {
  const langSelectorDivs = document.getElementsByClassName('language-selector');
  const infoDivs = document.getElementsByClassName('info-content');

  for(let i = 0; i < langSelectorDivs.length; i++) {
    langSelectorDivs[i].classList.remove('selected');
  }

  for(let i = 0; i < infoDivs.length; i++) {
    infoDivs[i].style.display = 'none';
  }
}

function selectThisLanguage() {
  clearLanguageSelection();
  this.classList.add('selected');
  const infoDiv = document.getElementById(`info-${this.innerHTML}`);
  infoDiv.style.display = 'block';
}

window.onload = function() {
  // load onclicks
  const langSelectorDivs = document.getElementsByClassName('language-selector');
  for(let i = 0; i < langSelectorDivs.length; i++) {
    langSelectorDivs[i].onclick = selectThisLanguage;
    langSelectorDivs[i].click();
  }
}
