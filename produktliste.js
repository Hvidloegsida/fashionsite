fetch("https://kea-alt-del.dk/t7/api/products?limit=50&start=10")
  .then((res) => res.json())
  .then(showproducts);

function showproducts(products) {
  //looper og kalder showproduct (ental)
  products.forEach(showproduct);
}

function showproduct(product) {
  //console.log(product);
  //fange template fra html
  const template = document.querySelector("#produkt").content;
  //lave kopi
  /*JEG LAVER HER EN KOPI AT MIN ARTIKEL OG SIGER AT DEN SKAL TAGE BØRNENE MED SOME ER (TRUE)*/
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h2").textContent = product.productdisplayname;
  //copy.querySelector("img").src = product.brandimage;
  if (product.soldout) {
    //productet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("rabat");
    /*GAMMELDAGS MATEMATIK */
    copy.querySelector(".tilbudspris").textContent = Math.round(product.price - (product.discount * product.price) / 100);
  }
  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);
  copy.querySelector(".kollektion").textContent = product.articletype;
  copy.querySelector(".pris").textContent = product.price;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //appende hvor den skal være i DOM
  document.querySelector("main").appendChild(copy);
}

{
  /* <article class="pro1">
                <img src="pics/buksedragt.webp" alt="buksedragt">
                <div class="rabat">-50%</div>
                <div class="soldout">Udsolgt</div>
                <h2>Buksedragt</h2>
                <p>Sommer-collektion</p>
                <p>DKK 100,-</p>
                <p class="oldprice">DKK 150,-</p>
                <a href="produkt.html" class="more">Læs mere!</a>
            </article> */
}

/**{
  "id": 1583,
  "gender": "Women",
  "category": "Apparel",
  "subcategory": "Bottomwear",
  "articletype": "Swimwear",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Sports",
  "productdisplayname": "omen Black Swimsuit",
  "price": 1099,
  "discount": null,
  "brandname": "Decathlon",
  "soldout": 0
} */
