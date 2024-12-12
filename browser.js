const userInput = document.getElementById('user-input');
var wsUrl = 'ws://' + window.location.host 
var ws = new WebSocket(wsUrl + '/data')

ws.onmessage = function(e) {
  console.log(e.data)
}

ws.onopen = function() {
  console.log('opening...')
  ws.send(userInput)
}

ws.onerror = function(error) {
  console.log('WEbSocket error ' + error)
  console.dir(error)
}
