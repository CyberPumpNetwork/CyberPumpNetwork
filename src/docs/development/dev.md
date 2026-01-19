---
layout: single
permalink: /dev/
---

<div class="hero-section">
  <img src="{{ '/kaslogo.png' | relative_url }}" alt="Development Logo">
  <div>
    <h1>Development: Build with Kaspa</h1>
    <p>Welcome to the Development Hub – your gateway to crafting innovative solutions within the Kaspa ecosystem using kas.me.</p>
    <p>Explore a comprehensive suite of tools, APIs, and expert insights from our developers below to launch your projects with confidence.</p>
  </div>
</div>

<h2>Development Resources</h2>

<div class="resource-grid">
  <div class="resource-card popup-trigger" data-target="api-popup">
    <i class="fas fa-tools"></i>
    <h3><a href="#" style="color: var(--accent-turkis); text-decoration: none;">API & Tools</a></h3>
    <p>Access comprehensive API documentation and a robust set of developer tools to seamlessly integrate with Kaspa’s cutting-edge infrastructure.</p>
  </div>

  <div class="resource-card popup-trigger" data-target="devtalk-popup">
    <i class="fas fa-comments"></i>
    <h3><a href="#" style="color: var(--accent-turkis); text-decoration: none;">Dev Talk - Insights from Our Developers</a></h3>
    <p>Gain valuable insights and engaging discussions from The IT CyberSpace developers, covering Kaspa’s evolution, best practices, exclusive sneak peeks, and more.</p>
  </div>
</div>

<!-- Popup für API & Tools -->
<div id="api-popup" class="popup" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: var(--bg-dark); border: 2px solid var(--accent-turkis); border-radius: 8px; padding: 1.5em; box-shadow: 0 4px 12px var(--shadow-turkis); z-index: 1001; color: var(--text-primary); max-width: 400px; text-align: center;">
  <h3 style="color: var(--accent-turkis);">API & Tools Notice</h3>
  <p>Explore our API documentation and tools to begin developing on Kaspa. Please note: Certain features require registration at our <a style="color: var(--accent-turkis); border-bottom: 1px solid var(--accent-turkis);">KAS.ME API</a>.</p>
  <button class="popup-close" style="background: var(--accent-turkis); color: #000; border: none; padding: 0.5em 1em; border-radius: 25px; cursor: pointer; margin-top: 1em;">Close</button>
</div>

<!-- Popup für Dev Talk -->
<div id="devtalk-popup" class="popup" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: var(--bg-dark); border: 2px solid var(--accent-turkis); border-radius: 8px; padding: 1.5em; box-shadow: 0 4px 12px var(--shadow-turkis); z-index: 1001; color: var(--text-primary); max-width: 400px; text-align: center;">
  <h3 style="color: var(--accent-turkis);">Dev Talk Preview</h3>
  <p>We're thrilled by your interest in Dev Talk! This feature is in planning. If you're eager to stay informed or share ideas, please <a href="mailto:theitcyberspace@gmail.com" style="color: var(--accent-turkis); border-bottom: 1px solid var(--accent-turkis);">reach out to us</a>.</p>
  <button class="popup-close" onclick="window.location.href = '/dev/01';" style="background: var(--accent-turkis); color: #000; border: none; padding: 0.5em 1em; border-radius: 25px; cursor: pointer; margin-top: 1em;">Close</button>
</div>

<hr>

<div class="footer-links">
  <a href="https://kas.me">Discover kas.me</a>
  <a href="https://x.com/TheITCyberSpace">Follow us on X</a>
  <a href="https://github.com/CyberPumpNetwork">Dive into the Repo</a>
</div>