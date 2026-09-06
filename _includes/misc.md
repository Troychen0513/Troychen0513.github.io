<h2 id="misc">Misc</h2>

<ul class="misc-list">
{% for item in site.data.misc.main %}
  <li>
    {% if item.images and item.images.size > 0 %}
    <details class="misc-disclosure" data-label="{{ item.label | escape }}">
      <summary title="Show {{ item.label | escape }} photos">{{ item.text }} <span class="misc-ending">{{ item.ending | escape }}<span class="misc-toggle-icon" aria-hidden="true"><span class="misc-icon misc-icon-caret"></span></span></span></summary>
      <div class="misc-gallery" role="region" aria-roledescription="carousel" aria-label="{{ item.label | escape }} photos">
        <div class="misc-viewport" tabindex="0" aria-label="{{ item.label | escape }} image slides">
          {% for photo in item.images %}
          <figure class="misc-slide" role="group" aria-roledescription="slide" aria-label="{{ forloop.index }} of {{ forloop.length }}">
            <img src="{{ photo.src | relative_url }}" alt="{{ photo.alt | escape }}" width="{{ photo.width }}" height="{{ photo.height }}" loading="lazy" decoding="async">
            <p class="misc-image-error" hidden>Image unavailable.</p>
            <figcaption>
              <span>{{ photo.caption | escape }}</span>
              {% if photo.source %}<a href="{{ photo.source }}" target="_blank" rel="noopener">{{ photo.credit | default: "Source" | escape }}</a>{% endif %}
            </figcaption>
          </figure>
          {% endfor %}
        </div>
        <div class="misc-controls" hidden>
          <button class="misc-arrow misc-prev" type="button" aria-label="Previous {{ item.label | escape }} photo" title="Previous photo"><span class="misc-icon misc-icon-prev" aria-hidden="true"></span></button>
          <div class="misc-dots" role="group" aria-label="Choose {{ item.label | escape }} photo">
            {% for photo in item.images %}
            <button class="misc-dot" type="button" aria-label="Photo {{ forloop.index }}: {{ photo.caption | escape }}" title="Photo {{ forloop.index }}"{% if forloop.first %} aria-current="true"{% endif %}><span aria-hidden="true"></span></button>
            {% endfor %}
          </div>
          <button class="misc-arrow misc-next" type="button" aria-label="Next {{ item.label | escape }} photo" title="Next photo"><span class="misc-icon misc-icon-next" aria-hidden="true"></span></button>
        </div>
        <span class="misc-sr-only misc-status" aria-live="polite" aria-atomic="true"></span>
      </div>
    </details>
    {% else %}
    {{ item.text }}{% if item.ending %} {{ item.ending | escape }}{% endif %}
    {% endif %}
  </li>
{% endfor %}
</ul>
