# E-Commerce Admin Dashboard
An intuitive and responsive admin dashboard for e-commerce businesses, built using modern technologies and best practices.

Table of Contents:

Technologies Used
Installation and Setup
Features
License
## Technologies Used
Next.js: A React framework with hybrid static & server rendering, intelligent bundling, route pre-fetching, and more.
React: A JavaScript library for building user interfaces.

TypeScript: A strict syntactical superset of JavaScript, adding optional static typing.

TailwindCSS: A utility-first CSS framework for rapid UI development.

Clerk: A comprehensive user management and authentication solution.
This is the Clerk site https://clerk.com/  for you to check out.

Zod: Zod is a TypeScript-first schema declaration and validation library. It’s powerful and flexible, allowing developers to create schemas using native TypeScript syntax, ensuring the validation of runtime data. With Zod, developers can validate and parse inputs, ensuring that the data conforms to predefined schemas, making the codebase more robust and error-resistant.
https://zod.dev/

Prisma: Prisma is an open-source database toolkit that includes an ORM (Object-Relational Mapper) for Node.js and TypeScript. Prisma simplifies database access, making it more secure, type-safe, and flexible. Developers can use Prisma to define their database schema, perform database queries, and manage their database migrations with ease. https://Prisma.com/

PlanetScale: PlanetScale is a database platform that’s built on MySQL and Vitess. It's designed to be powerful, scalable, and resilient, ensuring that databases can handle massive scales without compromising on performance or reliability. PlanetScale simplifies database operations, such as scaling and schema changes, making it a robust choice for businesses and developers looking for a high-performance database solution. https://planetscale.com/

React Hot Toast: is a lightweight library for creating notifications in React applications. It is easy to use and provides a variety of features, including:

Customizable appearance
Automatic positioning
Stacking support
Promise API
Accessibility support
React Hot Toast is a great choice for developers who want to add notifications to their React applications quickly and easily.

Cloudinary: is a cloud-based media management and delivery platform. It provides a wide range of features for developers to manage and deliver media assets, including images, videos, and audio files. Cloudinary also offers a variety of tools for transforming and optimizing media assets for different devices and platforms.

## Installation and Setup
Clone the repository:
bash
Copy code
git clone [repository-link]
Navigate to the project directory and install dependencies:

bash
Copy code
cd ecommerce-admin
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000.

## Features
### Responsive Design:
 Built with mobile-first approach ensuring smooth performance across devices.
### Dark Mode:
 Provides enhanced readability in low light environments.
### Authentication:
 Seamless authentication and user management with Clerk.
 Go to clerk.com for information on how to use Clerk.

Add the features bellow to the README.md. 
1- ModalProvider in modal-provider.tsx was created to avoid Hydration or asynchronization on server and client side rendering. 
(If ther server has no model open but the client does this will trigger a hydration error.)

### Hook use-orgin
This hook was created so we can safely access the window because the it does not exist in the Server side rendering of Next13, only in the browser. 