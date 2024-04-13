import {Datus} from 'datus.js'

const datus = new Datus()

export const TimeBar = `
    <h4 class="pale">Current Time: ${datus.timestamp('|')}</h4>
`