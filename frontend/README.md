# Daily Sweets System Frontend

This project is a React application powered by Vite. The frontend is designed for the Daily Sweets System, showcasing dessert products and allowing users to interact with the application through a shopping cart and checkout process.

## Prerequisites
- Node.js (LTS version recommended)
- npm (comes with Node.js)

## Project Setup and Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Development Server

To start the development server:
```bash
npm run dev
```
The app will be accessible at `http://localhost:5173`.

## Project Structure
- `src/` - Contains the source code files
  - `assets/` - Image and icon files
  - `components/` - Reusable components
  - `pages/` - Individual page components like Dashboard, Products, Basket, Checkout
- `public/` - Static assets
- `index.html` - Main entry HTML file
- `vite.config.js` - Vite configuration file

## Running a Production Build

To create a production build:
```bash
npm run build
```
The production-ready files will be available in the `dist` folder.

## Linting and Code Quality

The project uses ESLint for code quality. Run the linter using:
```bash
npm run lint
```

## Deploying the Application

You can deploy the project to any static hosting provider that supports serving static assets like:
- Vercel
- Netlify
- GitHub Pages

## License

This project is licensed under the MIT License.
