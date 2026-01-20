# ⚡ Rehan Sayyed | Full Stack Developer Portfolio

> A modern, cinematic, and high-performance developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase projects, technical skills, and professional experience with a clean, "tech-noir" aesthetic.

---

## ✨ Key Features

* **🎨 Modern Tech Aesthetic:** Dark-themed UI with "shimmer" typography, glassmorphism sidebars, and premium gradients.
* **📱 Fully Responsive:** Adaptive layout with a sidebar navigation for desktop and a touch-friendly drawer for mobile.
* **🚀 Smooth Animations:**
* Scroll-triggered reveals using a custom `useInView` hook.
* Complex entrance animations powered by **Framer Motion**.
* Interactive hover states on project cards and skill icons.


* **⚡ High Performance:** Optimized with Vite, preconnected Google Fonts (Outfit & Space Grotesk), and efficient code splitting.
* **🧩 Component-Based:** Clean architecture separating logic (Hooks) from UI (Components/Pages).

---

## 🛠️ Tech Stack

**Frontend Core:**

* **React 18**
* **Vite**

**Styling & UI:**

* **Tailwind CSS**
* **Lucide React** & **React Icons** (Iconography)

**Animation:**

* **Framer Motion** (Complex gestures & transitions)
* **Intersection Observer API** (Scroll detection)

**Fonts:**

* **Outfit** (Headings)
* **Space Grotesk** (Code/Tech details)

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

* Node.js (v16 or higher)
* npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rsayyed591/portfolio.git
cd portfolio

```


2. **Install dependencies**
```bash
npm install

```


3. **Start the development server**
```bash
npm run dev

```


4. **Build for production**
```bash
npm run build

```



---

## 📂 Project Structure

```text
src/
├── components/
│   ├── AnimatedButton.jsx   # Custom button with fill animation
│   ├── AnimateOnScroll.jsx  # Wrapper for scroll reveals
│   └── useInView.js         # Custom hook for intersection observer
├── pages/
│   ├── Hero.jsx             # Landing section with typewriter effect
│   ├── About.jsx            # Bio section
│   ├── Skills.jsx           # Tech stack grid
│   ├── Projects.jsx         # Project showcase with hover cards
│   ├── Experience.jsx       # Timeline of work history
│   ├── Contact.jsx          # Contact details & form layout
│   ├── Navbar.jsx           # Responsive sidebar/drawer
│   └── Footer.jsx           # Copyright & social links
├── index.css                # Global styles & Tailwind directives
└── main.jsx                 # Entry point

```

---

## 🎨 Customization

To personalize this portfolio for yourself:

1. **Update Content:** Modify the arrays in `Projects.jsx`, `Experience.jsx`, and `Education.jsx` with your own data.
2. **Change Images:** Replace `hero.jpg`, `about.JPG`, and project thumbnails in the `/public` folder.
3. **SEO:** Update the `<meta>` tags in `index.html` with your name and description.
4. **Colors:** Modify `tailwind.config.js` or `index.css` to change the primary accent color (currently Blue-600).

---

## 📬 Contact

**Rehan Sayyed**

* 📧 Email: [rehansayyed591@gmail.com](mailto:rehansayyed591@gmail.com)
* 💼 LinkedIn: [Rehan Sayyed](https://www.linkedin.com/in/rehan42/)
* 🐙 GitHub: [@rsayyed591](https://github.com/rsayyed591)

---

Made with ❤️ using React & Tailwind CSS.