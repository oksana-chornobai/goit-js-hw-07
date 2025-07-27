const listItems = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(listItem => {
    const title = listItem.querySelector('h2').textContent;
    const elementsCount = listItem.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
});



