@import "tailwindcss";

@layer base {
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #1e293b;
    background-color: #f8fafc;
  }
  
  h1, h2, h3, .font-heading {
    font-family: 'Space Grotesk', sans-serif;
  }
}

/* Custom Light Glassmorphism & AI Soft Tech Aesthetics */
.bg-radial-gradient {
  background: radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.08) 0%, rgba(248, 250, 252, 0) 70%);
}

.bg-radial-hero {
  background: radial-gradient(ellipse at 50% -10%, rgba(168, 85, 247, 0.12), rgba(56, 189, 248, 0.12) 45%, rgba(248, 250, 252, 0) 80%);
}

.text-gradient {
  background: linear-gradient(135deg, #0f172a 0%, #334155 50%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-primary {
  background: linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #0284c7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-gold {
  background: linear-gradient(135deg, #d97706 0%, #b45309 50%, #78350f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Light Translucent Glass Cards */
.glass-card {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(224, 231, 255, 0.9);
  box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.08);
}

.glass-card-hover {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-card-hover:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(168, 85, 247, 0.4);
  box-shadow: 0 20px 40px -15px rgba(124, 58, 237, 0.15);
  transform: translateY(-3px);
}

.neon-border {
  border: 1px solid rgba(168, 85, 247, 0.3);
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.12);
}

.glow-purple {
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.2);
}

.glow-cyan {
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.2);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f5f9;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

