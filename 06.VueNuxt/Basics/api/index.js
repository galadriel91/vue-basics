import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:3000'
})

const fetchProductsItem = () => {
    return instance.get('/products')
}

const fetchCartsItem = () => {
    return instance.get('/carts')
}

const fetchPostItem = (itemId) => {
    return instance.get(`/products/${itemId}`)
}

export{
    fetchProductsItem,
    fetchCartsItem,
    fetchPostItem
}