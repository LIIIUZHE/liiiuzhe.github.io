---
layout: about
title: Home
permalink: /
subtitle: >
  Research Scientist, Robotics / Embodied AI

profile:
  align: left
  image: avatar.png
  image_circular: false # keep square cover
  more_info: >
    <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
    <p><a href="https://github.com/liiiuzhe">GitHub</a> · <a href="https://www.linkedin.com/">LinkedIn</a></p>

social: false # hide bottom social/contact block

announcements:
  enabled: false

latest_posts:
  enabled: false
---

<style>
  .page-hero {
    display: flex;
    gap: 24px;
    align-items: center;
    margin-bottom: 28px;
  }
  .page-hero .profile-img {
    width: 148px;
    height: 148px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
  }
  .page-hero .intro h1 {
    font-size: 32px;
    margin-bottom: 8px;
  }
  .page-hero .intro p {
    margin: 0 0 6px 0;
    line-height: 1.5;
  }
  .page-hero .meta a {
    color: #0b57d0;
  }
  .pub-list {
    margin-top: 20px;
  }
  .pub-list h2 {
    font-size: 22px;
    margin-bottom: 16px;
  }
  .bibliography {
    list-style: none;
    padding: 0;
  }
  .bibliography li {
    display: flex;
    gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid #eaeaea;
  }
  .bibliography li:last-child {
    border-bottom: none;
  }
  .bibliography .preview {
    width: 120px;
    min-height: 80px;
    background: #f6f7fb;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
  }
  .bibliography .preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .bibliography .details {
    flex: 1;
  }
  .bibliography .title {
    font-weight: 700;
    margin: 0 0 6px 0;
  }
  .bibliography .authors,
  .bibliography .venue {
    margin: 0 0 6px 0;
    color: #4b5563;
    line-height: 1.4;
  }
  .bibliography .links a {
    margin-right: 10px;
    color: #0b57d0;
    font-weight: 600;
  }
</style>

<div class="page-hero">
  <div class="profile-img-wrapper">
    {% assign profile_image_path = 'assets/img/' | append: page.profile.image %}
    <img
      class="profile-img"
      src="{{ profile_image_path | relative_url }}"
      alt="{{ page.title }} profile"
      loading="eager"
    >
  </div>
  <div class="intro">
    <h1>Zhe Liu</h1>
    <p>Research Scientist focused on robotics, manipulation, and embodied AI.</p>
    <p>I build robot learning systems that generalize across environments and tasks.</p>
    <p class="meta">
      Email: <a href="mailto:you@example.com">you@example.com</a><br>
      <a href="https://github.com/liiiuzhe">GitHub</a> · <a href="https://www.linkedin.com/">LinkedIn</a>
    </p>
  </div>
</div>

<div class="pub-list">
  <h2>Publications</h2>

<div class="publications">

{% bibliography --group_by none %}

</div>
</div>
