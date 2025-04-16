# URL Shortener

A modern URL shortening service built with Next.js, MongoDB Atlas, and Shadcn UI. This project allows users to create, manage, and track shortened URLs with a sleek and responsive user interface.

## Features

- **Shorten URLs**: Generate concise, shareable links from long URLs.
- **Responsive UI**: Clean, accessible, and mobile-friendly interface powered by Shadcn UI.
- **Persistent Storage**: Store URLs and metadata securely in MongoDB Atlas.

## Tech Stack

- **Framework**: Next.js 
- **Database**: MongoDB Atlas 
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS 
- **Deployment**: Vercel

## Prerequisites

Before running the project, ensure you have:

- Node.js (v18 or later)
- MongoDB Atlas account and a cluster set up
- npm or yarn installed

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**: Create a `.env.local` file in the root directory and add the following:

   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

   - Replace `your_mongodb_atlas_connection_string` with your MongoDB Atlas connection string.
   - Update `NEXT_PUBLIC_BASE_URL` to your production domain when deploying.

4. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open http://localhost:3000 in your browser to see the app.

## Usage

- **Shorten a URL**: Enter a long URL in the input field on the homepage and click "Shorten". You'll receive a shortened URL.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, open an issue on GitHub or reach out via abiyhailu120@gmail.com.
