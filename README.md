<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Log In / Sign Up | AI BOS</title>
<meta name="description" content="Log in or create your AI BOS account to start automating your business.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="logo"><span class="logo-mark"></span> AI BOS</a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="features.html">Features</a></li>
      <li><a href="how-it-works.html">How It Works</a></li>
      <li><a href="dashboard.html">Dashboard</a></li>
      <li><a href="pricing.html">Pricing</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <a href="login.html" class="btn btn-ghost btn-sm">Log In</a>
      <a href="login.html" class="btn btn-primary btn-sm">Get Started</a>
    </div>
    <button class="nav-toggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
  </div>
</nav>

<div class="auth-wrap">
  <div class="glass auth-card reveal in">
    <div style="text-align:center; margin-bottom:24px;">
      <span class="logo-mark" style="display:inline-block;"></span>
      <h2 style="margin-top:14px;">Welcome to AI BOS</h2>
      <p style="font-size:0.9rem;">Your all-in-one AI Business Operating System</p>
    </div>

    <div class="auth-tabs">
      <div class="auth-tab active" data-target="panel-login">Log In</div>
      <div class="auth-tab" data-target="panel-signup">Sign Up</div>
    </div>

    <div class="social-row">
      <button type="button" class="social-btn">
        <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#fff" d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5a4.7 4.7 0 01-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.5z"/><path fill="#fff" opacity=".7" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2.1 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3v2.6A10 10 0 0012 22z"/></svg>
        Google
      </button>
      <button type="button" class="social-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M14 9h3V5h-3a4 4 0 00-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 011-1z"/></svg>
        Facebook
      </button>
    </div>
    <div class="divider">or continue with email</div>

    <div id="panel-login" class="auth-form-panel active">
      <form data-fake-submit>
        <div class="form-group">
          <label for="login-email">Email address</label>
          <input class="form-control" type="email" id="login-email" placeholder="you@company.com" required>
        </div>
        <div class="form-group">
          <label for="login-pass">Password</label>
          <input class="form-control" type="password" id="login-pass" placeholder="••••••••" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Log In</button>
        <div class="form-success">Logged in — welcome back to AI BOS!</div>
      </form>
      <p style="text-align:center; font-size:0.85rem; margin-top:16px;"><a href="#" style="color:var(--cyan);">Forgot your password?</a></p>
    </div>

    <div id="panel-signup" class="auth-form-panel">
      <form data-fake-submit>
        <div class="form-group">
          <label for="signup-name">Full name</label>
          <input class="form-control" type="text" id="signup-name" placeholder="Your name" required>
        </div>
        <div class="form-group">
          <label for="signup-email">Email address</label>
          <input class="form-control" type="email" id="signup-email" placeholder="you@company.com" required>
        </div>
        <div class="form-group">
          <label for="signup-pass">Password</label>
          <input class="form-control" type="password" id="signup-pass" placeholder="Create a password" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Create Account</button>
        <div class="form-success">Account created — welcome to AI BOS!</div>
      </form>
      <p style="text-align:center; font-size:0.8rem; color:var(--sub-dim); margin-top:16px;">By signing up, you agree to our Terms of Service and Privacy Policy.</p>
    </div>
  </div>
</div>

<script src="js/script.js"></script>
</body>
</html>
