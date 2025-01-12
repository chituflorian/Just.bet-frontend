# Next.js Starter Kit

This is a powerful Next.js starter kit with TypeScript, Tailwind CSS, and Shadcn UI components.

## Folder Structure

```
my-nextjs-project/
├── app/
│ ├── (auth)/
│ │ ├── login/
│ │ │ └── page.tsx
│ │ └── register/
│ │ └── page.tsx
│ ├── dashboard/
│ │ ├── page.tsx
│ │ └── layout.tsx
│ ├── api/
│ │ └── users/
│ │ └── route.ts
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── ui/
│ │ ├── Button.tsx
│ │ └── Card.tsx
│ ├── forms/
│ │ └── LoginForm.tsx
│ └── layouts/
│ ├── Header.tsx
│ └── Footer.tsx
├── lib/
│ ├── api.ts
│ └── utils.ts
├── hooks/
│ ├── useUser.ts
│ └── useAuth.ts
├── types/
│ ├── user.ts
│ └── api.ts
├── styles/
│ └── globals.css
├── public/
│ ├── images/
│ └── logo.svg
├── next.config.js
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `dev`: Run the development server
- `build`: Build the application for production
- `start`: Start the production server
- `lint`: Run ESLint
- `lint:fix`: Run ESLint and fix issues
- `format`: Run Prettier to format code
- `typecheck`: Run TypeScript compiler check

## Features

- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- ESLint and Prettier for code quality
- Husky for Git hooks
- Custom folder structure for better organization

## Customization

### Tailwind CSS

You can customize the Tailwind configuration in `tailwind.config.ts`.

### Components

Add new components in the `components` directory. Use the `ui` subdirectory for reusable UI components.

### Layouts

Create and modify layouts in the `components/layouts` directory.

### API Routes

Add API routes in the `app/api` directory.

### Environment Variables

Create a `.env.local` file in the root directory for local environment variables.

## Deployment

This project is ready to be deployed to platforms like Vercel or Netlify. Refer to their respective documentation for deployment instructions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
