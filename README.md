# MERN Stack E-Commerce Platform
## LIVE LINK
https://clothes-shopping-beta.vercel.app/

## Overview
This is a fully functional E-Commerce platform built using the MERN (MongoDB, Express, React, Node.js) stack. The application features user authentication, product management, a shopping cart, wishlist functionality, payment integration with Razorpay, and a dark mode for enhanced user experience.


## Features
### Users
- Browse and search for products.
- Add and remove products from the wishlist.
- Add and remove products from the cart.
- Check delivery status.
- Secure checkout with Razorpay.
- Toggle dark mode for a better UI experience.

### Admin
- Perform CRUD operations on products.
- Manage users and their orders.
- Oversee transactions and delivery status.

## Tech Stack
- **Frontend**: React.js, Context Api
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT-based authentication
- **Payment Gateway**: Razorpay
- **State Management**: Context Api
- **UI Theme**: Light/Dark Mode toggle

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/thahsree/clothes-shopping.git
  
   ```
2. Install dependencies for both frontend and backend:
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `backend` directory and add:
     ```env
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_jwt_secret
     RAZORPAY_KEY_ID=your_razorpay_key
     RAZORPAY_SECRET=your_razorpay_secret
     ```
4. Run the backend server:
   ```sh
   cd backend
   npm start
   ```
5. Run the frontend:
   ```sh
   cd frontend
   npm start
   ```
6. Open the application in your browser at `http://localhost:3000`


## Payment Integration
- Razorpay is integrated for secure transactions.
- After checkout, users are redirected to a confirmation page.

## Dark Mode
- Users can toggle between light and dark modes for an enhanced UI experience.

