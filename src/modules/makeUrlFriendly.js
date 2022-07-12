export const makeUrlFriendly = (name) => {
  return name.toLowerCase()
              .split(' ')
              .join('')
              .split('.')
              .join('')
              .split('-')
              .join('')

}
