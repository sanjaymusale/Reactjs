function Product(data) {
    this.name = data.name
    this.price = data.price
    this.details = function () {
        return `${this.name} - ${this.price}`
    }
}

const p1 = new Product({ 'name': 'marker', 'price': 10 })

console.log(p1.details())

