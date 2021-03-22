function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    fetch('http://localhost:8081/key')
    .then(res => res.text()) 
    .then(data => {
        fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${data}&of=json&txt=${formText}&model=product&lang=en`)
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = `Confidence: ${res.confidence} <br>Score Tag: ${res.sentence_list[0].score_tag} <br>Model: ${res.model}<br>Agreement: ${res.agreement}<br>Irony: ${res.irony}`
        })
    })
    
    console.log("::: Form Submitted :::")

}

export { handleSubmit }
