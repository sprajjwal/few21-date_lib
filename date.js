

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

  /**
   * Returns the year of the date instance.
   * @returns Number
   */

  get year() {
    return this.date.getFullYear()
  }

  /** 
   * Returns the month index of the date instance.
   * @returns Number
   */

  get month() {
    return this.date.getMonth()
  }

  /** 
   * Returns the date of the date instance.
   * @returns Number
   */

  get day() {
    return this.date.getDate()
  }

  /** 
   * returns the hour of the date instance.
   * @returns Number
   */

  get hour() {
    return this.date.getHours()
  }


  /** 
   * returns the hour of the minute instance.
   * @returns Number
   */

  get min() {
    return this.date.getMinutes()
  }

    /** 
   * returns the hour of the second instance.
   * @returns Number
   */

  get secs() {
    return this.date.getSeconds()
  }

    /** 
   * returns a formatted string representation of date instance.
   * @param String f
   * @returns String
   */


  format(f=false) {
    if (f === false) {
      return `${this.year} ${months_f[this.month]} ${this.day}`
    }
    else {
      let time = ""
      for (let i = 0; i < f.length; i += 1) {
        if (f[i] in this.chars) {
          time += this.chars[f[i]]
        }
        else {
          time += f[i]
        }
      }
      return time
    }
  }

  /** 
   * returns a string denoting time difference between now and time from 
   * the date insance.
   * @returns String
   */

  when() {
    const today = new Date()
    let diff = today.getTime() - this.date.getTime()
    if (diff === 0) {
      return "today"
    }
    diff /= 1000
    if (Math.abs(diff) < 60) {
      return `${diff.toFixed(0)} second${diff.toFixed(0) > 1? 's' : ''}` + (diff < 0 ? ` from now` : ` ago`)
    } 
    diff /= 60
    if (Math.abs(diff) < 60) {
      return `${diff.toFixed(0)} minute${diff.toFixed(0) > 1? 's' : ''}` + (diff < 0 ? ` from now` : ` ago`)
    }
    diff /= 60
    if (Math.abs(diff) < 24) {
      return `${diff.toFixed(0)} hour${diff.toFixed(0) > 1? 's' : ''}` + (diff < 0 ? ` from now` : ` ago`)
    }
    diff /= 24
    if (Math.abs(diff) < 30) {
      return `${diff.toFixed(0)} day${diff.toFixed(0) > 1? 's' : ''}` + (diff < 0 ? ` from now` : ` ago`)
    }
    diff /= 30
    if (Math.abs(diff) < 12) {
      return `${diff.toFixed(0)} month${diff.toFixed(0) > 1? 's' : ''}` + (diff < 0 ? ` from now` : ` ago`)
    }
    diff /= 12
    return `${diff.toFixed(0)} year${diff.toFixed(0) > 1? 's' : ''}` + (diff < 0 ? ` from now` : ` ago`)
  }

}


  /** 
   * pads a single digit number with 0 and returns it as string.
   * @param Number num
   * @returns String
   */

function pad(num){
  if(num < 10) {
    return `0${num}`
  }
  return `${num}`
}
