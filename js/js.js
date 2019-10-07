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
  return dayOfYear;
}

function getBackgroundImageIndex() {
   return getDayOfYear() % {{ totalBackgrounds }};
 }

INTRO = {
  'en': 'is a pdf library of independent publishers. It makes available for download publications that had or have physical copies in circulation. material.fail is the result of the failure, exhaustion, production difficulties and permanence of these materials, and the extraordinary nature of printed production, which is increasingly useless and necessary. The digital does not replace the printed matter, so, if feasible, be sure to search for the original versions of these texts with the publishers, which provided their material for this website.',
  'es': 'es una biblioteca de pdfs de editoriales independientes. Disponibiliza para download publicaciones que tuvieron o tienen ejemplares físicos en circulación. material.fail es resultado del fallo, agotamiento, dificultades de producción y permanencia de esos materiales, y del carácter extraordinario de la producción impresa, cada vez mais inútil y necesaria. Lo digital no sustituye el impreso, por eso, no deje de buscar, caso sea viable, las versiones originales con las editoriales, que cedieron su material para esta web.',
  'pt': 'é uma biblioteca de pdfs de editoras independentes. Disponibiliza para download publicações que tiveram ou têm exemplares físicos em circulação. material.fail é fruto da falha, esgotamento, dificuldade de produção e permanência desses materiais, e do caráter extraordinário da produção impressa, cada vez mais inútil e necessária. O digital não substitui o impresso, por isso, não deixe de procurar, caso ainda seja possível, as versões originais com as editoras, que cederam o seu material para este site.'
}

function changeText(language) {
  const textDiv = document.getElementById('intro-text');
  textDiv.innerHTML = INTRO[language || 'pt'];
}

function clearLanguageSelection() {
  const langDivs = document.getElementsByClassName('language-selector');
  for(let i = 0; i < langDivs.length; i++) {
    langDivs[i].classList.remove('selected');
  }
}

function selectThisLanguage() {
  clearLanguageSelection();
  changeText(this.innerHTML);
  this.classList.add('selected');
}

window.onload = function() {
  // load onclicks
  const langDivs = document.getElementsByClassName('language-selector');
  for(let i = 0; i < langDivs.length; i++) {
    langDivs[i].onclick = selectThisLanguage;
    langDivs[i].click();
  }

  // set background image
  const bgDiv = document.getElementById('daily-image');
  if(bgDiv) {
    bgDiv.style['background-image'] = `url({{ site.baseurl }}/media/images/backgrounds/background-${getBackgroundImageIndex()}.jpg)`;
  }
}
