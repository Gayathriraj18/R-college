import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
export const eventsList = [
    {
        id: 1,
        event: "Tech Fest 2024",
        description: "A grand event showcasing the latest in technology.",
        image: "/R-college/techfest.jpeg"
    },
    {
        id: 2,
        event: "Annual Sports Day",
        description: "A day filled with exciting sports activities.",
        image: "/R-college/sportday.jpeg"
    },
    {
        id: 3,
        event: "Cultural Fest",
        description: "Celebrating diverse cultures with music and dance.",
        image: "/R-college/culturalfest.jpeg"
    },
    {
        id: 4,
        event: "Science Fair",
        description: "Showcasing innovative science projects by students.",
        image: "/R-college/science.jpeg"
    }
];
