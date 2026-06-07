const categories = document.querySelectorAll(`#categories .item`);

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const titel = category.querySelector(`h2`).textContent;
    const elements = category.querySelectorAll(`ul li`).length;

    console.log(`Category: ${titel}`);
    console.log(`Elements: ${elements}`);
});