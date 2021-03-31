let {prompt, format, spinners, alert, clear, space, select} = require('./main')

let spinner = spinners('Loading..').start()

setTimeout(() => {
  spinner.succeed('Welcome!')
  prompt('What is your name?')
  .then(res => {
    clear()
    let name = res[Object.keys(res)[0]]
    alert(`Hello, ${format.green(name)}!\nWhat'll we do?`)
    space(2)

    let menu = () => {
      select({
        'Ping': () => {
          alert('Pong')
          menu()
        },
        'Exit': process.exit
      })
    }
    menu()
  })
}, 1000)

/*
  Usage examples
//===============

let spinner = spinners('Loading..').start()
spinner.succeed('Success!')
spinner.fail('Error!')

//===============

space()
space()
space()
//or
space(3)

//===============

prompt('name')
.then(r => {
  alert(r.name)
})

//===============

alert('Hello World!')

//===============

clear()

//===============

alert(format.underline('Hello World!'))

//===============

alert('What do you prefer?')
select({
  'Tea': ()=>{},
  'Coffee': ()=>{}
})

//===============
*/