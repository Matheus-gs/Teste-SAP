// 1° Exercício
const arr = [1, 1, 2, 3, null, 1]
const removeDuplicates = (arr) => [...new Set(arr.filter((el) => el != null))]
console.log(removeDuplicates(arr))

// 3° Exercício
// const Browser = {
//     history: [],
//     currentIndex: undefined,
//     navigate: function (url) {
//         history.push(url)
//     },
//     navigateBack: function (steps) {
//         let size = this.history.length
//         let backHistory = history[size - steps]
//         currentIndex = history.indexOf(backHistory)

//         return backHistory
//     },
//     navigateForward: function (steps) {
//         let nextHistory = history[currentIndex + steps]
//         currentIndex = history.indexOf(nextHistory)

//         return nextHistory
//     },
//     getCurrentPage: function () {
//         return history[currentIndex]
//     },
// }

// const navegacao = Browser

// navegacao.navigate("site1");
// navegacao.navigate("site2");
// navegacao.navigate("site3");

// console.log(Browser.getCurrentPage())

// navegacao.navigateForward(1)
// console.log(Browser.getCurrentPage())

// navegacao.navigateBack(2);
// console.log(Browser.getCurrentPage())

class Browser {
    constructor() {
        this.history = []
        this.currentIndex = undefined
        this.navigate = (url) => this.history.push(url)
        this.navigateBack = (steps) => {
            let size = this.history.length
            let backHistory = this.history[size - steps]
            this.currentIndex = this.history.indexOf(backHistory)
            return backHistory
        }
        this.navigateForward = (steps) => {
            let nextHistory = this.history[this.currentIndex + steps]
            this.currentIndex = this.history.indexOf(nextHistory)
            return nextHistory
        }
        this.getCurrentPage = () => this.history[this.currentIndex]
    }
}

const navegador = new Browser()

navegador.navigate('Pagina 1')
navegador.navigate('Pagina 2')
navegador.navigate('Pagina 3')
navegador.navigate('Pagina 4')
navegador.navigate('Pagina 5')

navegador.navigateBack(4)

navegador.navigate('Pagina 6')
navegador.navigate('Pagina 7')
navegador.navigate('Pagina 8')

navegador.navigateForward(1)

navegador.navigate('Pagina 9')
navegador.navigate('Pagina 10')

navegador.navigateForward(5)

console.log(navegador.getCurrentPage())
