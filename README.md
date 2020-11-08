![npm](https://img.shields.io/npm/v/@iamshaash/datelib)
![GitHub](https://img.shields.io/github/license/sprajjwal/few21-date_lib)
![npm bundle size](https://img.shields.io/bundlephobia/min/@iamshaash/datelib)
![GitHub issues](https://img.shields.io/github/issues/sprajjwal/few21-date_lib)

# Date Library

The most awesome Date library that can:
  
  - Can return date, month, year, hour, minutes and seconds.
  - Print dates in the given format:

    - 'Y' -> 2019 (Year full)
    - 'y' -> 19 (Year short)
    - 'M' -> July (Month full)
    - 'm' -> Jul (Month short)
    - 'D' ->  01 (date padded)
    - 'd' -> 1 (date)
    - 'H' -> 05 (Hours padded)
    - 'h' -> 5 (Hours)
    - 'I' -> 08 (Minutes padded)
    - 'i' -> 8 (Minutes)
    - 'S' -> 04 (Seconds padded)
    - 's' -> 4 (Seconds)

    ```js
    // Make a date with values for Y, M, D etc.
    const d = new D(2017, 0, 2, 3, 4, 5)
    console.log(d.format())              // 2017 January 02
    console.log(d.format('y/m/d'))       // 17/Jan/2
    console.log(d.format('H:I:S'))       // 03:04:05
    console.log(d.format('h:i:s'))       // 3:4:5
    console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 
    ```

  - Get time difference between the time object and right now.

  ```js
  const d = new D()
  console.log(d.when()) // today
  ```