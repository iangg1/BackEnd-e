const ProductManager = require("./managers/productManager");

const manager = new ProductManager("./data/Product.json")

const queries = async () => {
    try{
        console.log("consulta")
        let product = await manager.getProducts()
        console.log(product);
    } catch(error) {
        console.log(error)
    }
}

queries()