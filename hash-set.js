import HashMap from './hash-map'

export default class HashSet {
  constructor (initialSize = 16) {
    if (initialSize < 0) {
      throw new Error('Initial size cannot be negative')
    }
    this.map = new HashMap(initialSize)
  }

  add (key) {
    if (typeof key !== 'string') {
      throw new Error('Key must be a string')
    }
    this.map.set(key, true)
  }

  has (key) {
    return this.map.has(key)
  }

  remove (key) {
    return this.map.remove(key)
  }

  clear () {
    this.map.clear()
  }

  size () {
    return this.map.length()
  }

  keys () {
    return this.map.keys()
  }
}
