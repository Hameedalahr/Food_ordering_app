# 🍔 Food Delivery App

A modern, dynamic Food Delivery Application built using **React** and **Parcel**, integrating **live Swiggy APIs** to provide real-time restaurant and menu data. This project was developed by **Abdul Hameed Syed** as a part of continuous learning and practice in frontend development, with a strong emphasis on performance optimization, dynamic data handling, and automated testing.

---

## 📌 Table of Contents

- [🚀 Live Demo](#-live-demo)
- [📸 Screenshots](#-screenshots)
- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📡 API Integration](#-api-integration)
- [🧪 Testing](#-testing)

---

## 🚀 Live Demo

https://foooddeliveryy.netlify.app/

Deployed version will be hosted soon using platforms like Netlify or Vercel.

---

## 📸 Screenshots

| Home Page | Restaurant Menu | Cart Page |
|----------|------------------|-----------|
| ![Home](https://github.com/Hameedalahr/Food_ordering_app/blob/main/Restaurant%20Homepage.png?raw=true) | ![Menu](https://github.com/Hameedalahr/Food_ordering_app/blob/main/Restaurant%20Menu.png?raw=true) | ![Cart](https://github.com/Hameedalahr/Food_ordering_app/blob/main/Restaurant%20Cart.png?raw=true) |

---

## ✨ Features

- ⚡ **Built using Parcel bundler** for faster builds and more control.
- 🔄 **Live Data Integration** using Swiggy's real-time public APIs.
- 🧭 Clean and dynamic routing using **React Router**.
- 🛒 Shopping cart functionality with add/remove items.
- 🔍 Restaurant search functionality.
- 🧪 **Unit and Integration Testing** using Jest and React Testing Library.
- ✅ No static or hardcoded data – fully real-time!
- 🎨 Responsive design across all device sizes.
- 🌐 Optimized for performance and SEO using code splitting and lazy loading.

---

## 🛠 Tech Stack

| Category      | Tech Used                    |
|---------------|------------------------------|
| Language      | JavaScript (ES6+)            |
| Framework     | React                        |
| Bundler       | Parcel                       |
| Styling       | CSS     |
| Routing       | React Router DOM             |
| Testing       | Jest, React Testing Library  |
| API Source    | Swiggy API (Unofficial)      |
| Version Control | Git + GitHub               |

---

## 📡 API Integration

This app fetches live data from **Swiggy’s public APIs** (through an accessible proxy or service) to populate restaurant listings and menus in real-time. It ensures the data is never static or mocked.

### Endpoints Used:

- Restaurant List API
- Restaurant Details API
- Image CDN integration for restaurant images

> **Note**: Some APIs may require headers or tokens if Swiggy updates its policy. Use a proxy or middleware to handle CORS issues in local development.

---

## 🧪 Testing

This project includes **comprehensive unit and component tests**.

### Testing Stack:

- **Jest**: Test runner and assertions
- **React Testing Library**: DOM-based testing for React components

### Test Coverage:

- ✅ Component rendering
- ✅ API data fetching
- ✅ User interactions (click, add to cart, etc.)
- ✅ Edge case validations

To run tests:

```bash
npm run test
