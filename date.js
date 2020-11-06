const months_f = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December']

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
'Sep', 'Oct', 'Nov', 'Dec']

class D {
  constructor(...args) {
    this.date = new Date(...args)
    this.chars = {
      'Y': this.year,
      'y': this.year % 100,
      'M': months_f[this.month],
      'm': months[this.month],
      'D': pad(this.day),
      'd': this.day,
      'H': pad(this.hour),
      'h': this.hour,
      'I': pad(this.min),
      'i': this.min,
      'S': pad(this.secs),
      's': this.secs
    }
  }

  get year() {
    return this.date.getFullYear()
  }

  get month() {
    return this.date.getMonth()
  }

  get day() {
    return this.date.getDate()
  }

  get hour() {
    return this.date.getHours()
  }

  get min() {
    return this.date.getMinutes()
  }

  get secs() {
    return this.date.getSeconds()
  }

  format(f=false) {
    if (f === false) {
      return `${this.year} ${months_f[this.month]} ${this.day}`
    }
    else {
      let time = ""
      for (let i = 0; i < f.length; i += 1) {
        if ((/[a-zA-Z]/).test(f[i])) {
          time += this.chars[f[i]]
        }
        else {
          time += f[i]
        }
      }
      return time
    }
  }

}

function pad(num){
  if(num < 10) {
    return `0${num}`
  }
  return `${num}`
}

