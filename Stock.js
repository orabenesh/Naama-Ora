
const Category = {
    FRUIT: 'fruit',
    VEGETABLES: 'vegetables',
    DRINKS: 'drinks',
    MEET: 'meet',
    DAIRY: 'dairy',
    SWEETS: 'sweets'
}

class Product {
    'use strict'
    #name; #code; #category; #price; #qty;
    constructor(name, code, category, price, qty) {
        this.#name = name;
        this.#code = code;
        this.#category = category;
        this.#price = price;
        this.#qty = qty;
    }
    getName() {
        return this.#name;
    }
    setName(n) {
        debugger
        this.#name = n;
    }
    getCode() {
        return this.#code;
    }
    setCode(n) {
        this.#code = n;
    }
    getPrice() {
        return this.#price;
    }
    setPrice(n) {
        this.#price = n;
    }
    getCategory() {
        return this.#category;
    }
    setCategory(n) {
        this.#category = n;
    }
    getQty() {
        return this.#qty;
    }
    setQty(n) {
        this.#qty = n;
    }
    addToQty(n) {
        debugger
        this.#qty -= (-n);
    }
    reduceToQty(n) {
        debugger
        if(this.#qty>n)
          this.#qty -= n;
        else alert("to much to decrease")
    }

}


class Stock {
    
    productsArr = [
        
    ];
    static start=0
    constructor(...values) {
        values.forEach((item) => (this.productsArr.push(item)));
    };

    searchByName() {
        let name = document.getElementById('productName').value;
        let aa = this.productsArr.filter(item => item.getName() == name)
        debugger;
        if(aa==null)
        {
            document.getElementById("allProducts").innerHTML = "no products found suitable"
        }
        else
        {
            document.getElementById("allProducts").innerHTML = ""
            debugger;
            document.getElementById("allProducts").append(this.displayTheArray(aa))
        }
    }
    searchByPrice() {
        debugger;
        let min = document.getElementById('minPrice').value;
        let max = document.getElementById('maxPrice').value;
        const aa = this.productsArr.filter(item => item.getPrice() > min && item.getPrice() < max)
        debugger;
        if(aa==null)
        {
            document.getElementById("allProducts").innerHTML = "no products found suitable"
        }
        else
        {
            document.getElementById("allProducts").innerHTML = ""
            document.getElementById("allProducts").append(this.displayTheArray(aa))
        }
    }
    searchByCategory() {
        debugger;
      let c = document.getElementById('categoryInput').value;
        const aa = this.productsArr.filter(item => item.getCategory() == Category[c])
        debugger;
        if(aa==null)
        {
            document.getElementById("allProducts").innerHTML = "no products found suitable"
        }
        else
        {
            document.getElementById("allProducts").innerHTML = ""
            document.getElementById("allProducts").append(this.displayTheArray(aa))
        }
    }
    searchByQty() {
        let c = document.getElementById('minQty').value;
        const aa = this.productsArr.filter(item => item.getQty() < c)
        debugger;
        if(aa==null)
        {
            document.getElementById("allProducts").innerHTML = "no products found suitable"
        }
        else
        {
            document.getElementById("allProducts").innerHTML = ""
            document.getElementById("allProducts").append(this.displayTheArray(aa))
        }
    }

    show(txt, div, fontSize = "h3") {
        debugger;
        var property = document.createElement(fontSize);
        div.appendChild(property);
        var txt = document.createTextNode(txt);
        property.appendChild(txt);
    }
    displayTheArray(array) {
        var container = document.createElement("div");
        
        debugger;
    
            const arr = array.map(product => {
            var productDiv = document.createElement("div");
            productDiv.classList.add("div")
            this.show(product.getName(), productDiv, "h1");
            this.show("code:" + product.getCode(), productDiv);
            this.show("category: " + product.getCategory(), productDiv);
            this.show("price: " + product.getPrice(), productDiv);
            this.show("units in stock: " + product.getQty(), productDiv);
            return productDiv;
        })
        container.append(...arr);
        return container;
    }

    addProduct(){
        debugger;
        let name=document.getElementById('interName').value
        let price=document.getElementById('interPrice').value
        let category=document.getElementById('categorySelect').value
        let qty=document.getElementById('interQty').value
        let code=document.getElementById('interCode').value
        let p=new Product(name,code,category,price,qty);
        stock.productsArr.push(p);
        document.getElementById("allProducts").innerHTML = ""
        document.getElementById('allProducts').append(stock.displayTheArray(stock.productsArr));
    }
    editProduct(){
        let chosen=document.getElementById('chosen').value
        debugger;
        let code=document.getElementById('editCode').value
        let name=document.getElementById('editName').value
        let price=document.getElementById('editPrice').value
        let category=document.getElementById('editCategory').value
        let qty=document.getElementById('editQty').value
        let c=stock.productsArr.find(item=>item.getCode()==chosen)
        c.setName(name)
        c.setCategory(category)
        c.setPrice(price)
        c.setQty(qty)
        c.setCode(code)
        document.getElementById("allProducts").innerHTML = ""
        document.getElementById('allProducts').append(stock.displayTheArray(stock.productsArr));
    }
    eraseProduct(){
        debugger;
        let chosen=document.getElementById('chosen').value
        // let c=stock.productsArr.find(item=>item.getCode()==chosen)
        for (let index = 0; index < stock.productsArr.length; index++) {
            if(stock.productsArr[index].getCode()==chosen)
                delete stock.productsArr[index]
        }
        document.getElementById("allProducts").innerHTML = ""
        document.getElementById('allProducts').append(stock.displayTheArray(stock.productsArr));
    }
    makePurchase(){
        let chosen=document.getElementById('makePurchase').value
        let num=document.getElementById('amount').value
        let c=stock.productsArr.find(item=>item.getCode()==chosen)
        c.reduceToQty(num)
        document.getElementById("allProducts").innerHTML = ""
        document.getElementById('allProducts').append(stock.displayTheArray(stock.productsArr));
    }
    addToStock(){
        let chosen=document.getElementById('addtostock').value
        let num=document.getElementById('amountAdd').value
        let c=stock.productsArr.find(item=>item.getCode()==chosen)
        c.addToQty(num)
        document.getElementById("allProducts").innerHTML = ""
        document.getElementById('allProducts').append(stock.displayTheArray(stock.productsArr));
    }
}

function logIn() {
    debugger;
    let mail = document.getElementById('mailInput').value;
    let pswd = document.getElementById('passwordInput').value;
    if (mail == 'manager@gmail.com' && pswd == '123') {
        // window.location.assign('Actions.html')
        if(window.confirm("welcome"))
            {window.location.href='Actions.html'}   
    }
    else alert("you are not the manager!!!!!!!!!     go away!!!!!!!!!!!!!")
};
function fun() {
    if (Stock.start === 0) {
        window.stock = new Stock(
            new Product("milk", 1, Category.DAIRY, 4.9, 80),
            new Product("cheese", 2, Category.DAIRY, 7.9, 50),
            new Product("Chocolate", 3, Category.SWEETS, 5.9, 120),
            new Product("coca-cola", 4, Category.DRINKS, 5.9, 120)
        );
        document.getElementById('allProducts').append(stock.displayTheArray(stock.productsArr));
        debugger
        stock.start+=1;
    }
    var select = document.getElementById('categoryInput')
    var select2= document.getElementById('categorySelect')
    var select3= document.getElementById('editCategory')
    for (index in Category) {
        select.options[select.options.length] = new Option(Category[index], index)
        select2.options[select2.options.length] = new Option(Category[index], index)
        select3.options[select3.options.length] = new Option(Category[index], index)
    }
}
 window.onload =fun(); 