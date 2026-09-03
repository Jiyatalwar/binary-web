# Binary Web

Binary Web is a modern marketing website for Binary Global built with Next.js, React, TypeScript, and Tailwind CSS. The project presents the company’s solutions, services, industries, financing, resources, and contact information through a polished and responsive front end.

## Project Overview

This website is designed as a business landing and content site with:

- a responsive hero section and animated navigation
- dedicated pages for solutions, services, industries, financing, resources, about, and contact
- a homepage content management panel for editing key marketing sections
- a basic admin access flow for restricted content updates

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Supabase client integration for content persistence

## Main Features

### Public website
The public-facing experience includes:
- a sticky navbar with desktop and mobile navigation
- a video-backed hero section with rotating slides
- solution cards and section-based content for key business areas
- a footer with company and resource links

### Admin dashboard
The admin area allows authenticated users to update homepage content such as:
- hero titles and subtitles
- why-us content
- customer story section text
- contact section content

> The current admin setup is a simple client-side authentication flow and is intended for local/demo use. For production, it should be upgraded to a secure backend-based authentication system.

## Project Structure

```text
app/
  components/       # Reusable UI components
  about/            # About page
  admin/            # Admin login and dashboard
  contact/          # Contact page
  financing/        # Financing page
  industries/       # Industries page
  resources/        # Resources page
  services/         # Services page
  solutions/        # Solutions page
  page.tsx          # Homepage entry
lib/
  supabase/         # Content helpers and Supabase integration
public/             # Static assets such as logos and videos
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm or pnpm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Build for production

```bash
npm run build
```

### Lint the project

```bash
npm run lint
```

## Notes

- Homepage content is loaded from browser storage and can be edited through the admin panel.
- Static assets such as logos and videos are stored under the public folder.
- The site is built using the App Router structure in Next.js.

## Future Improvements

Possible enhancements include:
- replacing the hardcoded admin auth with a real backend authentication system
- storing admin content in a database rather than browser storage
- connecting more sections of the admin panel to real content models
- adding CMS-like editing for all website pages
