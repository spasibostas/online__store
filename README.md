
# Onlinestore
This is an e-commerce fullstack project that contains the following pages:
- Home
- Shopping cart 
- Login
- Registration
- User profile after registration
- Products by category and subcategory
- Product page

## Pages

[***Products***](https://github.com/spasibostas/online__store/blob/17f4c0cb90014bf214ef301f32ecd97d516bdc21/frontend/src/pages/Products/Products.jsx#L1) are presented in the men's/women's categories. They can be [sorted by clothing subcategories](https://github.com/spasibostas/online__store/blob/17f4c0cb90014bf214ef301f32ecd97d516bdc21/frontend/src/components/Accordion/Accordion.jsx#L1), [by price](https://github.com/spasibostas/online__store/blob/17f4c0cb90014bf214ef301f32ecd97d516bdc21/frontend/src/pages/Products/Products.jsx#L74-L96) (descending/ascending) 

The [***product***](https://github.com/spasibostas/online__store/blob/17f4c0cb90014bf214ef301f32ecd97d516bdc21/frontend/src/pages/Product/Product.jsx#L1) page contains an add/remove button from the cart. 

In the [***cart***](https://github.com/spasibostas/online__store/blob/17f4c0cb90014bf214ef301f32ecd97d516bdc21/frontend/src/pages/Cart/Cart.jsx#L1) you can [increase and decrease](https://github.com/spasibostas/online__store/blob/17f4c0cb90014bf214ef301f32ecd97d516bdc21/frontend/src/components/CountInCart/CountInCart.jsx#L1) the quantity of this product, delete the product, clear the cart and proceed to payment.

User [***profile***](https://github.com/spasibostas/online__store/blob/17f4c0cb90014bf214ef301f32ecd97d516bdc21/frontend/src/pages/UserProfile/UserProfile.jsx#L1) is available only after authorization implemented by jwt token. In the profile the user can change and save information about him/herself.


## Tech Stack

**Client:** *React*, *Redux*, *Redux Toolkit*

**Server:** *Strapi*, *SQLite*

*Stripe* is connected as a payment system. 

The *axios* library is used for HTTP requests.
## Demo

[LIVE DEMO](https://online-store-xsps.onrender.com)

