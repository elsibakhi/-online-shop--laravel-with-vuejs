# 🛍️ Multi-Vendor Ecommerce Platform

A **fully-featured multi-vendor ecommerce web application** built using **Laravel**, **Vue 3**, **Inertia.js**, and a rich set of modern frontend & backend tools.

This project is a showcase of my accumulated experience as a full-stack developer, featuring modular architecture, real-time interactivity, custom user roles, and support for both traditional checkout and digital wallet funding.

---

## 🚀 Features

### 👥 User Roles

- **Admin**:
  - Manage Categories and Subcategories
  - Create, Update, Delete Tags
  - View financial statistics

- **Vendor**:
  - Add products for sale
  - Manage own listings

- **Customer**:
  - Browse and purchase products
  - Pay via internal balance or directly via Stripe (PayPal coming soon)
  - Fund balance via Stripe (PayPal and crypto to be added)
  - Add items to cart and complete checkout
  - Create posts and mention products or users
  - Comment and like posts
  - Receive real-time notifications (likes, comments, mentions)

---

## 🛠️ Technologies Used

### Backend (Laravel)

- **Modular architecture** using [`nwidart/laravel-modules`](https://github.com/nWidart/laravel-modules)  
  Modules: `Admin`, `Vendor`, `Customer`, `Finance`
- **Service & Repository Pattern** for business logic separation
- **Action Pattern** for complex operations
- **Authentication & Authorization** using Laravel policies and guards
- **Laravel Storage (local)** for file uploads (S3 planned)
- **Session & Cache** planned to use **Redis**
- **Real-time features** powered by **Laravel Reverb**
- **PDF Generation** using [`barryvdh/laravel-dompdf`](https://github.com/barryvdh/laravel-dompdf)
- **Email Notifications** using **Mailtrap** (production-ready setup planned)
- **Precognitive validation** with Laravel Precognition
- **Auction system** (coming soon): Bid-based product sales scheduled by date/time, using wallet balance.

### Frontend (Vue 3 + Inertia.js)

- **Component libraries**: 
  - [`shadcn-vue`](https://github.com/shadcn-ui/ui)  
  - [`PrimeVue`](https://primevue.org/)
- **State management**: [`Pinia`](https://pinia.vuejs.org/)
- **Routing**:  
  - [`Ziggy`](https://github.com/tighten/ziggy) for Laravel route access in JS  
  - [`Wayfinder`](https://github.com/dillionmegida/wayfinder) for internal navigation
- **Validation**:  
  - [`Zod`](https://github.com/colinhacks/zod)  
  - Laravel Precognition for frontend-backend sync
- **Rich post interactions**: Mentions, likes, comments, real-time updates
- **Cart system** with live updates and multi-payment support

---

## 📦 Planned Features

- PayPal integration for funding balance and checkout
- Crypto wallet funding (e.g., USDT)
- S3-based file storage
- Redis for session and caching
- Auction system for time-based bidding
- Admin dashboard with analytics

---

## 📁 Folder Structure

- `Modules/Admin`, `Modules/Vendor`, `Modules/Customer`, `Modules/Finance`
- `Actions/` - encapsulated business logic
- `Repositories/` - data access abstraction
- `Http/Controllers`, `Requests`, `Resources`, `Policies` – all organized per module

---

## 🧪 Demo Data (coming soon)

Seeders will be provided for:
- Products
- Tags / Categories / Subcategories
- Sample users (Admin, Vendor, Customer)

---

## 🧾 Billing & Invoices

- Customers can download invoice PDFs after each transaction.
- Transaction summaries are also sent via email.

---

## 📬 Notifications

Real-time notifications (via Laravel Reverb) for:
- New comments on posts
- Likes
- Mentions

---

## 📌 Project Goals

This project was created as a **learning showcase** to demonstrate real-world application of:

- Modular Laravel development
- Laravel + Inertia.js architecture
- Multi-role permissions and functionality
- Clean backend separation (Service, Repository, Actions)
- Advanced Vue.js patterns with state management and validation

---

## 📧 Contact

- 👤 **Baraa Kamel Elsibakhi**
- 📍 Gaza Strip, Palestine
- 📧 baraaelsibakhi@gmail.com
- 🔗 [GitHub](https://github.com/elsibakhi) | [LinkedIn](https://linkedin.com/in/baraa-elsibakhi)

---

## 🏷️ License

This project is open-source and available under the [MIT license](LICENSE).

