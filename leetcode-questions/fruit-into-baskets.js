/**
 * @param {number[]} fruits
 * @return {number}
 */
function totalFruit(fruits) {
  let basket = new Map();
  let maxFruits = 0;
  let left = 0;

  for (let right = 0; right < fruits.length; right++) {
    let fruit = fruits[right];
    basket.set(fruit, (basket.get(fruit) || 0) + 1);

    while (basket.size > 2) {
      let leftFruit = fruits[left];
      basket.set(leftFruit, basket.get(leftFruit) - 1);
      if (basket.get(leftFruit) === 0) {
        basket.delete(leftFruit);
      }
      left++;
    }

    maxFruits = Math.max(maxFruits, right - left + 1);
  }

  return maxFruits;
}
