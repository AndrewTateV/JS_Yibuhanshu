import './style.scss'
import axios from 'axios'

// fetch data from API
// const getData = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   return data
// }

// axios version
const getData = async (url) => {
  const response = await axios.get(url)
  const data = await response.data
  return data
}

// create a card for each user
const createCard = (user) => {
  const card = document.createElement('div')
  card.classList.add('card')

  const name = document.createElement('h2')
  name.classList.add('card__name')
  name.textContent = `${user.name}`

  const email = document.createElement('p')
  email.classList.add('card__email')
  email.textContent = `Email: ${user.email}`

  const phone = document.createElement('p')
  phone.classList.add('card__phone')
  phone.textContent = `Phone: ${user.phone}`

  const website = document.createElement('p')
  website.classList.add('card__website')
  website.textContent = `Website: ${user.website}`

  card.appendChild(name)
  card.appendChild(email)
  card.appendChild(phone)
  card.appendChild(website)

  return card
}

window.addEventListener('load', async () => {
  const users = await getData('https://jsonplaceholder.typicode.com/users')
  console.log(users);
  const container = document.querySelector('.container')

  users.forEach((user) => {
    const card = createCard(user)
    container.appendChild(card)
  })
})

document.querySelector('#catch-data').addEventListener('click', async () => {
  const url = document.querySelector('#url').value
  console.log(url);
  const data = await getData(url)
  console.log(data);
  const container = document.querySelector('#data-container')
  container.value = JSON.stringify(data, null, 2)
})