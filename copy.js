import * as R from 'ramda'
import crocks from 'crocks'
const { Async } = crocks
const { compose, prop, last } = R
const FINISHED = '__FINISHED__'
const lastId = compose(prop('id'), last)
const isOk = result => result.ok ? Async.of(result) : Async.Rejected('Error Copying Data')
const checkFinished = limit => xs => xs.length === limit ? lastId(xs) : FINISHED
/**
 * @param {Async} list
 * @param {Async} bulk
 */
export default function (list, bulk) {
  /**
   * @param {Number} limit
   * @param {string} startkey
   */
  return function (limit, startkey) {
    return Async.of({ limit, startkey })
      .chain(list)
      .map(prop('docs'))
      .chain(bulk)
      .chain(isOk)
      .map(prop('results'))
      .map(checkFinished(limit))
  }
}