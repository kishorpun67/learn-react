async function add() {
    const kathmanduWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('40')
        }, 200)
    })
    const pokharaWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('20')
        }, 7000)
    })
    console.log('fetching weather of kathmandu')
    const kathmandu = await kathmanduWeather
    console.log('weather has been feteched')


    console.log('fetching weather of pokhara')
    const pokhara = await pokharaWeather
    console.log('kathmandu weather has been feteched')
    return[kathmandu, pokhara]
  }
  let a = add()
  a.then((a)=>{
      console.log(a)
  })