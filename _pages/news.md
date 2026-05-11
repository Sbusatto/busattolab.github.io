---
layout: page
title: News
permalink: /news/
nav: true
nav_order: 4
---

## Latest News

<!-- Questo motore legge automaticamente tutte le notizie dal CMS! -->
<ul>
  {% for post in site.posts %}
    <li style="margin-bottom: 15px;">
      <strong>{{ post.date | date: "%B %Y" }} - {{ post.title }}:</strong><br>
      {{ post.content }}
    </li>
  {% endfor %}
</ul>