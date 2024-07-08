// Create header element
const header = document.createElement('header');
document.body.append(header);

// Create h1 for the header
const h1 = document.createElement('h1');
h1.textContent = 'Shopping List';
header.append(h1);

// Create div for the shopping list
const shoppingList = document.createElement('div');
document.body.append(shoppingList);

// Create form for adding items
const form = document.createElement('form');
shoppingList.append(form);

// Create input field for item name
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter items to buy...');
form.append(input);

// Create submit button
const submitBtn = document.createElement('button');
submitBtn.textContent = 'Add Item';
form.append(submitBtn);

// Create list for displaying items
const itemList = document.createElement('ul');
shoppingList.append(itemList);

let shoppingItems = [];

// Function to add item to the list
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const itemName = input.value.trim();
  if (itemName) {
    addItemToList(itemName);
    input.value = '';
  }
});

// Function to add item to the list and array
function addItemToList(itemAdds) {
    // Add item to the array
    shoppingItems.push(itemAdds);
  
    const li = document.createElement('li');
    li.textContent = itemAdds;

  // Add button to mark item as purchased
  const purchaseBtn = document.createElement('button');
  purchaseBtn.textContent = 'Purchase';
  purchaseBtn.addEventListener('click', function() {
    alert(`items purchased`)
    // Remove the item from the list and arrat
    const itemIndex = shoppingItems.indexOf(itemAdds);
    if (itemIndex !== -1) {
      shoppingItems.splice(itemIndex, 1);
    }
    li.remove();
  });
  li.append(purchaseBtn);

  itemList.append(li);
}

// Create button to clear the list
const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear List';
clearBtn.addEventListener('click', function() {
  itemList.innerHTML = '';
  shoppingItems = [];
});
shoppingList.append(clearBtn);
