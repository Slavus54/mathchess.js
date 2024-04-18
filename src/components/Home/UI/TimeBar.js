import {Datus} from 'datus.js'

const datus = new Datus()

export const TimeBar = `
    <h5 class="pale">Current Time: ${datus.timestamp('|')}</h5>
`