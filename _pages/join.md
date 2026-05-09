---
layout: page
title: join
permalink: /join/
description: Information for prospective students and postdocs.
nav: true
nav_order: 5
---

## Join the Lab!
We are always looking for motivated researchers to join our team at the University of Groningen. Please fill out the application form below to express your interest and upload your CV.

<div class="card z-depth-0 mt-4" style="background-color: var(--global-card-bg-color); border: 1px solid var(--global-divider-color); padding: 30px; border-radius: 8px;">
  
  <form action="https://formsubmit.co/s.busatto@rug.nl" method="POST" enctype="multipart/form-data">
    
    <!-- Hidden form settings -->
    <input type="hidden" name="_subject" value="New Lab Application: Busatto Lab">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_template" value="table">
    
    <div class="row">
      <div class="col-md-6 form-group">
        <label for="name" class="font-weight-bold">Full Name <span style="color: #E3000F;">*</span></label>
        <input type="text" class="form-control" name="name" required style="border: 1px solid var(--global-divider-color); background-color: var(--global-bg-color); color: var(--global-text-color);">
      </div>
      <div class="col-md-6 form-group">
        <label for="email" class="font-weight-bold">Email Address <span style="color: #E3000F;">*</span></label>
        <input type="email" class="form-control" name="email" required style="border: 1px solid var(--global-divider-color); background-color: var(--global-bg-color); color: var(--global-text-color);">
      </div>
    </div>

    <div class="form-group mt-3">
      <label for="position" class="font-weight-bold">Position of Interest <span style="color: #E3000F;">*</span></label>
      <select class="form-control" name="position" required style="border: 1px solid var(--global-divider-color); background-color: var(--global-bg-color); color: var(--global-text-color);">
        <option value="">Select a position...</option>
        <option value="Postdoctoral Researcher">Postdoctoral Researcher</option>
        <option value="Ph.D. Student">Ph.D. Student</option>
        <option value="MSc. Student">MSc. Student</option>
        <option value="Other">Other (Please specify in message)</option>
      </select>
    </div>

    <div class="form-group mt-3">
      <label for="message" class="font-weight-bold">Cover Letter / Brief Statement <span style="color: #E3000F;">*</span></label>
      <textarea class="form-control" name="message" rows="6" placeholder="Briefly describe your research interests and why you would like to join the lab..." required style="border: 1px solid var(--global-divider-color); background-color: var(--global-bg-color); color: var(--global-text-color);"></textarea>
    </div>

    <div class="form-group mt-3">
      <label for="attachment" class="font-weight-bold">Upload CV (PDF only) <span style="color: #E3000F;">*</span></label>
      <input type="file" class="form-control-file" name="attachment" accept="application/pdf" required>
    </div>

    <button type="submit" class="btn z-depth-0 mt-4" style="background-color: #E3000F; color: white; border-radius: 4px; padding: 10px 20px; font-weight: bold;">Submit Application</button>
  
  </form>
</div>
