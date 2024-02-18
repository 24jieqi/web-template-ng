export function sleep<ReturnType = void>(
  time: number,
  returnValue?: ReturnType,
) {
  return new Promise<ReturnType>(resolve => {
    setTimeout(() => {
      resolve(returnValue)
    }, time)
  })
}
