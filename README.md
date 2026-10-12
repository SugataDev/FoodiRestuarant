# 🍽️ Foodi - Dive Into Delights

A modern, high-performance, and responsive food delivery and restaurant web application built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Key Features

* **🎨 Modern Responsive UI:** Clean design matching modern food delivery platforms with custom brand colors, smooth transitions, and mobile-first responsiveness.
* **🧩 Component-Driven Architecture:** Modular React architecture utilizing reusable components driven by dynamic props.
* **🔍 Real-Time Live Search:** Search dishes by name with instant live filtering and a clear button.
* **🏷️ Dynamic Category Filtering:** Browse categories (*All Dishes*, *Main Dish*, *Breakfast*, *Dessert*, *Drinks*) with active category indicators.
* **🎠 Standout Dishes Carousel:** Smooth horizontal scrolling carousel with touch-snap support and left/right navigation chevrons.
* **❤️ Interactive Favorites / Wishlist:** Toggle dishes into favorites with animated heart feedback and toast alerts.
* **🛒 Slide-in Cart Drawer:**
  * Live quantity stepper (`+` and `-`).
  * Instant subtotal and delivery fee calculations (Free delivery for orders over $50).
  * Item removal with trash icon.
  * Interactive empty-cart state.
* **💳 Complete Checkout Modal:**
  * Delivery details form (Name, Phone, Address, Notes) with validation.
  * Payment method selector (*Cash on Delivery*, *Credit / Debit Card*, *Mobile Banking*).
  * Live order recap summary.
* **🧾 Order Confirmation Receipt Modal:**
  * Animated success checkmark.
  * Unique auto-generated Order ID (e.g. `#FD-48291`).
  * Estimated delivery time (25 - 35 mins) and order summary.
* **💬 Customer Testimonials Slider:** Rotating customer reviews with ratings and avatars.
* **🧭 Navigation ScrollSpy:** Header navigation links update actively as you scroll through sections.

---

## 🛠️ Tech Stack

* **Frontend Framework:** [React 18](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **CSS Framework:** [Tailwind CSS v3](https://tailwindcss.com/)
* **Icons:** [Font Awesome 6](https://fontawesome.com/)
* **Typography:** [Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins)

---

## 🧱 Reusable Card Components & Props

Per best practices, any card component used more than once is implemented as an independent reusable component receiving dynamic data via props:

| Reusable Component | Location | Description & Props Accepted |
| :--- | :--- | :--- |
| **`FoodCard`** | `src/components/FoodCard.jsx` | Card for each dish in the menu carousel.<br>• **Props:** `id`, `name`, `category`, `price`, `rating`, `description`, `image`, `onAddToCart`, `isLiked`, `onToggleLike` |
| **`CategoryCard`** | `src/components/CategoryCard.jsx` | Category selection button in the popular categories grid.<br>• **Props:** `category`, `title`, `count`, `icon`, `isActive`, `onClick` |
| **`FloatingCard`** | `src/components/FloatingCard.jsx` | Floating stat card positioned over the hero plate image.<br>• **Props:** `title`, `subtitle`, `rating`, `image`, `positionClass` |
| **`ServiceCard`** | `src/components/ServiceCard.jsx` | Feature card showcasing restaurant services & catering.<br>• **Props:** `icon`, `title`, `description` |
| **`CartItemCard`** | `src/components/CartItemCard.jsx` | Individual product card inside the slide-in cart drawer.<br>• **Props:** `item`, `onIncreaseQty`, `onDecreaseQty`, `onRemove` |

---

## 📂 Project Directory Structure

```text
Foodi/
├── index.html                   # HTML entry point with font links
├── package.json                 # Project dependencies & npm scripts
├── vite.config.js               # Vite configuration with React plugin
├── tailwind.config.js           # Tailwind theme & color customizations
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Project documentation
├── legacy_backup/               # Backup of initial vanilla HTML/CSS/JS files
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Main application state & composition
    ├── index.css                # Tailwind directives & custom keyframes
    ├── data/
    │   └── foodData.js          # Mock data (dishes, categories, services, reviews)
    └── components/
        ├── Navbar.jsx           # Header with live search & cart counter
        ├── Hero.jsx             # Hero banner with floating cards
        ├── FloatingCard.jsx     # Reusable Floating Card component
        ├── Categories.jsx       # Category filter section
        ├── CategoryCard.jsx     # Reusable Category Card component
        ├── FoodMenu.jsx         # Standout dishes carousel
        ├── FoodCard.jsx         # Reusable Food Card component
        ├── Testimonials.jsx     # Chef profile & customer reviews slider
        ├── Services.jsx         # Culinary journey & services grid
        ├── ServiceCard.jsx      # Reusable Service Card component
        ├── Footer.jsx           # Footer with links and contact info
        ├── CartDrawer.jsx       # Slide-in shopping cart drawer
        ├── CartItemCard.jsx     # Reusable Cart Item component
        ├── CheckoutModal.jsx    # Checkout details & payment modal
        ├── SuccessModal.jsx     # Order confirmation receipt modal
        └── Toast.jsx            # Non-blocking animated toast notification
```

---

## 🏁 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (version 18 or later recommended)
* `npm` or `yarn`

### Installation

1. Open your terminal in the project directory:
   ```bash
   cd "g:\MERN 2601\Foodi"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Building for Production

Compile and bundle the production build into the `dist/` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📄 License

This project is licensed under the MIT License. Feel free to use and customize it for your portfolio or restaurant projects.

