export function greet(name) {
  return `Hello, ${name}`
}

export const farewell = name => {
  return `Goodbye, ${name}`
}

export function kolobok(character) {
  switch (character) {
    case 'Дедушка':
      return 'Я от дедушки ушел'
    case 'Заяц':
      return 'Я от зайца ушел'
    case 'Лиса':
      return 'Меня съели'
    default:
      throw new Error('Я встретил кого-то неизвестного') // throw останавливает скрипт с ошибкой
  }
}

export function newYear(character) {
  switch (character) {
    case 'Дед Мороз':
    case 'Снегурочка':
      return `${character}! ${character}! ${character}!`
    default:
      throw new Error('Неизвестный персонаж')
  }
}
