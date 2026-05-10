---
layout: page
title: Join / Contact
permalink: /join/
description: Information for prospective students, postdocs, and general inquiries.
nav: true
nav_order: 5
---

## Get in Touch
Whether you are a motivated researcher looking to join the team or you simply want to reach out with a general inquiry, we would love to hear from you. 

<div class="card z-depth-0 mt-4" style="background-color: var(--global-card-bg-color); border: 1px solid var(--global-divider-color); padding: 30px; border-radius: 8px;">
  
  <form action="https://formsubmit.co/s.busatto@rug.nl" method="POST" enctype="multipart/form-data">
    
    <!-- Hidden form settings -->
    <input type="hidden" name="_subject" value="New Inquiry/Application: Busatto Lab">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_template" value="table">
    
    <!-- Auto-response email sent back to the user -->
    <input type="hidden" name="_autoresponse" value="Thank you for reaching out to the Busatto Lab. We have received your message and will get back to you as soon as possible.">
    
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
      <label for="position" class="font-weight-bold">Reason for Contact <span style="color: #E3000F;">*</span></label>
      <select class="form-control" id="position-select" name="position" required onchange="toggleUploadRequirement()" style="border: 1px solid var(--global-divider-color); background-color: var(--global-bg-color); color: var(--global-text-color);">
        <option value="">Select an option...</option>
        <option value="Application: Postdoctoral Researcher">Application: Postdoctoral Researcher</option>
        <option value="Application: Ph.D. Student">Application: Ph.D. Student</option>
        <option value="Application: MSc. Student">Application: MSc. Student</option>
        <option value="General Contact / Inquiry">General Contact / Inquiry</option>
      </select>
    </div>

    <div class="form-group mt-3">
      <label for="message" class="font-weight-bold">Message / Cover Letter <span style="color: #E3000F;">*</span></label>
      <textarea class="form-control" name="message" rows="6" placeholder="Briefly describe your research interests, or write your general message here..." required style="border: 1px solid var(--global-divider-color); background-color: var(--global-bg-color); color: var(--global-text-color);"></textarea>
    </div>

    <div class="form-group mt-3">
      <label for="attachment" class="font-weight-bold">Upload CV (PDF only) <span id="cv-asterisk" style="color: #E3000F;">*</span></label>
      <input type="file" id="cv-upload" class="form-control-file" name="attachment" accept="application/pdf" required>
      <small class="form-text text-muted">Required for lab applications. Not required for general inquiries.</small>
    </div>

    <div style="margin-bottom: 15px;">
  <input type="checkbox" id="gdpr-consent" name="gdpr_consent" required>
  <label for="gdpr-consent" style="font-size: 0.9em;">
    I consent to the processing of my personal data in accordance with the 
    <a href="/privacy/" target="_blank">Privacy Policy</a>.*
  </label>
</div>

    <button type="submit" class="btn z-depth-0 mt-4" style="background-color: #E3000F; color: white; border-radius: 4px; padding: 10px 20px; font-weight: bold;">Send Message</button>
  
  </form>
</div>

<!-- JavaScript to make CV upload mandatory ONLY for applications -->
<script>
  function toggleUploadRequirement() {
    var select = document.getElementById('position-select').value;
    var uploadField = document.getElementById('cv-upload');
    var asterisk = document.getElementById('cv-asterisk');
    
    if (select === 'General Contact / Inquiry') {
      uploadField.required = false;
      asterisk.style.display = 'none';
    } else {
      uploadField.required = true;
      asterisk.style.display = 'inline';
    }
  }
</script>
