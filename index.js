const button = document.getElementById('primary-bttn')
const ideaContainer = document.getElementById("idea-container")
const subtitile = document.getElementById('subtitle')
const placeholderText = document.getElementById('placeholder-text')
const activity = document.getElementById('activity')


button.addEventListener("click", function() {
    activity.innerText = ``
    subtitile.innerText = "Thinking..."
    
    function newActivityFound() {
        return subtitile.innerText = "New actvity identified"
    }

    function placeholderLoading() {
        return placeholderText.innerHTML= "A new activity is on the way..."
    }

    setTimeout(placeholderLoading, 100)
    
    setTimeout(newActivityFound, 1250)

    setTimeout(fetchData, 1235)

    function fetchData() {
        fetch("https://apis.scrimba.com/bored/api/activity")
            .then(response => response.json())
            .then((data) => {
                // console.log(data)
                // ideaContainer.innerHTML = `
                // <p id="activity">${data.activity}.</p>
                // `
                placeholderText.innerText =``
                activity.innerText = `${data.activity}.`
            })
    }
})