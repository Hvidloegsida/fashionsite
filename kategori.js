fetch("https://kea-alt-del.dk/t7/api/seasons")
  .then((res) => res.json())
  .then(showcategories);

function showcategories(categories) {
  console.log(showcategories);
  //looper og kalder showcategory (ental)
  categories.forEach(showcategory);
}

function showcategory(category) {
  //fang template
  const template = document.querySelector(".kategori").content;

  //loop
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector(".summer").textContent = category.season;
  copy.querySelector("a").setAttribute("href", `produktliste.html?season=${category.season}`);

  document.querySelector("main").appendChild(copy);
}
