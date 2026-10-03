# Abdelrahman Fathy - Mechatronics & AI Automation Portfolio

A modern, high-performance, and responsive personal portfolio website built with semantic HTML5, modern CSS3 (Cyber-Mechatronics dark theme with neon cyan & emerald accents), and interactive vanilla JavaScript.

---

## 🚀 Live Preview & Quick Start

1. Simply double-click `index.html` to open it in any web browser (Chrome, Edge, Firefox, Safari).
2. All assets, fonts, and styles are self-contained and pre-configured.

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML markup with all 7 portfolio sections
├── css/
│   └── style.css           # Responsive styling, glassmorphism cards, animations
├── js/
│   └── main.js            # Sticky navbar blur, mobile drawer, scrollspy, lightbox viewer
├── images/                 # Image assets folder
│   ├── profile.jpg         # Profile picture (600x600 recommended)
│   ├── engx-certificate.jpg # ENGX MEP certificate
│   ├── gas-guard-1.jpg     # Gas Guard project showcase photo
│   ├── workflow-1.png      # Workflow A: Customer Support AI Agent
│   ├── workflow-2.png      # Workflow B: Smart RAG System
│   ├── workflow-3.png      # Workflow C: Alexa AI Email & Calendar Assistant
│   └── workflow-4.png      # Workflow D: AI Task Manager
└── README.md               # Documentation & Netlify guide
```

---

## 🖼️ How to Add Your Images

Your website comes with pre-rendered cyber-schematic placeholder images so it looks complete right away. When you are ready to upload your real photos:

1. Copy your actual profile photo into the `images/` folder and name it **`profile.jpg`**.
2. Copy your ENGX training certificate into `images/` as **`engx-certificate.jpg`**.
3. Copy your Gas Guard hardware photo into `images/` as **`gas-guard-1.jpg`**.
4. Copy your n8n workflow diagrams/screenshots into `images/` as:
   - **`workflow-1.png`** (Customer Support Telegram Bot)
   - **`workflow-2.png`** (Smart RAG System)
   - **`workflow-3.png`** (Alexa AI Assistant)
   - **`workflow-4.png`** (AI Task Manager)

> **Note:** If any image is missing or loading, the website automatically falls back to a styled cyber schematic card so there are never any broken image icons!

---

## 📄 Adding Your Resume / CV

1. Add your PDF file (e.g. `Abdelrahman_Fathy_CV.pdf`) to this directory or inside an `assets/` folder.
2. In `index.html`, locate the `Download CV` buttons (`#nav-cv-btn` and mobile CTA) and update the `href` attribute:
   ```html
   <a href="Abdelrahman_Fathy_CV.pdf" download="Abdelrahman_Fathy_CV.pdf" class="btn btn-outline cv-btn">
   ```

---

## 🌐 Deploying to Netlify (Free & Takes 1 Minute)

### Option 1: Drag & Drop (Fastest)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Log in or create a free account.
3. Drag and drop this entire `portfolio` folder into the Netlify browser window.
4. Your website will be live with an SSL HTTPS URL instantly!

### Option 2: Via GitHub
1. Initialize a git repository and push this folder to your GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/Abdelrhamnfathy/portfolio.git
   git push -u origin main
   ```
2. In Netlify dashboard, click **"Add new site" > "Import an existing project"** and select your GitHub repo.
3. Keep build command blank and publish directory as `.`. Click **Deploy**.

---

## 📬 Netlify Form Submissions

The contact form is already pre-configured with Netlify Forms integration (`data-netlify="true"` and honeypot spam protection). Whenever a visitor fills out the contact form:
- The message is automatically captured in your **Netlify Dashboard > Site > Forms**.
- You can enable instant email notifications in Netlify settings so you receive an email whenever someone submits the form.
