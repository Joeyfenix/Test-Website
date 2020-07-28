AOS.init()
var mcursor = document.querySelector('.cursor')
var searchcont = document.querySelector('.searchcont')
const card = document.querySelector('.card')
searchcont.addEventListener('mousemove', cursor)
function cursor(e) {
  mcursor.style.top = e.pageY + 'px'
  mcursor.style.left = e.pageX + 'px'
}
card.forEach((link) => {
  link.addEventListener('mouseover', () => {
    mcursor.classList.add('link-grow')
  })
  link.addEventListener('mouseleave', () => {
    mcursor.classList.remove('link-grow')
  })
})
