<h2 id="experience">Experience</h2>

<h3 id="academic-experience" class="experience-subtitle">Academic Experience</h3>

<div class="publications experience-publications">
<ol class="bibliography">

{% for link in site.data.academic_experience.academic %}

<li>
<div class="pub-row experience-entry">
  <div class="col-sm-3 abbr experience-abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %}
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1 experience-teaser" alt="{{ link.title }} logo">
    {% endif %}
  </div>
  <div class="col-sm-9 experience-content" style="position: relative;padding-right: 15px;padding-left: 20px;">
    <div class="title"><a href="{{ link.page }}">{{ link.title }}</a></div>
    {% if link.time %}
    <div class="time">{{ link.time }}</div>
    {% endif %}
    {% if link.description %}
    <div class="description">{{ link.description }}</div>
    {% endif %}
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>
