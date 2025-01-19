import "./style.css";
import { AnalogClock } from "./AnalogClock";
const Clock = new AnalogClock();
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class='container'>
    ${Clock.render()}
  </div>
`;
