async function fetchimage(){
    const apikey = "" // PUT YOUR API KEY HERE
const channel = document.getElementById('input').value


if (channel.startsWith("https://www.youtube.com/@")){
const cleanedChannel = channel.replace("https://www.youtube.com/@", "")
const response = await fetch('https://www.googleapis.com/youtube/v3/channels?forHandle=' + cleanedChannel + '&key=' + apikey + '&part=snippet&fields=items(snippet(thumbnails))')
const data = await response.json()
const size = document.getElementById('size').value

const url = data?.items?.[0]?.snippet?.thumbnails?.[size]?.url
if (url === undefined){document.getElementById('url').innerHTML = "Error: Channel Not Found"} else{
document.getElementById('url').innerHTML = url
document.getElementById('image').src = url}
console.log(channel)
} 
else {
const response = await fetch('https://www.googleapis.com/youtube/v3/channels?forHandle=' + channel + '&key=' + apikey + '&part=snippet&fields=items(snippet(thumbnails))')
const data = await response.json()
const size = document.getElementById('size').value
const url = data?.items?.[0]?.snippet?.thumbnails?.[size]?.url
if (url === undefined){document.getElementById('url').innerHTML = "Error: Channel Not Found"} else{
document.getElementById('url').innerHTML = url
document.getElementById('image').src = url}
}

    
}
