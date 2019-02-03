class Product {
    constructor(data) {
        this.name = data.name
        this.price = data.price
    }
    details() {
        return `${this.name} - ${this.price}`
    }
}

const p1 = new Product({ name: 'marker', price: 10 })

console.log(p1.name)

console.log(p1.details())