const productsArray = [
    {
        id: "1",
        name: "Flipper Zero",
        price: 10.21
    },
    {
        id: "2",
        name: "GPIO Accessories",
        price: 15.55
    },
    {
        id: "3",
        name: "Raspberry Pi",
        price: 13.55
    },
    {
        id: "4",
        name: "Firmware Upgrades",
        price: 12.55
    },
    {
        id: "5",
        name: "Technical Support",
        price: 11.55
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