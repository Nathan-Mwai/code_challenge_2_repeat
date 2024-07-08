// // Creates a header element in the html
// const header = document.createElement(`header`);
// //appends the header to the body element
// document.body.append(header);
// //creates a h1 element
// const h1 = document.createElement(`h1`);
// //Assigns h1 a text
// h1.textContent = `Mishi Shopping list`;
// header.append(h1);

// //creates a div element for where to write list
// const container1 = document.createElement(`div`);
// container1.setAttribute(`id`, `introduction`);
// document.body.append(container1);

// const form = document.createElement(`form`);
// form.setAttribute(`id`, `filler`)
// container1.append(form)
// const label = document.createElement(`label`)
// label.textContent = `Enter Items to be added:`
// form.appendChild(label);

// const input = document.createElement(`input`)
// input.setAttribute(`id`, `addzone`)
// input.setAttribute(`type`, `text`)
// input.setAttribute(`placeholder`, `description`);
// form.append(input);

// const submit = document.createElement(`input`)
// input.setAttribute(`id`, `submit`)
// // submit.addEventListener(`click`, submitForm)
// input.setAttribute(`type`, `submit`)
// form.append(submit);

// // function submitForm(e){
// //     e.preventDefault();
// //     console.log(e.target.txt.value);
// //     alert(`I have been clicked`)
// // }


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

// Function to add item to the list
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const itemName = input.value.trim();
  if (itemName) {
    addItemToList(itemName);
    input.value = '';
  }
});

// Function to add item to the list
function addItemToList(itemAdds) {
  const li = document.createElement('li');
  li.textContent = itemAdds;

  // Add button to mark item as purchased
  const purchaseBtn = document.createElement('button');
  purchaseBtn.textContent = 'Purchase';
  purchaseBtn.addEventListener('click', function() {
    alert(`items purchased`)
    // Remove the item from the list
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
});
shoppingList.append(clearBtn);
