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

function dayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
}

function setBackgroundImage() {
  const backgroundImageElement = document.getElementById('the-background-image');
  const urlLength = window.location.href.replace(/\//g, '').length;
  const dailyRandomNumber = (urlLength + dayOfYear()) % 10;
  const newImageUrl = `url({{ site.baseurl }}/media/images/backgrounds/background-sq-${dailyRandomNumber}.jpg)`;
  backgroundImageElement.style['background-image'] = newImageUrl;
}

window.onload = function() {
  const langSelectorDivs = document.getElementsByClassName('language-selector');
  for(let i = 0; i < langSelectorDivs.length; i++) {
    langSelectorDivs[i].onclick = selectThisLanguage;
    langSelectorDivs[i].click();
  }

  setBackgroundImage();
}
