# Novarance Pharmaceuticals Website

A professional, responsive, multi-page static website for **Novarance Pharmaceuticals Pvt Ltd**, designed with a modern corporate aesthetic.

## 🚀 How to Run

Since this is a static website built with HTML, CSS, and JavaScript, you do not need any complex backend server or installation.

### Option 1: Direct Open (Easiest)
1. Navigate to the project folder.
2. Double-click on **`index.html`**.
3. The website will open in your default web browser.

### Option 2: Local Server (Recommended for Developers)
If you have Python installed or use VS Code Live Server:
- **Python**: Run `python -m http.server` in the terminal and open `http://localhost:8000`.
- **VS Code**: Right-click `index.html` and select "Open with Live Server".

## 📂 Project Structure

```
/medical website
│
├── index.html          # Home Page (includes Stats Section)
├── about.html          # About Us Page
├── products.html       # Products Page with Filtering
├── manufacturing.html  # Manufacturing Infrastructure
├── quality.html        # Quality & Compliance
├── careers.html        # Careers Page
├── contact.html        # Contact Us Page
│
├── css/
│   └── style.css       # Global Styles, Red/White Theme, Animations
│
└── js/
    └── main.js         # Navigation, Counters, Form Validation
```

## ✨ Key Features

- **Multi-Page Architecture**: Distinct HTML files for every section (Home, About, Products, etc.).
- **Premium Design**: Clean **White Background** with accessible **Corporate Red** typography.
- **Interactive Stats Section**: Custom count-up animation for company highlights on the Home page.
- **Product Filtering**: JavaScript-powered category filter on the Products page.
- **Responsive Layout**: Fully optimized for Desktop, Tablet, and Mobile screens.
- **Animations**: Smooth fade-ins, hover effects, and button pulse animations.

## 🛠️ Technologies Used

- **HTML5**: Semantic markup.
- **CSS3**: Variables, Flexbox, Grid, Animations.
- **Vanilla JavaScript**: DOM manipulation, Intersection Observers (no libraries).

## 🐳 Docker Support

You can easily containerize and run this website using Docker.

### 1. Build the Docker Image
Run the following command in the project root directory:
```bash
docker build -t novarance-website .
```

### 2. Run the Container
Run the container on port 8080:
```bash
docker run -d -p 8080:80 --name novarance-app novarance-website
```

### 3. Access the Website
Open your browser and visit: `http://localhost:8080`

### 4. Stop the Container
```bash
docker stop novarance-app
docker rm novarance-app
```

---
© 2026 Novarance Pharmaceuticals Pvt Ltd
