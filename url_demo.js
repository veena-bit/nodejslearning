const url =  require('url')

const myurl = new URL("https://support4covid.com/test?id=100&name=veena")

//serialized url

console.log(myurl.href)

console.log(myurl.hostname)

console.log(myurl.host)

console.log(myurl.pathname)

console.log(myurl.searchParams)

myurl.searchParams.forEach((value,name) => console.log(` ${value} :  ${name}`))
