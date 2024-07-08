# Shopping List Webpage

This is a simple shopping list application built using  CSS and JavaScript. Clients can add items to the list, mark them as purchased, and clear the list.

## How to Use
#### Fork and clone the repository to your local repository the follow the steps
### Adding Items


- Use the input field at the middle of the page to enter the name of the item you want to add.
- Click the "Add Item" button or press Enter to add the item to the list.

### Marking Items as Purchased

- Each item in the list has a ``` Purchase ``` button.
- Clicking the ```Purchase``` button removes the item from the list.

### Clearing the List

- To remove all items from the list, click the ```Clear List``` button at the bottom of the list.

## Code Explanation

### HTML Structure(Using JavaScript to write HTML)

- The application consists of a header (`<header>`) with a title (`<h1>`), a main section (`<div id="shoppingList">`) for the shopping list, and a form (`<form>`) for adding items.
- An unordered list (`<ul>`) (`<ul id="itemList">`) is used to display the items dynamically.

### JavaScript Functionality

- **Adding Items**: The `addItemToList(itemAdds)` function creates a new `<li>` element for each item and appends it to the `<ul>` (`itemList`). Each `<li>` contains an item name and a `Purchase` button.
  
- **Marking Items as Purchased**: The `Purchase`  button is dynamically added to each item. When clicked, it removes the corresponding `<li>` from the `<ul>`.

- **Clearing the List**: The "Clear List" button removes all `<li>` elements from the `<ul>` (`itemList`).

## How to Run

- Simply open the `index.html` file in a web browser to run the application.

## Additional Notes

<!-- - This is a basic implementation to demonstrate CRUD (Create, Read, Update, Delete) operations in JavaScript. -->

## Authors

- [@nathanmwai](https://github.com/Nathan-Mwai) 
- [The Website](https://nathan-mwai.github.io/code_challenge_2_repeat/)




## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

