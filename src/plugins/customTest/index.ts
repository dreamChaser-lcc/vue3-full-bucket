import { App } from "vue"
import { hasPermission } from "../../utils"

const setupCustomTest = (app:App<Element>)=>{
  app.use(hasPermission)
}
export default setupCustomTest