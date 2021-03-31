const btnHere = document.querySelector('.change')

const persons = {
  'tanya': {
    path: 'tanya',
    name: 'Tanya Sinclair',
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
    career: 'UX Engineer'

  },
  'john': {
    path: 'john',
    name: 'John Tarkpor',
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    career: 'Junior Front-end Developer'
  }
}

let index = 0
btnHere.addEventListener('click', () => {
  let path
  let text
  let name
  let career

  if ( index % 2 == 0 ) {
    path = persons['john'].path
    name = persons['john'].name
    text = persons['john'].text
    career = persons['john'].career

  } else {
    path = persons['tanya'].path
    name = persons['tanya'].name
    text = persons['tanya'].text
    career = persons['tanya'].career

  }

  const personImg = document.querySelector('.personImage')
  personImg.src = `./assets/image-${path}.jpg`

  const motivationalText = document.querySelector('.motivational-text')
  motivationalText.innerHTML = text

  const personName = document.querySelector('.name')
  personName.innerHTML = name

  const personCareer = document.querySelector('.career')
  personCareer.innerHTML = career

  index++
})