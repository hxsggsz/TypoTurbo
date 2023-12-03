import '../styles/base.scss'
import { Select } from "domhelper.js"

const counter = new Select().where("id").equals("app").getResult()

console.log(counter)
counter.innerHTML = "adawdawdawdaw"