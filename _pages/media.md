---
layout: page
title: Media
permalink: /media/
nav: true
nav_order: 8
---

{{ page.description }}

<!-- Questo ciclo crea automaticamente l'HTML per ogni video inserito nel CMS -->
{% for video in page.videos %}
<div style="margin-bottom: 40px;">
  <h4 style="margin-bottom: 15px;">{{ video.title }}</h4>
  <div class="embed-responsive embed-responsive-16by9" style="border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/{{ video.youtube_id }}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
  </div>
</div>
{% endfor %}