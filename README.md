[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/aKz5HKN3)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=22712970&assignment_repo_type=AssignmentRepo)
React Component Refactor Assignment
===

**Objectives**

In this assignment, you'll build on your existing multi-page React project by:

1. Refactoring your shopping cart into a reusable component.
2. Enhancing the user experience by making the cart visible on every page (when items are present).
3. Creating a dedicated "Cart" page, accessible via the navigation bar.

---

**Project Context**

You've already built a multi-page React site using Vite, featuring pages like `Home`, `Products`, and `Profile`. The `ProductsPage` includes a functional shopping cart.

Your team loves the cart and wants to make it a bigger part of the site!

---

**Assignment Requirements**

Update your existing project to meet the following criteria:

1. **Extract the shopping cart into a separate component**

   * Move the cart logic (e.g., items, add/remove functions) and UI into `components/ShoppingCart.jsx`.
   * Use props and state as needed to keep data flowing.

2. **Show the cart summary on every page if it has items**

   * Import and display the cart in a consistent location on every page.
   * Only display it if the number of items is greater than **zero**.

3. **Create a new "Cart" page**

   * Add a `CartPage.jsx` component in the `pages/` folder.
   * Display the full cart (same or expanded version of the component).
   * Allow users to modify or remove items here.

4. **Add a link to the cart page in the navigation bar**

   * Update your `Header.jsx` to include a "Cart" link.
   * Clicking it should switch to the `CartPage`.

---

**Hints & Suggestions**

* **Cart state should be lifted** to the `App.jsx` level so it can be shared across pages and passed to the `ShoppingCart` component via props.
* If you’re using an array to store cart items, a simple `cartItems.length > 0` check can control visibility.
* You might need to **add a new `case`** to your `renderPage()` switch statement in `App.jsx` to support the cart route.
* Bonus!: Display the total number of items in the cart in the nav bar (e.g., "Cart (3)").

---

**Instructions**

1. Refactor your project files to support the above features.
2. Commit your changes in small, meaningful commits with clear messages.
3. Push your changes to your GitHub repository.
4. Optional but encouraged: Enable GitHub Pages and deploy your site again.

---

**Submission Instructions**

1. Push your updated React project to GitHub.
2. If you're using GitHub Pages, submit your deployed link.
3. Otherwise, just submit your GitHub repo link on Canvas.