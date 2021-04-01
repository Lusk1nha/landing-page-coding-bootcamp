const sliderButtons = document.querySelectorAll('.arrow')

const persons = [{
  image: './assets/image-tanya.jpg',
  name: 'Tanya Sinclair',
  quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
  I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
  excited about the future. ”`,
  career: 'UX Engineer'
  },
  {
    image: './assets/image-john.jpg',
    name: 'John Tarkpor',
    quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    career: 'Junior Front-end Developer'
  },
]

let sliderCounter = 1
sliderButtons.forEach(button => {
  button.addEventListener('click', () => {
    if ( sliderCounter >= persons.length) sliderCounter = 0

    const image = persons[sliderCounter].image
    const quote = persons[sliderCounter].quote
    const name = persons[sliderCounter].name
    const career = persons[sliderCounter].career

    const mainContainer = document.querySelector('#mainContainer')
    mainContainer.classList.add('fade')

    setTimeout(() => {
      mainContainer.classList.remove('fade')

    }, 1000)
    
    const personImg = document.querySelector('.personImage')
    personImg.src = image

    const motivationalQuote = document.querySelector('.motivational-quote')
    motivationalQuote.innerHTML = quote
  
    const personName = document.querySelector('.name')
    personName.innerHTML = name
  
    const personCareer = document.querySelector('.career')
    personCareer.innerHTML = career    
    
    sliderCounter++
  })
})