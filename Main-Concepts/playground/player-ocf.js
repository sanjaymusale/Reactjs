class Player {
    constructor(data) {
        this.name = data.name
        this.runs = data.runs
        this.country = data.country
    }
    totalMatches() {
        return this.runs.length
    }
    avgRuns() {
        let total = 0
        this.runs.forEach(score => total += score)
        return total / this.runs.length
    }
}

const p1 = new Player({ name: 'virat', runs: [40, 60, 100, 50], country: 'india' })

console.log(p1.totalMatches())
console.log(p1.avgRuns())