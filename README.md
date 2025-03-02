# Uttara Hotel and Restaurant Website
https://uttarahotelandresturant.netlify.app/

A modern, responsive website for Uttara Hotel and Restaurant built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern UI Design**: Clean and elegant design with attention to detail
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Smooth Animations**: Page transitions and UI animations using Framer Motion
- **Interactive Components**: Interactive UI elements for better user experience
- **Form Validation**: Client-side form validation for contact and reservation forms
- **Toast Notifications**: Feedback system for user actions

## Pages

- **Home**: Landing page with hero section, features, and highlights
- **Accommodations**: Room listings with filtering options
- **Dining**: Restaurant information and menu highlights
- **Facilities**: Hotel amenities and services
- **Gallery**: Photo gallery with lightbox
- **Contact**: Contact information and form
- **Reservations**: Booking form (under construction)

## Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: Static typing for better code quality
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Router**: Routing library for React
- **React Icons**: Icon library for React

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/uttara-hotel.git
cd uttara-hotel
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
uttara-hotel/
├── public/              # Static assets
├── src/                 # Source files
│   ├── components/      # Reusable components
│   │   ├── layout/      # Layout components
│   │   ├── ui/          # UI components
│   │   ├── sections/    # Page sections
│   │   └── utils/       # Utility components
│   ├── context/         # Context providers
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Page components
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Future Enhancements

- **Booking System**: Implement a full booking system with availability calendar
- **User Authentication**: Add user accounts for managing reservations
- **Payment Integration**: Integrate payment gateways for online booking
- **Multilingual Support**: Add support for multiple languages
- **Reviews and Ratings**: Allow guests to leave reviews and ratings
- **Admin Dashboard**: Create an admin dashboard for managing content

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
