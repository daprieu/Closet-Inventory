import { clothes } from "./inventory.js"

const inventoryDOMElement = document.querySelector(".inventory")

const weatherType = (clothingItem) => {

    /*
        Change the following condition to check if the `type` property
        on a clothing item has the value of "Jacket". If it does, add
        a new `season` property on the item with a value of "Winter".
        Otherwise, add a new `season` property on the item with a 
        value of "Any".
    */

    // MODIFY THE CODE BELOW
    if (clothingItem.type === "Jacket") {
      return clothingItem.season = "Winter";
    }
    else {
      return clothingItem.season = "Any";
    }
    // MODIFY THE CODE ABOVE

    return clothingItem
}

for (const item of clothes) {
    const itemWithSeasonAdded = weatherType(item)

    /*
        Access the correct properties of the object, which is the
        value of the `item` variable to output the following text
        for each clothing item

        A Burgundy Pants made of Cotton/Polyester of M size. Can wear in Any season.
    */

    // MODIFY THE CODE BELOW
    const clothingHTMLRepresentation = `<div>
        A ${item.color} ${item.type} made of ${item.material} of ${item.size} size. Can wear in ${item.season} season.
    </div>`
    // MODIFY THE CODE ABOVE

    inventoryDOMElement.innerHTML += clothingHTMLRepresentation
}