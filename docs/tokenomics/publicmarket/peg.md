---
layout: single
permalink: /kasme/bb_v_m/pegbot
---

<div class="hero-section">
  <img src="/kaslogo.png" alt="PEG Bot Logo" width="80" height="80">
  <div>
    <h1>Understanding the PEG Bot Mechanism</h1>
    <p>A simple guide - how our PEG Bot maintains balance in the CyberPumpNetwork. If any part confuses you, feel free to ask for help in the community forums or reach out to us directly.</p>
    <p>Designed for everyone – from beginners to experts – to grasp the basics of fair value alignment in Kaspa-related assets.</p>
  </div>
</div>

<hr>

<!-- ===================================== -->
<!-- INTRO SECTION – PEG BOT EXPLAINED -->
<!-- ===================================== -->
<section class="peg-intro" style="margin: 4em 0; padding: 4em 2em; background: radial-gradient(circle at top, rgba(255,165,0,0.05), rgba(0,0,0,0.6)); border-radius: 20px; box-shadow: 0 0 40px rgba(0,0,0,0.4); text-align: center;">
  <h2 style="font-size: 2em; font-weight: 800; color: #fff; margin-bottom: 0.6em;">How Users and the Community Can Engage with PEG Mechanics</h2>
  <p style="max-width: 900px; margin: 0 auto; color: #aaa; font-size: 1.1em; line-height: 1.8;">
    From our company's perspective, the PEG Bot creates opportunities for logical engagement over the next 5 years. 
    While we can't make promises (in line with MiCA regulations), the system's design allows community members to participate in balancing asset values.
    This could involve active contributions like building tools or passive involvement through liquidity provision.
    <br><br>
    Think of it as a community-driven effort to align values fairly – benefiting the ecosystem through shared knowledge and resources.
  </p>
</section>

<h2>The Core Idea: Fair Value Alignment</h2>

<div class="info-grid">
  <div class="info-card">
    <i class="fas fa-balance-scale" style="font-size: 2.5em; color: #FFA500;"></i>
    <h3>1 KAS = 1 CYPU: The Fundamental Rule</h3>
    <p>This is the golden standard we aim for. CYPU is designed to mirror the value of Kaspa (KAS) exactly, like two sides of the same coin.</p>
  </div>

  <div class="info-card">
    <i class="fas fa-exchange-alt" style="font-size: 2.5em; color: #FFA500;"></i>
    <h3>Peg Pool: CYPU to CYPUV Exchange</h3>
    <p>In the Peg Pool, you can swap 1 CYPU for a varying amount of CYPUV (which might feel "unfair" at times due to market fluctuations). This is where temporary imbalances occur.</p>
  </div>

  <div class="info-card">
    <i class="fas fa-chart-line" style="font-size: 2.5em; color: #FFA500;"></i>
    <h3>Bonding Curve / DEX: CYPUV to WKAS</h3>
    <p>From there, CYPUV can be traded for WKAS on a dynamic basis. The rates are influenced by community decisions and developer seeds, making it adaptable.</p>
  </div>
</div>

<p style="text-align: center; margin: 2em 0; font-size: 1.1em; color: var(--text-secondary);">
  Buying CYPU, converting to CYPUV, and selling for WKAS follows basic market logic – similar to any asset where prices differ across platforms. It's a proven fact in trading: assets can be cheaper in one place and more expensive in another.
</p>

<!-- ===================================== -->
<!-- WHY SECTION – MARKET IMBALANCES -->
<!-- ===================================== -->
<section class="why-section" style="margin: 4em 0; padding: 4em 2em; background: radial-gradient(circle at 50% 20%, rgba(255,165,0,0.08), rgba(10,8,15,0.8)); border-radius: 22px; box-shadow: 0 0 40px rgba(255,165,0,0.15); text-align: center;">
  <h2 style="font-size: 2em; font-weight: 800; color: #FFA500; margin-bottom: 0.8em;">Why Does This Happen? Understanding Market Imbalances</h2>
  <p style="max-width: 900px; margin: 0 auto; color: #cfc6e6; font-size: 1.1em; line-height: 1.8;">
    Markets aren't perfect. An asset like CYPU might trade at different values on various exchanges or pools due to supply, demand, or timing differences.
    This "imbalance" is a natural law – it happens in stocks, currencies, and crypto alike. It's unavoidable, but it creates opportunities for alignment.
    <br><br>
    Our PEG Bot steps in to smooth these differences temporarily, until our Smart Contract launches to enforce a strict 1:1 peg permanently.
    In the meantime, users can join in: actively by creating their own bots with community know-how, or passively by providing liquidity and earning fees plus shares.
    <br><br>
    This approach sets us apart, even before fully implementing CYPUV's ultimate purpose (stay tuned!).
  </p>
</section>

<h2>How the PEG Bot Works: A Simple Step-by-Step</h2>

<ol style="max-width: 800px; margin: 2em auto; font-size: 1.1em; line-height: 1.8; color: var(--text-secondary);">
  <li><strong>Bot Starts:</strong> It mints 1 CYPU using 1 KAS as backing.</li>
  <li><strong>Checks for Imbalances:</strong> Scans pools like Zealous Swap (L2), Kaspacom DEX (L2), and Kaspacom (L1) to find the biggest price difference.</li>
  <li><strong>No Action on L1 if Balanced:</strong> If Layer 1 is stable, it skips.</li>
  <li><strong>Action on L2:</strong> Compares Zealous and Kaspacom. Swaps 1 CYPU for X CYPUV, then sells for WKAS shares.</li>
  <li><strong>Profits Flow:</strong> Gains go to LP providers (fees + shares). Over time, this builds up trading volume and LP shares automatically.</li>
</ol>

<p style="text-align: center; margin: 2em 0; font-size: 1.1em; color: var(--text-secondary);">
  Why does this grow on its own? Because imbalances are a core market principle – they always exist, and correcting them creates ongoing activity.
</p>

<div class="footer-links">
  <a href="/kasme/ecoloop/onchain">Back</a>
</div>