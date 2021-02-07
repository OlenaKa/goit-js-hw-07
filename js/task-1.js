const categoriesToFind = document.querySelectorAll("li.item");
console.log(logCategoriesToFind());

const infoByCategory = categoriesToFind.forEach(category=>logInfoByCategory(category))


function logCategoriesToFind () {
  return `В списке ${categoriesToFind.length} категории`
 }

function logInfoByCategory (category) {
  console.log(`Категория: "${category.querySelector("h2").textContent}"; Количество элементов: ${category.querySelector("ul").children.length}`)
}

