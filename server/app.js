import express from 'express'
import { corsMiddleware } from './middleware/cors.js'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = join(__dirname, 'restaurants.json')
const restaurants = JSON.parse(fs.readFileSync(filePath), 'utf-8')
// import { moviesRouter } from './routes/routes.js'
const app = express()
app.disable('x-powered-by')
const PORT = process.env.PORT ?? 3000
app.use(express.static('public'))
app.use(corsMiddleware)

app.get('/', (req, res) => {
  res.sendFile('inicio.html', { root: './public' })
})
app.get('/activities', (req, res) => {
  res.sendFile('inicio.html', { root: './public' })
})
app.get('/restaurants', (req, res) => {
  res.sendFile('restaurantes.html', { root: './public' })
})
app.get('/restaurants/info', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.json(restaurants)
})
// app.get('/restaurants.html', (req, res) => {
//   res.sendFile('restaurantes.html', { root: './public' })
// })
app.get('/restaurants/:restaurant_id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  const { restaurant_id } = req.params
  const restaurant = restaurants.find(restaurant => restaurant.restaurant_id === restaurant_id)
  if (restaurant) {
    return res.status(200).json(restaurant)
  }
  res.status(404).json({ error: 'Restaurant not found' })
})
app.get('/images', (req, res) => {
  res.sendFile('imagenes.html', { root: './public' })
})
app.get('/chef', (req, res) => {
  res.sendFile('chef.html', { root: './public' })
})
app.get('/massages', (req, res) => {
  res.sendFile('masajes.html', { root: './public' })
})
app.get('/vehicles', (req, res) => {
  res.sendFile('vehiculos.html', { root: './public' })
})
app.get('/transportation', (req, res) => {

})
app.get('/movies/:id', (req, res) => {
  console.log('hola')
  // const { id } = req.params
  // const movie = movies.find((movie) => movie.id === id)
  // if (movie) {
  //   return res.status(200).json(movie)
  // }
  // res.status(404).json({ error: 'Movie not found' })
})
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
