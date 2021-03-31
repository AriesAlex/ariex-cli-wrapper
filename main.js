module.exports = (() => {
  let promptModule = require('prompt')
  promptModule.message = ''
  promptModule.delimiter = ' >'

  promptModule.start()
  let prompt = promptModule.get

  const format = require('chalk')
  const spinners = require('ora')

  let select = (options, more) => {
    let result = {
      values: Object.keys(options),
      valueRenderer: (value, selected) => {
        return selected ? format.cyan(value) : format.blue(value)
      }
    }
    if(typeof more == 'object') Object.keys(more).forEach(key => {
      result[key] = more[key]
    })
    require('cli-select')(result)
    .then(r => {
      options[r.value]()
    })
  }

  let alert = console.log
  let clear = console.clear
  let space = num => {
    num = num ?? 1
    num--
    alert('')
    if(num > 0) space(num)
  }

  return {prompt, format, spinners, alert, clear, space, select}
})()