# Copilot Instructions for Portfolio App

## Project Overview
- This is a React + Vite portfolio application, based on a Figma design: https://www.figma.com/design/MdgkOYdDbltDYCUkMAZOVH/Portfolio-App
- Main entry points: `src/App.tsx`, `src/main.tsx`
- UI components are organized under `src/components/` and `src/components/ui/`
- Global styles: `src/styles/globals.css`, `src/index.css`
- Public assets: `public/images/`, `public/CNAME`

## Developer Workflows
- Install dependencies: `npm i`
- Start development server: `npm run dev`
- No test scripts or test folders detected; focus is on UI and static content
- For debugging, use browser dev tools and Vite's hot reload

## Code Structure & Patterns
- Each major section (About, Contact, Experience, Projects, Skills) is a separate component in `src/components/`
- UI primitives (buttons, cards, dialogs, etc.) are in `src/components/ui/` and follow a modular, reusable pattern
- Fallback image logic is in `src/components/figma/ImageWithFallback.tsx`
- Guidelines and attributions are documented in `src/guidelines/Guidelines.md` and `src/Attributions.md`
- Minimal use of external state management; most state is local to components

## Conventions & Integration Points
- Use TypeScript for all source files (`.tsx`, `.ts`)
- Follow the Figma design closely for layout and styling
- Prefer composition and props for component extensibility
- Static assets (images, CNAME) are served from `public/`
- No backend/API integration; all data is static or hardcoded

## Examples
- To add a new section, create a component in `src/components/` and import it in `App.tsx`
- To add a new UI primitive, place it in `src/components/ui/` and document usage via comments
- For global styles, update `src/styles/globals.css`

## References
- Key files: `src/App.tsx`, `src/components/ui/`, `src/styles/globals.css`, `README.md`
- For design reference, see the linked Figma file

---
For questions or unclear patterns, review `README.md` and `Guidelines.md` or ask for clarification.
