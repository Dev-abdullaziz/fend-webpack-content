function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    let v = Math.floor(Math.random()*100);
    fetch(`https://jsonplaceholder.typicode.com/todos/${v}`)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.title
    })
}

export { handleSubmit }
