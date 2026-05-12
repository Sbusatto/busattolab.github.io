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
  <ul>
  {% for post in site.posts %}
    <li style="margin-bottom: 30px;">
      {{ post.date | date: "%B %Y" }} - <strong>{{ post.title }}</strong><br>
      
      <!-- Se c'è un'immagine, la mostra formattata bene -->
      {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }}" style="max-width: 100%; height: auto; max-height: 300px; margin-top: 10px; margin-bottom: 10px; border-radius: 8px; display: block;">
      {% endif %}
      
      <!-- Il testo della notizia -->
      <div>
        {{ post.content }}
      </div>
      
      <!-- Se c'è un link, aggiunge un bottone/testo cliccabile alla fine -->
      {% if post.ext_link %}
        <a href="{{ post.ext_link }}" target="_blank" rel="noopener noreferrer" style="font-weight: bold; display: inline-block; margin-top: 5px;">🔗 Read more</a>
      {% endif %}
    </li>
  {% endfor %}
</ul>
</ul>