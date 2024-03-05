# Using Navbar

## Instructions

1. We have some HTML in place for a navbar but we have to add some classes to make it a responsive Bootstrap navbar component.
<br>
Use the comments to locate the navbar component. The `<nav>` already has two classes for styling. You will have to add two more classes: `"navbar"` and `"navbar-expand-sm"`.
<br>
2. Under the opening `<nav>` tag, add an `<a>` element with a class of `"navbar-brand"`.
<br>
Then copy and paste the following `<img>` to nest inside the `<a>` element:

```html
<img src="./images/logo.png" alt="Gloria's Gardening Logo" height="30">
```

3. The `<button>` and the collapsible `<div>` is already included, but we still need to make the `<ul>` and accompanying `<li>` and `<a>` elements into a nav component.

    - Assign the `<ul>` a class of `"navbar-nav"`
    - Assign all the `<li>` elements a class of `"nav-item"`
    - Assign all the `<a>` elements a class of `"nav-link"`

4. Time to highlight the current page using the `"active"` class.
<br>
Add the `"active"` class to the first `<li>` element.
<br>
Notice after you add the change that the "Home" text has a subtle styling difference compared to the other two links in the navbar.