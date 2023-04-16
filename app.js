class Product{
    constructor(title ,price ,description,image ){
      this.title = title  
      this.price = price
      this.description = description
      this.image = image
    }
}
let arr =[];
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                for (let i = 0; i < json.length; i++) {

                    let products = new Product(json[i].title, json[i].price, json[i].description, json[i].image)
                    arr.push(products);

                }
                // console.log(arr);
                arr.map(e => {
                    
                    let cards= document.getElementById("cards");
                    let card = document.createElement("div");
                    let img = document.createElement("img");
                    img.src = `${e.image}`;
                    card.appendChild(img);
                    let titP = document.createElement("p");
                    titP.textContent = `${e.title}`
                    card.appendChild(titP);
                    let prcP = document.createElement("p");
                    prcP.textContent = `Price is ${e.price} $`
                    card.appendChild(prcP);
                    cards.appendChild(card);

                })
            })
            