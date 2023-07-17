
# Onlinestore
This is an e-commerce fullstack project that contains the following pages:
- Home
- Shopping cart 
- Login
- Registration
- User profile after registration
- Products by categories and subcategories
- Product page

## Pages

[**Products**](https://github.com/spasibostas/online__store/blob/7bf684d799c8cf630355c747b580f09da25dd942/frontend/src/pages/Products/Products.jsx#L13) are presented in the men's/women's categories. They can be [sorted by clothing subcategories](https://github.com/spasibostas/online__store/blob/7bf684d799c8cf630355c747b580f09da25dd942/frontend/src/components/Accordion/Accordion.jsx#L10), [by price](https://github.com/spasibostas/online__store/blob/7bf684d799c8cf630355c747b580f09da25dd942/frontend/src/components/FilterPrice/FilterPrice.jsx#L5) and [by increasing and decreasing of price](https://github.com/spasibostas/online__store/blob/7bf684d799c8cf630355c747b580f09da25dd942/frontend/src/components/FilterSort/FilterSort.jsx#L4). [Pagination](https://github.com/spasibostas/online__store/blob/7bf684d799c8cf630355c747b580f09da25dd942/frontend/src/components/Pagination/Pagination.jsx#L5) is implemented to navigate through product pages.

The [**product**](https://github.com/spasibostas/online__store/blob/7bf684d799c8cf630355c747b580f09da25dd942/frontend/src/pages/Product/Product.jsx#L10) page contains an add/remove button from the cart. 

In the [**cart**](https://github.com/spasibostas/online__store/blob/75eb1a40ebc5a1e964a372bb9c3789b3770877f0/frontend/src/pages/Cart/Cart.jsx#L14) you can [increase and decrease](https://github.com/spasibostas/online__store/blob/7bf684d799c8cf630355c747b580f09da25dd942/frontend/src/components/CountInCart/CountInCart.jsx#L6) the quantity of this product, delete the product, clear the cart and proceed to payment.

User [**profile**](https://github.com/spasibostas/online__store/blob/7bf684d799c8cf630355c747b580f09da25dd942/frontend/src/pages/UserProfile/UserProfile.jsx#L8) available after sign in/sign up. JWT used for authorization. In the profile the user can change and save information about him/herself.

## Tech Stack

**Client:** *React*, *Redux*, *Redux Toolkit*

**Server:** *Strapi*, *SQLite*

*Stripe* is connected as a payment system. 

The *axios* library is used for HTTP requests.
## Demo

Since the hosting is free the first launch will take about two minutes.

[LIVE DEMO](https://online-store-xsps.onrender.com)

