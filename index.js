const button = document.getElementById('primary-bttn')
const ideaContainer = document.getElementById("idea-container")
const subtitile = document.getElementById('subtitle')
const placeholderText = document.getElementById('placeholder-text')
const activity = document.getElementById('activity')


button.addEventListener("click", function() {
    subtitile.innerText = "Thinking..."
    
    function newActivityFound() {
        return subtitile.innerText = "New actvity identified"
    }
    
    setTimeout(newActivityFound, 1250)

    setTimeout(fetchData, 1205)

    function fetchData() {
        fetch("https://apis.scrimba.com/bored/api/activity")
            .then(response => response.json())
            .then((data) => {
                placeholderText.innerText =``
                activity.innerText = `${data.activity}.`
            })
    }
})