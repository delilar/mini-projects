const search = document.querySelector('.search')
const button = document.querySelector('.button')
const input = document.querySelector('.input')


button.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})


function addTogether(...args) {

    args.forEach((arg) => {
      if (typeof arg !== typeof 1) {
        return undefined
      }
      else if (args.length == 2) {
        return args[0] + args[1]
      }
      else {
        return addTogether()
      }
    })
  
  }
  
  console.log(addTogether(2, 3))