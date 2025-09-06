# 🎬 MOVIENIGHT+GPT

A modern movie discovery app built with **Vite + React + TypeScript**, styled with **Tailwind CSS**, and powered by **React Router DOM**.  
Includes GPT-powered recommendations for a next-level browsing experience.  

---

## 🚀 Tech Stack
- ⚡ **Vite + React + TypeScript** – Fast and type-safe development
- 🎨 **Tailwind CSS** – Utility-first styling
- 🌐 **React Router DOM** – Client-side routing
- 🤖 **OpenAI API** – AI-powered movie suggestions

---

## ✨ Features

### 🔑 Authentication
- Login & Sign Up forms  
- Redirect to **BrowsePage** after successful authentication  

### 🎥 BrowsePage (after auth)
- **Header** with navigation  
- **Main Movie** section  
  - Background trailer video  
  - Movie title & description overlay  
- **Movie Suggestions**  
  - Multiple categorized **Movie Lists** (Trending, Popular, Top Rated, etc.)  

### 🤖 GPT Page
- Integrated with **OpenAI API**  
- Get personalized movie suggestions & answers  

---

## 📂 Project Structure
```bash
MOVIENIGHT-GPT/
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page-level components (SignIn, BrowsePage, GPTPage)
│   ├── routes/       # App routing setup
│   ├── App.tsx
│   └── main.tsx
├── public/           # Static assets
├── index.html
└── package.json
