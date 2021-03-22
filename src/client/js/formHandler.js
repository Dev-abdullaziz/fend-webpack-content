function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    fetch('http://localhost:8081/key')
    .then(res => console.log(res.body)) 
    // .then(data => {
    //    let key = data;
    //     console.log(key)
    //     })
    

    console.log("::: Form Submitted :::")
    fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&of=json&txt=${formText}&model=product&lang=en`)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `Confidence: ${res.sentence_list[0].confidence} <br>Score Tag: ${res.sentence_list[0].score_tag}`
    })
}

export { handleSubmit }
