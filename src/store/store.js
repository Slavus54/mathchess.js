import uniqid from 'uniqid'
import {result_key, result_limit} from '../env/env'

const results = JSON.parse(localStorage.getItem(result_key))

export const initResults = () => {
    if (results === null) {
        localStorage.setItem(result_key, JSON.stringify([]))
    }
}

export const saveResult = (cell, points, dateUp) => {
    let result = [...results, {id: uniqid(), cell, points, dateUp}]

    if (results.length < result_limit) {
        localStorage.setItem(result_key, JSON.stringify(result))
    }
}

export const getResults = () => {
    return results || []
}