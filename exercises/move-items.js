/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
const allItems = Array.from(document.querySelectorAll(".item"));


/**
 * @task
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

// Your code goes here
const main = document.querySelector("#main");

/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */

// Your code goes here
const favs = document.querySelector("#favs");

/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

// Your code goes here

function updateCollections(id, direction) {
  const validDirections = {
    toMain: main,
    toFavs: favs
  };

  const targetElement = allItems.find(elem => elem.id == id);

  if (!validDirections[direction]) {
    console.error("Invalid Direction");
    return;
  }

  if (!targetElement) {
    console.error(`No Element with id ${id} found`);
    return;
  }

  const currentParent = targetElement.parentNode;
  const newParent = validDirections[direction];

  if (currentParent === newParent) {
    console.error("Element is already in appropriate collection");
    return;
  }

  const flipChildIconClass = targetChildElement => {
    /* const iconClass = targetChildElement.className.trim().split(" ")
    iconClass[1] = iconClass[1] === "fa-heart-crack" ? "fa-heart-circle-plus" : "fa-heart-crack"
    targetChildElement.className = iconClass.join(" ") */

    const iconClass = targetChildElement.classList;
    iconClass.toggle("fa-heart-circle-plus");
    iconClass.toggle("fa-heart-crack");
  };

  currentParent.removeChild(targetElement);
  flipChildIconClass(targetElement.querySelector("i"));
  newParent.appendChild(targetElement);

  console.info(`Moved item with id ${id} to ${direction === "toMain" ? "main" : "favorites"} collection`);
}

/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

// Your code goes here...

allItems.forEach(node => {
  node.addEventListener("click", (e) => {
    const currentParent = e.target.parentNode;
    const targetId = e.target.id;
    const targetDirection = currentParent === main ? "toFavs" : "toMain";
    updateCollections(targetId, targetDirection)
  })
})


