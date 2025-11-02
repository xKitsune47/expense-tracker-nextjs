# Expense Tracker

An expense tracking application built with **Next.js** and **TypeScript**, featuring server-side rendering and API routes. The app uses **Prisma ORM** with **PostgreSQL** for data management, **NextAuth.js** for GitHub OAuth authentication, and **Recharts** for data visualizations. Styling is handled with **Tailwind CSS**.

## Tech Stack

**Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS  
**Backend:** Next.js API Routes, Prisma ORM, PostgreSQL  
**Authentication:** NextAuth.js (GitHub OAuth)  
**Visualization:** Recharts  
**Icons:** Heroicons

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
# Create .env.local with your GitHub OAuth credentials and database URL

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
