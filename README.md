# Walnut UI (React + TypeScript + Vite)

A crisp React dashboard showcasing voice agent analytics with simple Supabase CRUD, Tailwind styling, and Recharts visualizations.

## Features
- React 19 + TypeScript + Vite
- Tailwind-based theme (custom CSS variables)
- Charts with Recharts (Area + Pie)
- Simple Supabase CRUD: upsert per email, no auth
- Clean UI components (cards, inputs, buttons)

## Tech Stack
- React, TypeScript, Vite
- Tailwind CSS
- Recharts
- Supabase JS
- Sonner (toasts)

## Getting Started
1. Install dependencies:
   ```bash
   pnpm install
   # or npm install / yarn
   ```
2. Create environment file:
   - Copy `.env.example` to `.env`
   - Fill in:
     ```env
     VITE_SUPABASE_URL=your-project-url
     VITE_SUPABASE_ANON_KEY=your-anon-key
     ```
3. Supabase table:
   - Create Table in Supabase SQL editor and run it.
   - This creates `user_analytics` with an `email` unique key and JSONB field `weekly_call_duration`.

## Scripts
- Dev: `pnpm/npm dev`
- Build: `pnpm/npm build`
- Preview: `pnpm/npm preview`
- Lint: `pnpm/npm lint`

## Project Structure
```
src/
  components/
    dashboard/
      AnalyticsDashboard.tsx      # main page logic
      CallDurationChart.tsx       # area chart (weekly durations)
      SentimentChart.tsx          # pie chart (issues breakdown)
      EditableChartForm.tsx       # edit and submit durations
      EmailModal.tsx              # capture email once
      navbar.tsx, footer.tsx, hero.tsx
  lib/supabase.ts                 # supabase client
  data/defaoutData.ts             # default dummy data
  types/Analytics.ts              # shared types
```

## Usage Flow (Simple CRUD)
- First time:
  1. Click "Use Data" in the form
  2. Enter your email in the modal
  3. App upserts current chart data to Supabase
- Subsequent edits:
  1. Change values in the form
  2. Click "Save Changes"
  3. A small top popup asks to confirm
  4. On confirm, app upserts to Supabase and updates the chart

Data is saved under your email in `user_analytics.weekly_call_duration`.


## Notes
- This demo intentionally avoids full auth; it uses email as a simple key for CRUD.
- For production, add proper RLS policies and authentication.

## License
MIT
