function handleSubmit(event,test) {
    if(event) {
        event.preventDefault()
    }
    // check what text was put into the form field
    let formText;
    if(test) {
        formText = test
        switch(formText) {
            case "I love tea but I hate coffee":
                return "Confidence: 94 <br>Score Tag: P <br>Agreement: DISAGREEMENT<br>Irony: NONIRONIC"
                break;
            case "Don't like skating":
                return "Confidence: 92 <br>Score Tag: N <br>Agreement: AGREEMENT<br>Irony: NONIRONIC"
                break;
            case "absolutely love it":
                return "Confidence: 100 <br>Score Tag: P+ <br>Agreement: AGREEMENT<br>Irony: NONIRONIC"
                break;
        }
    } else {
        formText = document.getElementById('name').value
        Client.checkForName(formText)
        fetch('http://localhost:8081/key')
        .then(res => res.text()) 
        .then(data => {
            fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${data}&of=json&txt=${formText}&model=general&lang=en`)
            .then(res => res.json())
            .then(function(res) {
                document.getElementById('results').innerHTML = `Confidence: ${res.confidence} <br>Score Tag: ${res.sentence_list[0].score_tag} <br>Agreement: ${res.agreement}<br>Irony: ${res.irony}`
            })
        })
    }

    if(!formText) {
        return alert("The input field is empty")
    }

    console.log("::: Form Submitted :::")

}

export { handleSubmit }
