const D = require('./date')

const date1 = new D(2017, 0, 2, 3, 4, 5)
const date2 = new D(2019, 0, 2, 3, 4, 5)
const date3 = new D('9/26/1965')

test('Test working', ()=> {
    // passing
})

test('Year getter', () => {
    expect(date1.year).toBe(2017)
    expect(date2.year).toBe(2019)
    expect(date3.year).toBe(1965)
})

test('Month getter', () => {
    expect(date1.month).toBe(0)
    expect(date2.month).toBe(0)
    expect(date3.month).toBe(8)
})

test('Date getter', () => {
    expect(date1.day).toBe(2)
    expect(date2.day).toBe(2)
    expect(date3.day).toBe(26)
})

test('Hour getter', () => {
    expect(date2.hour).toBe(3)
    expect(date1.hour).toBe(3)
    expect(date3.hour).toBe(0)
})

test('Min getter', () => {
    expect(date2.min).toBe(4)
    expect(date1.min).toBe(4)
    expect(date3.min).toBe(0)
})

test('Seconds getter', () => {
    expect(date2.secs).toBe(5)
    expect(date1.secs).toBe(5)
    expect(date3.secs).toBe(0)
})

test('Format tests', () => {
    // const date2 = new D(2019, 0, 2, 3, 4, 5)
    expect(date2.format()).toBe("2019 January 2")
    expect(date2.format('y/m/d')).toBe('19/Jan/2')
    expect(date2.format('H:I:S')).toBe('03:04:05')
    expect(date2.format('h:i:s')).toBe('3:4:5')
    expect(date2.format('H/I/S')).toBe('03/04/05')
    expect(date2.format('Y-M-D h:I:S')).toBe('2019-January-02 3:04:05')
    expect(date2.format('d/y/m')).toBe('2/19/Jan')
})

test('When tests', () => {
    let today = new Date()
    today.setSeconds(today.getSeconds() - 4)
    expect(new D(today).when()).toBe('4 seconds ago')

    today.setMinutes(today.getMinutes() - 4)
    expect(new D(today).when()).toBe('4 minutes ago')

    today.setHours(today.getHours() - 4)
    expect(new D(today).when()).toBe('4 hours ago')

    today.setDate(today.getDate() - 4)
    expect(new D(today).when()).toBe('4 days ago')

    let diff = today.getFullYear() - 2019
    expect(date2.when()).toBe(`${diff} year${diff.toFixed(0) > 1? 's' : ''} ago`)
    diff = today.getFullYear() - 2017
    expect(date1.when()).toBe(`${diff} year${diff.toFixed(0) > 1? 's' : ''} ago`)
    expect(new D(new Date()).when()).toBe('today')
    diff = today.getMonth() - 1
    expect(new D(`${diff}/${today.getDate()}/${today.getFullYear()}`).when()).toBe(`${1} month ago`)
})