import ComponentContainer from '../ComponentContainer'
import {spawn, go, convert} from '../../engine/engine'
import {TimeBar} from './UI/TimeBar'

class HomePage extends ComponentContainer {
    constructor() {
        super()
        
        this.key = 'Home'
        this.childs = [TimeBar]
        this.render()
    }

    init() {
        let headline = document.querySelector('h1')
        let cells = document.querySelectorAll('.cell')
        let moves = document.querySelectorAll('.move')
        let exampleLabel = document.querySelector('.example')
        let positionLabel = document.querySelector('.position')
        let pointsLabel = document.querySelector('.points')
        let input = document.querySelector('.value')
        let btn = document.getElementById('check-btn')

        const eventSource = new EventSource('http://localhost:4000/welcome')

        eventSource.onmessage = message => {
            headline.textContent = message.data
        }
    
        const {cell, row} = spawn()

        let label = row + cell 
        let position = []
        let nextPosition = []
        let points = 0
        let value = 1
        let checkValue = 0
        let isAnswered = true

        exampleLabel.textContent = 'Example: ?'
        pointsLabel.textContent = 'Points: ' + points
        positionLabel.textContent = 'Current Position: ' + label

        cells.forEach(el => {
            if (el.textContent === label) {
                position = [Number(el.getAttribute('cell')), Number(el.getAttribute('row'))]

                el.classList.add('checked')
            }
        })

        moves.forEach(el => {
            el.addEventListener('click', () => {
                let cell = el.getAttribute('cell')
                let row = el.getAttribute('row')
                let symbol = el.getAttribute('symbol')

                const data = go(value, symbol)
                
                if (isAnswered) {
                    checkValue = data.value
                    nextPosition = [eval(`${position[0]}${cell}`), eval(`${position[1]}${row}`)]
                    positionLabel.textContent = 'Current Position: ' + label
                    exampleLabel.textContent = 'Example: ' + data.result
                }
                                
                isAnswered = false
            })
        })
       
        input.addEventListener('input', e => {
            value = Number(e.target.value)
        })

        btn.addEventListener('click', () => {
            if (value === checkValue) {
                points++

                position = nextPosition
                label = convert(position[0], position[1])

                positionLabel.textContent = 'Current Position: ' + label
                pointsLabel.textContent = 'Points: ' + points
                exampleLabel.textContent = 'Example: ?'

                cells.forEach(el => {
                    el.classList.remove('checked')
             
                    if (el.textContent === label) {                        
                        el.classList.add('checked')
                    }
                })                
            }

            isAnswered = true
        })       
    }
}

export default HomePage