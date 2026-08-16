# HackSJSU Website

A fully config-driven hackathon website for HackSJSU — co-hosted by San Jose State University and HP Inc.

## 🗂 Project Structure

```
hacksjsu/
├── public/                    ← All website files (deployed to Firebase)
│   ├── config.js              ← ⭐ MASTER CONFIG — edit this to update everything
│   ├── styles.css             ← Global design system (reads from config.js)
│   ├── main.js                ← Shared JavaScript — nav, footer, renderers
│   │
│   ├── index.html             ← Homepage
│   ├── about.html             ← About page
│   ├── schedule.html          ← Event schedule
│   ├── challenges.html        ← Hackathon tracks / challenge statements
│   ├── prizes.html            ← Prize details
│   ├── judges.html            ← Judges panel (images auto-loaded from config)
│   ├── mentors.html           ← Mentors page
│   ├── sponsors.html          ← Sponsors display + sponsorship tiers
│   ├── faq.html               ← FAQ accordion
│   ├── register.html          ← Registration + Google Form link
│   ├── resources.html         ← Participant resources & tools
│   ├── contact.html           ← Contact form & info
│   │
│   └── assets/
│       ├── judges/            ← Judge photos go here (e.g., john_doe.jpg)
│       │   └── placeholder.jpg
│       ├── mentors/           ← Mentor photos go here
│       │   └── placeholder.jpg
│       └── sponsors/          ← Sponsor logos go here (e.g., hp.png)
│           └── placeholder_sponsor.png
│
├── firebase.json              ← Firebase Hosting configuration
├── .firebaserc                ← Firebase project ID
└── README.md                  ← This file
```

---

## ⚙️ How to Update Content

**Everything is controlled from `public/config.js`.** You never need to touch the HTML files.

### Update Event Info
```js
// In config.js → CONFIG.event
event: {
  name:            "HackSJSU",           // ← Change event name
  date:            "2026-09-02T08:00:00", // ← Change event date (ISO format)
  displayDate:     "September 2, 2026",   // ← Human-readable date
  location:        "San Jose State University",
  registrationUrl: "https://forms.google.com/YOUR_FORM_ID", // ← Google Form
  status:          "registration_open",  // ← Update status as event progresses
}
```

### Change Colors
```js
// In config.js → CONFIG.theme.colors
theme: {
  colors: {
    primary:   "#0055A2",  // ← SJSU Blue — change to update whole site color
    secondary: "#E5A823",  // ← SJSU Gold
    bgDark:    "#060D1A",  // ← Page background
    // ...
  }
}
```

### Add a Judge
1. Place their photo in `public/assets/judges/` (e.g., `jane_smith.jpg`)
2. Add to `config.js`:
```js
judges: [
  {
    name:      "Jane Smith",
    title:     "VP of Engineering",
    company:   "HP Inc.",
    imageFile: "jane_smith.jpg",  // ← Must match filename exactly
    bio:       "Jane leads HP's AI division...",
    linkedin:  "https://linkedin.com/in/janesmith",
  },
  // ...
]
```

### Add a Sponsor
1. Place their logo in `public/assets/sponsors/` (e.g., `google.png`)
2. Add to the appropriate tier in `config.js`:
```js
sponsors: {
  gold: [
    {
      name:      "Google",
      imageFile: "google.png",  // ← Must match filename exactly
      url:       "https://google.com",
    }
  ],
}
```

### Update Event Status
Change `CONFIG.event.status` to one of:
| Value | Displays As |
|-------|-------------|
| `"coming_soon"` | Coming Soon |
| `"registration_open"` | 🟢 Registration Open |
| `"registration_closed"` | Registration Closed |
| `"in_progress"` | 🔴 Hackathon Live! |
| `"judging"` | ⚖️ Judging in Progress |
| `"concluded"` | 🏁 Event Concluded |

---

## 🔥 Firebase Hosting — Deploy Steps

### Prerequisites
- Node.js installed
- Google account with a Firebase project

### Step 1: Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add Project"** → name it (e.g., `hacksjsu-2026`)
3. Disable Google Analytics (optional) → Create project

### Step 2: Install Firebase CLI
```bash
npm install -g firebase-tools
```

### Step 3: Login to Firebase
```bash
firebase login
```
This opens a browser to authenticate with your Google account.

### Step 4: Set Your Project ID
Edit `.firebaserc` and replace `YOUR_FIREBASE_PROJECT_ID` with your actual project ID:
```json
{
  "projects": {
    "default": "hacksjsu-2026"
  }
}
```

You can find your project ID in the Firebase Console under **Project Settings**.

### Step 5: Initialize (first time only)
```bash
cd /path/to/hacksjsu
firebase init hosting
```
When prompted:
- Select **"Use an existing project"** → choose your project
- Set public directory to: `public`
- Single-page app: **No**
- GitHub auto-deploys: **No** (or Yes if you want CI/CD)

### Step 6: Deploy!
```bash
firebase deploy
```

Your site will be live at:
`https://YOUR_PROJECT_ID.web.app`
or your custom domain if configured.

### Subsequent Deploys
After making changes to content or config:
```bash
firebase deploy
```
That's it. Changes go live in ~30 seconds.

---

## 🌐 Custom Domain (Optional)
1. In Firebase Console → **Hosting** → **Add custom domain**
2. Enter your domain (e.g., `hacksjsu.sjsu.edu`)
3. Follow the DNS verification steps
4. Wait for SSL certificate provisioning (~24 hours)

---

## 🖼 Image Guide

### Judge Photos
- **Location**: `public/assets/judges/`
- **Format**: JPG or PNG recommended
- **Size**: 400×400px minimum (square ratio looks best)
- **Naming**: Use lowercase with underscores: `jane_smith.jpg`
- **In config.js**: `imageFile: "jane_smith.jpg"`
- **Missing image**: Automatically shows `placeholder.jpg`

### Sponsor Logos
- **Location**: `public/assets/sponsors/`
- **Format**: PNG with transparent background preferred
- **Size**: At least 300px wide
- **Naming**: `hp.png`, `sjsu.png`, `company_name.png`
- **In config.js**: `imageFile: "hp.png"`

---

## 📋 Pre-Event Checklist

- [ ] Update `CONFIG.event.name` with final event name
- [ ] Update `CONFIG.event.date` and `CONFIG.event.displayDateRange`
- [ ] Set `CONFIG.event.registrationUrl` to your Google Form link
- [ ] Set `CONFIG.event.devpostUrl` to your Devpost page
- [ ] Set `CONFIG.event.discordUrl` to your Discord invite
- [ ] Add judge photos to `assets/judges/` and update `CONFIG.judges`
- [ ] Add mentor photos to `assets/mentors/` and update `CONFIG.mentors`
- [ ] Add sponsor logos to `assets/sponsors/` and update `CONFIG.sponsors`
- [ ] Update all social media links in `CONFIG.event.social`
- [ ] Update `CONFIG.event.status` as the event progresses
- [ ] Deploy with `firebase deploy`

---

## 🆘 Help

For questions: **hackathon@sjsu.edu**
