const productsArray = [
    {
        id: "1",
        name: "Flipper Zero",
        price: 10.20
    },
    {
        id: "2",
        name: "Flipper Hardware",
        price: 15.55
    },
    {
        id: "3",
        name: "Drone",
        price: 200.33
    },
    {
        id: "4",
        name: "Drone with Camera",
        price: 500.33
    },
    {
        id: "5",
        name: "Drone with Camera and HD",
        price: 2000.33
    },
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if(productData == undefined){
        console.log("Product does not exist for id: " + id)
        return undefined
    }
    return productData
}

export {productsArray, getProductData};