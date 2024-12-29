const button = document.getElementById('primary-bttn')
const ideaContainer = document.getElementById("idea-container")
const subtitile = document.getElementById('subtitle')
const placeholderText = document.getElementById('placeholder-text')


button.addEventListener("click", function() {
    subtitile.innerText = "Thinking..."
    
    function newActivityFound() {
        return subtitile.innerText = "New actvity identified"
    }

    function placeholderLoading() {
        return placeholderText.innerHTML= "Loading..."
    }

    setTimeout(placeholderLoading, 100)
    
    setTimeout(newActivityFound, 1200)

    setTimeout(fetchData, 1250)

    function fetchData() {
        fetch("https://apis.scrimba.com/bored/api/activity")
            .then(response => response.json())
            .then((data) => {
                // console.log(data)
                ideaContainer.innerHTML = `
                <p id="activity">${data.activity}.</p>
                `
            })
    }
})