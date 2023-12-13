# E-Commerce Admin Dashboard
An intuitive and responsive admin dashboard for e-commerce businesses, built using modern technologies and best practices.

## Table of Contents:
1. [Technologies Used](#technologies-used)
2. [Installation and Setup](#installation-and-setup)
3. [Features](#features)
4. [License](#license)

## Technologies Used
- **Next.js:** A React framework with hybrid static & server rendering, intelligent bundling, route pre-fetching, and more.
- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A strict syntactical superset of JavaScript, adding optional static typing.
- **TailwindCSS:** A utility-first CSS framework for rapid UI development.
- **Clerk:** A comprehensive user management and authentication solution. [Clerk Site](https://clerk.com/)
- **Zod:** A TypeScript-first schema declaration and validation library. [Zod Documentation](https://zod.dev/)
- **Prisma:** An open-source database toolkit with an ORM for Node.js and TypeScript. [Prisma](https://prisma.com/)
- **PlanetScale:** A powerful, scalable, and resilient database platform built on MySQL and Vitess. [PlanetScale](https://planetscale.com/)
- **React Hot Toast:** A lightweight library for creating notifications in React applications. [React Hot Toast](https://react-hot-toast.com/)
- **Cloudinary:** A cloud-based media management and delivery platform. [Cloudinary](https://cloudinary.com/)

## Installation and Setup
1. Clone the repository:
    ```bash
    git clone [repository-link]
    ```
2. Navigate to the project directory and install dependencies:
    ```bash
    cd ecommerce-admin
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Features
### Responsive Design:
- Built with a mobile-first approach ensuring smooth performance across devices.

### Dark Mode:
- Provides enhanced readability in low-light environments.

### Authentication:
- Seamless authentication and user management with Clerk. [Clerk Documentation](https://docs.clerk.dev/)

### ModalProvider:
- A `ModalProvider` in `modal-provider.tsx` was created to avoid Hydration or asynchronization on server and client-side rendering. This prevents hydration errors when the server has no modal open, but the client does.

### Hook: use-origin:
- The `use-origin` hook was created to safely access the `window` object, as it does not exist in the server-side rendering of Next.js 13, only in the browser.

### Vercel Deployment:
- The application is deployed on Vercel. You can access it at [e-commerce-admin-seven-gilt.vercel.app](https://e-commerce-admin-seven-gilt.vercel.app/)

## License
[Your License Information Here]
