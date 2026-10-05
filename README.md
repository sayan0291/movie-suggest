# Movie Suggest

Movie Suggest is a React movie discovery app built with Vite and Tailwind CSS. It shows popular movies from TMDB by default and lets users search for movies with a debounced search input.

## Features

- Browse popular movies from TMDB
- Search movies by title
- Debounced search to avoid unnecessary API calls
- Movie cards with poster, rating, language, and release year
- Loading and error states
- Responsive grid layout

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Axios
- React Use
- TMDB API

## Getting Started

### Prerequisites

- Node.js
- npm
- A TMDB API key

### Installation

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and add your TMDB API key:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal.

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint.

## Project Structure

```text
Movie_Suggest/
|-- public/
|   |-- BG.svg
|   |-- hero-img.png
|   |-- logo.svg
|   |-- No-Poster.png
|   |-- No-Poster-Card.png
|   |-- search.svg
|   `-- star.svg
|-- src/
|   |-- components/
|   |   |-- shared/
|   |   |   `-- Navbar.jsx
|   |   `-- ui/
|   |       `-- Search.jsx
|   |-- pages/
|   |   |-- Home.jsx
|   |   `-- MovieCard.jsx
|   |-- utils/
|   |   `-- api.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## API

The app uses the TMDB API from `src/utils/api.jsx`.

- Popular movies: `/discover/movie?sort_by=popularity.desc`
- Search movies: `/search/movie?query=...`

The API key is read from:

```js
import.meta.env.VITE_TMDB_API_KEY
```

## Notes

- Environment variables in Vite must start with `VITE_`.
- Keep your `.env` file out of version control.
- Poster images are loaded from TMDB using the `w500` image size.
