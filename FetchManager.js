

class FetchManager {
	constructor(fileName) {
		this.fileName = fileName
	}
	Parse() {
		fetch(this.fileName).then(function(response) {
		    return response.json()
		}).then(function(json) {
		    console.log('Parsed JSON from the response:', json)
		}).catch(function(ex) {
		    console.log('Parsed JSON from the response:', ex)
		})
	}
	Status() {
		fetch(this.fileName).then(function(response) {
		    console.log('Status:', response.status)
		    console.log('Status Text:', response.statusText)
		    console.log('Response Type:', response.type)
		    console.log('Request URL:', response.url)
		    console.log('Content-Type: ' + response.headers.get('Content-Type'))
		    console.log('Date: ' + response.headers.get('Date'))
		})
	}
	
}
fetch('users.html').then(function(response) {
    return response.text()
}).then(function(body) {
    console.log(body)
})