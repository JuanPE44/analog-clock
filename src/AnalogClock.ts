export class AnalogClock {
  private readonly GRADE_HOUR = 360 / 12;
  private readonly GRADE_MINUTE = 360 / 60;
  private readonly GRADE_SECOND = 360 / 12;
  private hours = 12;
  private minutes = 60;
  private seconds = 60;

  public render() {
    const containerClock = this.createElementDiv("container-clock");
    const clock = this.createElementDiv("clock");
    const center = this.createElementDiv("center");
    containerClock.appendChild(clock);
    clock.appendChild(center);

    for (let i: number = 1; i <= this.hours; i++) {
      const hourElement = this.createHourElement(i);
      clock.appendChild(hourElement);
    }

    for (let i: number = 1; i <= this.minutes; i++) {
      const minuteElement = this.createMinuteElement(i);
      clock.appendChild(minuteElement);
    }

    return this.outerHTML(containerClock);
  }

  private createMinuteElement(i: number) {
    const containerMinute = this.createElementDiv("container-minute");
    const line = this.createElementDiv("line-minute");
    containerMinute.style.transform = `rotate(${i * this.GRADE_MINUTE}deg)`;

    containerMinute.appendChild(line);
    return containerMinute;
  }
  private createHourElement(i: number) {
    const containerHour = this.createElementDiv("container-hour");
    const hour = this.createElementDiv("hour");
    const line = this.createElementDiv("line-hour");
    containerHour.style.transform = `rotate(${i * this.GRADE_HOUR}deg)`;

    hour.style.transform = `rotate(-${i * this.GRADE_HOUR}deg)`;
    //line.style.transform = `rotate(${i * this.GRADE_HOUR + 45}deg)`;

    containerHour.appendChild(line);
    hour.innerHTML = i.toString();
    containerHour.appendChild(hour);
    return containerHour;
  }
  private createElementDiv(className: string) {
    const element = document.createElement("div");
    element.classList.add(className);
    return element;
  }

  private outerHTML(node: HTMLDivElement) {
    return node.outerHTML || new XMLSerializer().serializeToString(node);
  }
}
