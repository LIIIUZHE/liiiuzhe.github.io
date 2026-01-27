---
layout: default
title: Home
permalink: /
---

<style>
  .home-hero {
    display: flex;
    gap: 28px;
    align-items: flex-start;
    margin-top: 8px;
    margin-bottom: 34px;
  }

  .home-hero .avatar {
    width: 165px;
    height: 165px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  }

  .home-hero h1 {
    font-size: 34px;
    line-height: 1.2;
    margin: 0 0 8px 0;
    font-weight: 750;
  }

  .home-hero .subtitle {
    margin: 0 0 14px 0;
    color: #4b5563;
    font-size: 15px;
  }

  .home-hero .bio {
    margin: 0 0 10px 0;
    line-height: 1.55;
    max-width: 56ch;
  }

  .home-hero .links a {
    color: #0b57d0;
    font-weight: 600;
    text-decoration: none;
  }
  .home-hero .links a:hover {
    text-decoration: underline;
  }

  .section-title {
    font-size: 22px;
    font-weight: 750;
    margin: 18px 0 16px 0;
  }

  /* Publications layout: match _layouts/bib.liquid structure */
  .publications .row {
    padding: 14px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    margin: 0;
  }
  .publications .row:last-child {
    border-bottom: none;
  }
  .publications .abbr {
    padding-left: 0;
    padding-right: 18px;
  }
  .publications img.preview {
    width: 100%;
    max-width: 180px;
    height: 118px;
    object-fit: cover;
    border-radius: 10px;
    background: #f6f7fb;
  }

  .publications .title {
    font-size: 16px;
    font-weight: 750;
    margin-bottom: 6px;
  }
  .publications .author,
  .publications .periodical {
    color: #4b5563;
    font-size: 14px;
    line-height: 1.45;
  }

  /* Make buttons look like simple text links */
  .publications .links .btn {
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
    margin-right: 12px;
    font-size: 14px;
    font-weight: 600;
    color: #0b57d0 !important;
    box-shadow: none !important;
  }
  .publications .links .btn:hover {
    text-decoration: underline;
  }

  /* Mobile */
  @media (max-width: 576px) {
    .home-hero {
      gap: 18px;
    }
    .home-hero .avatar {
      width: 120px;
      height: 120px;
    }
    .publications img.preview {
      height: 92px;
    }
  }
</style>

<div class="home-hero">
  <img class="avatar" src="{{ '/assets/img/avatar.png' | relative_url }}" alt="avatar" loading="eager">
  <div>
    <h1>Zhe Liu</h1>
    <p class="subtitle">Isaacsim / Mujoco / Ros</p>
    <p class="bio">
      Tester .
    </p>
    <div class="links">
      Email: <a href="mailto:you@example.com">2224861123@qq.com</a><br>
      <a href="https://scholar.google.com/">Google Scholar</a> / <a href="https://github.com/liiiuzhe">GitHub</a> 
    </div>
  </div>
</div>

<div class="section-title">Publications</div>

<div class="publications">

{% bibliography --group_by none %}

</div>
