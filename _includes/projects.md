{% if site.data.projects.main and site.data.projects.main.size > 0 %}
<h2 id="projects">Current Research</h2>

<div class="project-list">
{% for link in site.data.projects.main %}
<div class="project-item">
  <div class="project-heading">
    {% if link.conference_short %}
    <span class="project-badge">{{ link.conference_short }}</span>
    {% endif %}
    <h3>
    {% if link.page or link.code %}
    <a href="{{ link.page | default: link.code }}">{{ link.title }}</a>
    {% else %}
    {{ link.title }}
    {% endif %}
    </h3>
  </div>
  <div class="project-authors">{{ link.authors }}</div>
  <div class="project-meta"><em>{{ link.conference }}</em></div>
  {% if link.description %}
  <p class="project-description">{{ link.description }}</p>
  {% endif %}
  <div class="links">
    {% if link.page %}
    <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">Project Page</a>
    {% endif %}
    {% if link.code %}
    <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">Code</a>
    {% endif %}
    {% if link.video %}
    <a href="{{ link.video }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">Video</a>
    {% endif %}
  </div>
</div>
{% endfor %}
</div>
{% endif %}
