# 🌙 Night Tales — Bedtime Stories

A multimedia bedtime story website for children, featuring interactive Basque and Georgian folk tales with a magical firefly companion.

## ✨ Features

- **6 Illustrated Night Tales** with multi-language text beats:
  - **Basque Tales**:
    - *Ipurtargia eta Axeria* — The Firefly and the Fox
    - *Basajaunaren Oparia* — The Basajaun's Gift
    - *Ilargiaren Negar Malkoak* — The Moon's Teardrops
  - **Georgian Tales**:
    - *ირემი და მზე* — The Deer and the Sun
    - *ოქროს ბროწეული* — The Golden Pomegranate
    - *ციკარილას ვარსკვლავი* — The Tsikarila Star
- **Multi-language Support**: Easily switch interface, menu, and story text between **Euskara (Basque)**, **ქართული (Georgian)**, and **English** on-the-fly.
- **Persistent Book Menu**: Category accordions for Basque and Georgian tales slide out panels next to the main panel, always accessible when scrolling down.
- **Theme Selection**: Toggle between deep indigo Night Mode and warm cream Day Mode. Menu text color and readability optimize automatically.
- **Interactive Firefly**: Companion glow changes to a warm orange-yellow in Day Mode and orbits/wanders dynamically.
- **Twinkling Starfield**: Canvas background rendering animated star cycles.
- **Cinematic Layout**: Edge-to-edge widescreen (16:9) illustrations featuring smooth linear-gradient fade masks.
- **Forest Ambient Audio**: Ambient background loop control.
- **Clickable Rating System**: Rate each tale with stars at the end of the story.

## 🚀 How to Run Locally

Simply open `index.html` in any modern web browser or serve it using a local server (e.g. Python's `http.server` or VS Code Live Server extension).

## 📂 Project Structure

```
basque-night-tales/
├── index.html                  # Core webpage structure
├── README.md                   # Project documentation
├── assets/                     # All assets grouped cleanly
│   ├── css/
│   │   └── style.css           # Custom styles (transitions, Day Mode, full-bleed layout)
│   ├── js/
│   │   └── script.js           # Multi-language logic, tale datasets, theme & firefly animations
│   ├── audio/
│   │   └── audio.mp3           # Ambient forest sound loop
│   ├── Fonts/
│   │   ├── fonnts.com-Harri_Bold.otf # Stone-cut traditional Basque font for titles
│   │   └── Handcaps.otf              # Whimsical handwriting font for story text
│   └── images/
│       ├── illustrations.svg   # Vector illustration sheet
│       ├── backgrounds/        # Story and landing background SVGs
│       ├── Basajaun/           # Giant and Rabbit SVGs
│       └── firefly/            # Companion and Fox SVGs
```

## 📤 How to Upload to GitHub

Since this directory is initialized as a Git repository, you can push it to your GitHub profile:

### Option A: Using the Command Line
If you have Git installed, run the following commands in your terminal inside the project folder:

1. **Stage all files**:
   ```bash
   git add .
   ```
2. **Commit the changes**:
   ```bash
   git commit -m "Initialize project: add Georgian tales, theme toggle, and multilingual selection"
   ```
3. **Link to your GitHub repository**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```
4. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Option B: Using GitHub Desktop
1. Open the **GitHub Desktop** application.
2. Select **File > Add local repository...** and choose this project directory.
3. Commit the staged changes in the bottom-left panel.
4. Click **Publish repository** to upload it to your GitHub account.

### Option C: Using the GitHub Web Interface
1. Go to [github.com](https://github.com/) and create a new repository.
2. Click **uploading an existing file** on the setup page.
3. Drag and drop all project folders/files (except `.git`) directly into the browser and commit.

## 📋 Credits

- Forest ambient audio: [Freesound Community](https://freesound.org)
- Basque folk tales adapted for children
- Created as part of MFA Apollon Kutateladze program, 2nd Semester Multimedia
