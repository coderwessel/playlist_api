// src/index.ts
import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import PlaylistController from './playlists/controller'
import setupDb from './db'

const port = process.env.PORT || 5000

const app = createKoaServer({
   cors: true, //enable cors for local testing
   controllers: [PlaylistController]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))
