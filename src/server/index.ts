import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import Controller from "./controller"
import AdsController from "./ads/controller"
import setupDb from './db'

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
  controllers: [Controller, AdsController]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))