const productsCart = [     
    {
        id: 1,
        name: "Uva Crismon",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {   id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
]

function carrinho(itens){
    const body = document.querySelector("body")
    const main = document.createElement("main")
    const productList = document.createElement("ul")
    const productDetails = document.createElement("section")
    const buttonEnd = document.createElement("button")
    
    body.appendChild(main)
    main.appendChild(productList)
    let soma = 0
    for(let i = 0; i < itens.length; i++){
        const productItem = document.createElement("li")
        const name = document.createElement("p")
        const price = document.createElement("p")
        
        productItem.appendChild(name)
        productItem.appendChild(price)
        
        name.innerText = itens[i].name
        price.innerText = itens[i].price
        
        productList.appendChild(productItem)
        
        soma += itens[i].price
    }
    
    const totalSoma = document.createElement("li")
    const resultSoma = document.createElement("p")

    productList.appendChild(totalSoma)
    totalSoma.appendChild(resultSoma)

    resultSoma.innerText = ` Total ${soma}`
    
    productList.appendChild(productDetails)
    productDetails.appendChild(buttonEnd)
    
    buttonEnd.innerText = "Finalizar"
}

carrinho(productsCart)