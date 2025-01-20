import "./style.css";
import { AnalogClock } from "./AnalogClock";
const clock = new AnalogClock();
const clockElement = clock.render();
document.querySelector<HTMLDivElement>("#app")!.appendChild(clockElement);
clock.init();
