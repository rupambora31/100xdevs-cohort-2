/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Loop through each transaction
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const category = transaction.category;
    const price = transaction.price;

    // Check if the category already exists in the categoryMap
    if (categoryMap[category] === undefined) {
      // If it doesn't exist, initialize it with the price
      categoryMap[category] = price;
    } else {
      // If it exists, add the price to the existing total
      categoryMap[category] += price;
    }
  }

  // Convert the categoryMap into an array of objects
  const result = [];
  for (const category in categoryMap) {
    result.push({ category: category, totalSpent: categoryMap[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
