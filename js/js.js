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
