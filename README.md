<!-- ===================== HERO BANNER ===================== -->
<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:050505,50:161616,100:00F5D4&height=220&section=header&text=Personal%20Portfolio%20Website&fontSize=42&fontColor=FFFFFF&animation=fadeIn&fontAlignY=38&desc=Code%20%7C%20Create%20%7C%20Impact&descAlignY=60&descSize=18" alt="Personal Portfolio Website Banner"/>

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=2800&pause=900&color=00F5D4&center=true&vCenter=true&width=650&lines=Minimalist+Design+%7C+Modern+Experience;Interactive+Project+Timeline;Secure+Node.js+Contact+Backend;Built+with+HTML%2C+CSS%2C+JavaScript+%26+Express" alt="Animated typing text"/>

  <p>
    <img src="https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JavaScript-00F5D4?style=for-the-badge&logo=html5&logoColor=050505" alt="Frontend"/>
    <img src="https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-111111?style=for-the-badge&logo=node.js&logoColor=00F5D4" alt="Backend"/>
    <img src="https://img.shields.io/badge/Email-Mailjet-8B5CF6?style=for-the-badge&logo=maildotru&logoColor=FFFFFF" alt="Mailjet"/>
  </p>

  <p>
    A modern, responsive personal portfolio website with a minimalist interface, interactive project timeline, and secure contact form powered by an Express.js backend.
  </p>

  <p>
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-local-setup--installation">Installation</a> •
    <a href="#-security">Security</a>
  </p>
</div>

---

## 🖼️ Preview

> Replace the image path below with your own screenshot after adding it to the repository.

<div align="center">
  <img src="assets/portfolio-preview.png" alt="Portfolio Website Preview" width="950"/>
</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Modern UI/UX

- Strict `100vh` hero layout
- CSS Flexbox-based structure
- Minimalist, app-like visual experience
- Responsive design principles

</td>
<td width="50%">

### 🧭 Interactive Project Timeline

- Central timeline-driven layout
- Glassmorphism project cards
- Smooth hover transitions
- Scaling animations and background blur

</td>
</tr>
<tr>
<td width="50%">

### 📩 Functional Contact Form

- Asynchronous `fetch()` submission
- Real-time button state updates
- Frontend and backend separation
- Email delivery through Mailjet API

</td>
<td width="50%">

### 🔐 Secure Backend API

- Helmet security headers
- IP-based rate limiting
- Request validation and sanitization
- CORS origin restrictions
- Environment-based secret management

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

### Frontend

<p>
  <img src="https://skillicons.dev/icons?i=html,css,js" alt="Frontend technologies"/>
</p>

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic page structure |
| CSS3 | Flexbox, animations, custom properties, responsive styling |
| Vanilla JavaScript | DOM interactions and asynchronous form submission |
| Fetch API | Sends contact form data to the backend |

### Backend

<p>
  <img src="https://skillicons.dev/icons?i=nodejs,express" alt="Backend technologies"/>
</p>

| Technology | Purpose |
| --- | --- |
| Node.js | JavaScript runtime |
| Express.js | Backend API and routing |
| Node-Mailjet | Mailjet API integration |
| dotenv | Environment variable management |
| cors | Cross-origin request configuration |
| helmet | Secure HTTP headers |
| express-rate-limit | API abuse and spam protection |
| express-validator | Input validation and sanitization |

---

## 🧩 Application Architecture

```text
┌───────────────────────────────┐
│         Frontend              │
│  HTML + CSS + Vanilla JS      │
└───────────────┬───────────────┘
                │ POST /api/contact
                ▼
┌───────────────────────────────┐
│        Express.js API         │
│                               │
│  CORS → Rate Limit → Validate │
│              ↓                │
│            Helmet             │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│         Mailjet API           │
│      Secure Email Routing     │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│      Recipient Email Inbox    │
└───────────────────────────────┘
