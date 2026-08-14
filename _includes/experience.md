<h2 id="experience">Experience</h2>

<div class="experience-list">
{% for item in site.data.experience.main %}
<div class="experience-row">
  <div class="experience-logo">
    {% if item.image %}
    <img src="{{ item.image }}" alt="{{ item.organization }} logo">
    {% endif %}
  </div>
  <div class="experience-content">
    <div class="experience-title">
      {% if item.page %}
      <a href="{{ item.page }}"><strong>{{ item.title }}</strong></a>
      {% else %}
      <strong>{{ item.title }}</strong>
      {% endif %}
    </div>
    {% if item.time %}
    <div class="experience-time">{{ item.time }}</div>
    {% endif %}
    {% if item.advisor %}
    <div class="experience-advisor">Advised by {{ item.advisor }}.</div>
    {% endif %}
    {% if item.topic %}
    <div class="experience-topic"><strong>Topic:</strong> {{ item.topic }}</div>
    {% endif %}
  </div>
</div>
{% endfor %}
</div>
