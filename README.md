# 🧙‍♂️ D&D Character Lore Generator

A lightweight web app that generates unique, lore-rich backstories for Dungeons & Dragons characters.  
Choose your race, class, personality traits, and story themes — or leave them random — and let the generator create your hero’s journey.

---

## 🎯 Project Overview

The **D&D Character Lore Generator** is designed as a creative storytelling assistant for players, Dungeon Masters, or worldbuilders who want fast, inspiring character ideas.

It’s built using **HTML**, **CSS**, and **JavaScript**, focusing on simplicity, modular logic, and clean UI design.  
This project also serves as a refresher in web fundamentals — DOM manipulation, event handling, and dynamic content rendering.

---

## 🧩 Features

### Core Features (v1)
- Dropdown selections for:
  - Race (Human, Elf, Dwarf, Tiefling, etc.)
  - Class (Wizard, Rogue, Cleric, etc.)
  - Background (Soldier, Noble, Acolyte, etc.)
  - Personality traits and moral themes
- Randomization for any blank fields
- One-click **“Generate”** button that builds a custom backstory
- Clean display area for generated results
- Fully functional without any backend or setup

### Stretch Features (planned)
- “Copy to Clipboard” and “Download as .txt”
- Multiple lore styles (short summary / detailed backstory)
- Thematic sliders like **Corruption**, **Tragedy**, and **Destiny**
- Dark fantasy UI mode with custom fonts and parchment textures
- Save favorite stories locally (via localStorage)

---

## 🧠 How It Works

1. The user opens the page and selects any number of character traits.  
2. Clicking **Generate Backstory** triggers a script that:
   - Reads form values  
   - Randomizes unfilled fields  
   - Builds a story using modular sentence templates and fragments  
3. The generated story appears instantly on the page, styled in a readable fantasy card format.  

Example output:
> *A quiet Half-Elf Ranger raised among ruins, haunted by echoes of a forgotten order. After losing a mentor to dark magic, they now travel to uncover the truth hidden beneath ancient stone.*

---

## 💻 Tech Stack

| Layer | Technology |
|:------|:------------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Styling | Responsive Flexbox layout, fantasy color palette |
| Data | Arrays and objects for templates and randomization |
| Version Control | Git + GitHub |

---

## 📂 Project Structure

