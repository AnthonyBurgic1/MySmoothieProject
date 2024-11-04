class Smoothie {
    constructor(flavor, size = 'medium', extras = []) {
/**
    * Initialize a new Smoothie instance.
    * @param {string} flavor - Main flavor of the smoothie (e.g., 'strawberry', 'banana').
     * @param {string} size - Size of the smoothie, default is 'medium'.
    * @param {Array} extras - Optional array of additional ingredients (e.g., ['chia seeds', 'protein powder']).
*/

    this.flavor = flavor;
    this.size = size;
    this.extras = extras;
    }

addExtra(ingredient) {
/** 
    * Add an extra ingredient to the smoothie.
    * @param {string} ingredient - The ingredient to add.
 */
    if (!this.extras.includes(ingredient)) {
        this.extras.push(ingredient);
        console.log(`${ingredient} added to the smoothie.`);

    } else {
        console.log(`${ingredient} is already in the smoothie.`);
    }

    }

removeExtra(ingredient) {
/**
    * Remove an extra ingredient from the smoothie.
    * @param {string} ingredient - The ingredient to remove.
*/
    const index = this.extras.indexOf(ingredient);
    if (index !== -1) {
        this.extras.splice(index, 1);
        console.log(`${ingredient} removed from the smoothie.`);

} else {
        console.log(`${ingredient} not found in the smoothie.`);
        }
    }

getSummary() {
/**
    * Return a summary of the smoothie order.
    * @return {string} A string summarizing the smoothie details.
*/
    const extrasSummary = this.extras.length ? this.extras.join(', ') : 'no extras';
    return `${this.capitalize(this.size)} ${this.capitalize(this.flavor)} smoothie with ${extrasSummary}.`;

    }

setSize(size) {
/**
    * Set the smoothie size if it's valid.
    * @param {string} size - The size to set, should be one of ['small', 'medium', 'large'].
*/

    const validSizes = ['small', 'medium', 'large'];
        if (validSizes.includes(size)) {
        this.size = size;
    console.log(`Smoothie size set to ${size}.`);

    } else {
        console.log("Invalid size. Choose from 'small', 'medium', or 'large'.");

        }
    }

capitalize(word) {
/**
    * Capitalize the first letter of a word.
    * @param {string} word - The word to capitalize.
    * @return {string} Capitalized word.
*/
    return word.charAt(0).toUpperCase() + word.slice(1);

    }
}

// Example of the usage: \\ 
const smoothie = new Smoothie('banana');
smoothie.addExtra('chia seeds');
smoothie.addExtra('protein powder');
// Testing removal of a non-added item \\ 
smoothie.removeExtra('spinach'); 
smoothie.setSize('large');
console.log(smoothie.getSummary());
