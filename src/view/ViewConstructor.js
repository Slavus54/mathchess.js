import {letters, moves, max} from '../env/env'

class ViewConstructor {
    constructor({key, childs}) {
        this.key = key
        this.childs = childs
    }

    init() {
        let root = document.getElementById('root')
        let container = document.createElement('div')
        let headline = document.createElement('h1')

        container.classList.add('main')

        container.appendChild(headline)

        if (this.key === 'Home') {
            let board = document.createElement('div')
            let keyboard = document.createElement('div')
            let example = document.createElement('p')
            let position = document.createElement('span')
            let points = document.createElement('span')
            let inp = document.createElement('input')
            let btn = document.createElement('button')

            board.classList.add('board')
            keyboard.classList.add('moves')
            example.classList.add('example')
            position.classList.add('position')
            points.classList.add('points')
            inp.classList.add('value')
            inp.setAttribute('type', 'text')
            inp.placeholder = 'Enter value'
            btn.id = 'check-btn'

            btn.textContent = 'Check'

            for (let i = 0; i < letters.length; i++) {
                let letter = letters[i]
              
                for (let j = 1; j <= max; j++) {
                    let cell = document.createElement('div')
                    let label = document.createElement('p')
               
                    cell.classList.add('cell')
                    label.classList.add('cell__label')

                    cell.setAttribute('cell', j)
                    cell.setAttribute('row', max - i)
                    cell.setAttribute('letter', letter)

                    label.textContent = letter+j

                    cell.appendChild(label)
                
                    board.appendChild(cell)
                }
            }

            for (let i = 0; i < moves.length; i++) {
                let move = moves[i]
                let key = document.createElement('div')
           
                key.classList.add('move')
                key.setAttribute('cell', move.cell)
                key.setAttribute('row', move.row)
                key.setAttribute('symbol', move.symbol)

                key.textContent = move.title

                keyboard.appendChild(key)
            }

            headline.textContent = 'Loading...'

            container.appendChild(board)
            container.appendChild(keyboard)
            container.appendChild(example)
            container.appendChild(position)
            container.appendChild(points)
            container.appendChild(inp)
            container.appendChild(btn)
        }

        this.childs.map(el => {
            container.innerHTML += el
        })
        
        root.appendChild(container)
    }
}

export default ViewConstructor