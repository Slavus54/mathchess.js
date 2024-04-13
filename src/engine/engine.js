import {max, letters} from '../env/env'

export const spawn = () => {
    let cell = getNum()
    let row = letters[Math.floor(Math.random() * letters.length)]

    return {cell, row}
}

export const go = (num = 0, move = '+') => {
    let result = `${num}${move}${getNum()}`
    let value = Math.floor(eval(result))

    return {result, value}
}

export const convert = (cell = 1, row = 1) => {
    let result = letters[letters.length - row] + cell

    return result
}

const getNum = () => {
    let value = Math.floor(Math.random() * max)

    return 0 < value <= 10 ? value : value + 1
}