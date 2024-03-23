import { farewell, greet, kolobok } from '../src/modules.js'

describe('greet', () => {
  // For TDD approach
  // it('is function', () => {
  //   expect(typeof greet).toBe('function')
  // })

  it('should greet Eli', () => {
    // Using Arrange-Act-Assert pattern
    const username = 'Eli' // arrange
    const result = greet(username) // act
    expect(result).toBe('Hello, Eli') // assert
  })

  it('should work correct with empty string', () => {
    expect(greet('')).toBe('Hello, ')
  })
})

describe('farewell', () => {
  it('should farewell Eli', () => {
    expect(farewell('Eli')).toBe('Goodbye, Eli')
  })

  it('should work correct with empty string', () => {
    expect(farewell('')).toBe('Goodbye, ')
  })
})

// Вызовет ошибку
// describe('kolobok', () => {
//   it('can see strange', () => {
//     expect(kolobok('Дед Мороз')).toBe('Я встретил кого-то неизвестного')
//   })
// })

describe('kolobok', () => {
  it('can see strange', () => {
    expect(() => {
      kolobok('Дед Мороз')
    }).toThrow('Я встретил кого-то неизвестного')

    // без Jest с try-catch
    // try {
    //   kolobok('Дед Мороз')
    //   console.log('Мы это не видим')
    // } catch (error) {
    //   /* ошибку throw new Error('Я встретил кого-то неизвестного') можно заменить
    //   на строку throw 'Я встретил кого-то неизвестного', тогда будет catch (message) и expect(message) */
    //   expect(error.message).toBe('Я встретил кого-то неизвестного')
    // }
  })
})
