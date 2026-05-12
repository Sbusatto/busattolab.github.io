---
nav: true
layout: page
permalink: /team/
nav_order: 2
title: Team
pi:
  name: Dr. Sara Busatto
  role: Principal Investigator
  bio: Dr. Busatto is a Tenure-track Assistant Professor and head of the
    Biological Nanoparticles Laboratory within the Nanomedicine and Drug
    Targeting Unit at the Groningen Research Institute of Pharmacy. Her research
    focuses on the isolation, characterization, loading, and engineering of
    extracellular vesicles (EVs).
  linkedin: https://www.linkedin.com/in/sara-busatto-402035140/
  photo: /assets/img/prof_pic.jpg
members:
  - name: Sjoerd Idzerda
    role: Ph.D. Student
    joined: Joined January 2025
    linkedin: "#"
  - name: Marloes Kruk
    role: Research Assistant
    joined: Joined November 2024
    linkedin: "#"
  - name: Laura Sikkens
    role: MSc. Student
    joined: Joined January 2026
    linkedin: "#"
  - name: Sterre Metz
    role: MSc. Student
    joined: Joined January 2026
    linkedin: "#"
  - name: Kaj Mulder
    role: MSc. Student
    joined: Joined January 2026
    linkedin: "#"
  - name: Adelina Deoanca
    role: MSc. Student
    joined: Joined March 2026
  - name: TT
    role: BOSS
    photo: /assets/img/hide_the_pain_harold_-andrás_arató-.jpg
description: Meet the researchers at the Biological Nanoparticles Laboratory.
---

## Principal Investigator

{% if page.pi %}
<div class="row align-items-center mb-4 pt-3">
  <div class="col-sm-3 text-center">
    {% if page.pi.photo %}
      <img src="{{ page.pi.photo | relative_url }}" alt="{{ page.pi.name }}" class="img-fluid rounded-circle z-depth-1" style="max-width: 150px;">
    {% else %}
      <div style="width: 120px; height: 120px; background-color: var(--global-divider-color); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin: 0 auto;">
        <i class="fas fa-user fa-3x" style="color: var(--global-text-color-light);"></i>
      </div>
    {% endif %}
  </div>
  <div class="col-sm-9">
    <h4 style="color: #E3000F;">{{ page.pi.name }}</h4>
    <h6 class="text-muted">{{ page.pi.role }}</h6>
    <p>{{ page.pi.bio }}</p>
    {% if page.pi.linkedin and page.pi.linkedin != "" %}
      <a href="{{ page.pi.linkedin }}" target="_blank" style="color: #E3000F; text-decoration: none;"><i class="fab fa-linkedin fa-lg"></i> Connect on LinkedIn</a>
    {% endif %}
  </div>
</div>
{% endif %}

<hr style="margin: 2rem 0;">

## Current Lab Members

{% for member in page.members %}
<div class="row align-items-center mb-4">
  <div class="col-sm-3 text-center">
    {% if member.photo %}
      <img src="{{ member.photo | relative_url }}" alt="{{ member.name }}" class="img-fluid rounded-circle z-depth-1" style="max-width: 120px; object-fit: cover; aspect-ratio: 1/1;">
    {% else %}
      <div style="width: 120px; height: 120px; background-color: var(--global-divider-color); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin: 0 auto;">
        <i class="fas fa-user fa-3x" style="color: var(--global-text-color-light);"></i>
      </div>
    {% endif %}
  </div>
  <div class="col-sm-9">
    <h5 style="color: #E3000F; margin-bottom: 2px;">{{ member.name }}</h5>
    <h6 class="text-muted">{{ member.role }}</h6>
    {% if member.joined and member.joined != "" %}
      <p class="mb-1">{{ member.joined }}</p>
    {% endif %}
    {% if member.linkedin and member.linkedin != "#" and member.linkedin != "" %}
      <a href="{{ member.linkedin }}" target="_blank" style="color: #E3000F; text-decoration: none;"><i class="fab fa-linkedin fa-lg"></i> LinkedIn Profile</a>
    {% endif %}
  </div>
</div>
{% endfor %}

<hr style="margin: 2rem 0;">


