---
layout: none  
---

{% assign totalBackgrounds = 0 %}
{% for file in site.static_files %}
  {% if file.path contains "/backgrounds/" %}
    {% assign totalBackgrounds = totalBackgrounds | plus: 1 %}
  {% endif %}
{% endfor %}

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0);
  const diff = now - start;
  const oneDayMillis = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDayMillis);
  return dayOfYear + window.location.href.length;
}

function getBackgroundImageIndex() {
   return getDayOfYear() % {{ totalBackgrounds }};
 }

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

  // set background image
  const bgDiv = document.getElementById('daily-image');
  if(bgDiv) {
    bgDiv.style['background-image'] = `url({{ site.baseurl }}/media/images/backgrounds/background-${getBackgroundImageIndex()}.jpg)`;
  }
}
