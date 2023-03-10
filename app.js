import express from 'express';
import ProductManager from './managers/productManager.js';

const app = express();
let productManager = new ProductManager ("./data/Product.json")

app.use(express.urlencoded({extended: true}))

app.get("/product", async (req, res) => {
    let products =  await productManager.getProducts()
    let limit = req.query.limit;
    if(!limit) return res.send({products})

    let productLimit =  products.filter((product, indice) => indice < limit );
    res.send({productLimit})
})
app.get('/product/:pid', async (req, res) => {
    let pid = req.params.pid;
    let products =  await productManager.getProducts()
    let product =  products.find(p => p.id == pid);
    if (!product) return res.send('No existe ese ID')

    res.send({product})
});


app.listen(8080, () => console.log("Servidor andando"))