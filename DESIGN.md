# ZuriLofts — Design System

This document is the single source of truth for visual design. All AI agents and developers must follow these guidelines when building any page or component.

---

## Brand Colors

| Role            | Name            | Hex       | Usage                                               |
|-----------------|-----------------|-----------|-----------------------------------------------------|
| Primary         | Deep Indigo     | `#262262` | Navbar, headings, footer, primary text, hero overlay|
| Accent          | Warm Bronze/Gold| `#C49A6C` | CTA buttons, highlights, badges, hover states, icons|
| Surface         | Silver Grey     | `#D9D9D9` | Section backgrounds, input fields, dividers, borders|
| Background      | White           | `#ffffff` | Page background, cards                              |
| Body Text       | Dark Charcoal   | `#1f2937` | Paragraphs, labels, secondary text                  |
| Muted Text      | Cool Grey       | `#6b7280` | Captions, placeholders, meta info                   |
| White Text      | White           | `#ffffff` | Text on indigo or bronze backgrounds                |

### Color Rules
- **Deep Indigo `#262262`** is the authority color — navbar, all headings, footer background, hero overlay tint, section titles.
- **Warm Bronze `#C49A6C`** is the action color — every CTA button, hover state, active nav indicator, badge, price highlight, and icon accent uses bronze.
- **Silver Grey `#D9D9D9`** is the neutral surface — alternate section backgrounds, input borders, card dividers, skeleton loaders.
- **White** is the default page and card background — keeps the layout breathing.
- Never place bronze text on white — contrast is low. Use indigo or charcoal for text on light backgrounds.
- Bronze buttons always use indigo (`#262262`) or white text depending on button size — never charcoal.
- Deep indigo and bronze can be paired directly (e.g. indigo footer with bronze links/icons).

---

## Typography

### Font Stack
```
Primary:   'Inter', system-ui, sans-serif
Fallback:  Helvetica, Arial, sans-serif
```

### Scale

| Element          | Size       | Weight | Color          | Notes                          |
|------------------|------------|--------|----------------|--------------------------------|
| Hero Heading     | 3rem–4rem  | 800    | White          | On dark/blurred image overlay  |
| Section Heading  | 2rem–2.5rem| 700    | Navy `#1e3a8a` | Left-aligned or centered       |
| Card Title       | 1.125rem   | 600    | Charcoal       |                                |
| Body Text        | 1rem       | 400    | Charcoal       | Line height 1.6                |
| Muted / Caption  | 0.875rem   | 400    | Cool Grey      |                                |
| Price / Stat     | 1.25rem    | 700    | Charcoal       | Paired with a small label above|
| Button Label     | 0.9375rem  | 600    | Navy or White  | Depends on button variant      |
| Nav Links        | 0.9375rem  | 500    | Navy           | Hover → Gold underline         |

---

## Spacing System

Use multiples of 4px (Tailwind's default scale).

| Token  | Value  | Usage                              |
|--------|--------|------------------------------------|
| xs     | 4px    | Icon gap, tight inline spacing     |
| sm     | 8px    | Internal card padding, tag gap     |
| md     | 16px   | Component padding, input padding   |
| lg     | 24px   | Card padding, section inner gap    |
| xl     | 40px   | Section vertical padding (top/bot) |
| 2xl    | 64px   | Between major page sections        |
| 3xl    | 96px   | Hero padding                       |

Section padding: `py-16` (64px) on desktop, `py-10` (40px) on mobile.

---

## Layout

- **Max content width:** `1280px` centered with `mx-auto px-6`
- **Grid:** 12-column conceptual grid; use Tailwind `grid-cols-3` for card grids, `grid-cols-2` for split layouts
- **Sidebar split:** 40% text / 60% image (or image grid) — as seen in the features section
- **Card grid:** 3 columns desktop → 2 tablet → 1 mobile

---

## Components

### Navbar
- White background with a subtle bottom border (`border-b border-gray-200`)
- Logo: Gold icon + Navy bold wordmark
- Nav links: Navy, `font-medium`, hover state → gold underline
- Right side: outlined navy button ("Sign In") + solid gold button ("Get It Now")
- Sticky on scroll with `shadow-sm`
- Height: `64px`

### Hero Section
- Full-width photographic background (property exterior, dusk/golden hour preferred)
- Dark overlay: `bg-black/40` for text legibility
- Centered content: large white heading + short white subtext
- Search bar: white pill-shaped input, gold "Search" button on the right
- Search bar width: max `680px`, centered

### Search Bar
- Background: White `#ffffff`
- Border radius: `9999px` (fully rounded pill)
- Padding: `px-5 py-3`
- Left icon: magnifying glass in gold or grey
- Button: Gold background, navy/dark text, rounded-full, `px-6 py-3`
- Box shadow: `shadow-lg`

### Section: Feature Grid (Cards)
- White background section
- Left: large bold heading + body text + gold CTA button
- Right: 2×3 grid of property category cards
- Each card: rounded image top, label below, subtle hover shadow
- Card border: `border border-gray-200`, `rounded-xl`

### Property Card
- White background, `rounded-2xl`, `shadow-md hover:shadow-lg`
- Image: top of card, `aspect-video`, `object-cover`, `rounded-t-2xl`
- Price stats row: 3 columns (each with a label and bold value)
- Gold `+` floating action button on image corner
- Hover: slight lift (`hover:-translate-y-1 transition-all`)

### Buttons

| Variant        | Background | Text       | Border         | Hover              |
|----------------|------------|------------|----------------|--------------------|
| Primary (CTA)  | Gold       | Navy       | None           | Gold-600 darken    |
| Secondary      | Transparent| Navy       | 2px Navy       | Navy bg, white text|
| Ghost          | Transparent| Gold       | None           | Gold underline     |

All buttons: `rounded-full`, `px-6 py-2.5`, `font-semibold`, `transition-all`

### Footer
- Navy background `#1e3a8a`
- White text for links and headings
- Gold for link hover states and logo accent
- Minimal: copyright left, social icons right

---

## Imagery Style
- **Real estate photography:** exterior shots of modern homes, warm lighting, dusk/golden hour
- **Mood:** aspirational, warm, trustworthy
- **Overlay:** always use a dark overlay on hero images for text legibility
- **Aspect ratios:** hero = `16:9` or full viewport height; cards = `4:3` or `16:9`
- **No stock illustrations** — photos only

---

## Shadows & Radius

| Element        | Radius      | Shadow          |
|----------------|-------------|-----------------|
| Cards          | `rounded-2xl` | `shadow-md`   |
| Buttons        | `rounded-full`| None           |
| Input / Search | `rounded-full`| `shadow-lg`   |
| Modals         | `rounded-2xl` | `shadow-xl`   |
| Navbar         | None          | `shadow-sm`   |

---

## Motion / Transitions
- All interactive elements: `transition-all duration-200`
- Card hover: `hover:-translate-y-1 hover:shadow-lg`
- Button hover: `hover:opacity-90` or darken by one shade
- No heavy animations — keep it fast and professional

---

## Do's and Don'ts

| Do                                              | Don't                                         |
|-------------------------------------------------|-----------------------------------------------|
| Use gold exclusively for actions and highlights | Use gold as a background for large sections   |
| Keep section backgrounds white or light grey    | Mix many background colors in one section     |
| Use navy for all headings and authority text    | Use black (`#000`) — use charcoal instead     |
| Maintain generous whitespace between sections   | Crowd elements together                       |
| Use rounded-full for all buttons and inputs     | Use squared or slightly-rounded buttons       |
| Lead with large bold property photography       | Use illustrations or abstract graphics        |
