<h2 id="experience">Experience</h2>

<h3 id="academic-experience" class="experience-subtitle">Academic Experience</h3>

<ul class="experience-list">

{% for link in site.data.academic_experience.academic %}

<li>
<div class="institution-entry experience-entry">
  <div class="experience-content">
    <div class="title"><a href="{{ link.page }}">{{ link.title }}</a></div>
    {% if link.time %}
    <div class="time">{{ link.time }}</div>
    {% endif %}
    {% if link.description %}
    <div class="description">{{ link.description }}</div>
    {% endif %}
  </div>
  {% if link.image %}
  <a class="institution-logo" href="{{ link.page }}" aria-label="{{ link.title | escape }}">
    <img src="{{ link.image }}" alt="{{ link.title | escape }} logo" width="88" height="88" loading="lazy">
  </a>
  {% endif %}
</div>
{% if link.reflection and link.reflection != empty %}
<blockquote class="experience-reflection">
  <p>{{ link.reflection | escape }}</p>
</blockquote>
{% endif %}
</li>

{% endfor %}

</ul>
