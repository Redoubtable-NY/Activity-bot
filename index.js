const button = document.getElementById('primary-bttn')
const ideaContainer = document.getElementById("idea-container")

button.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then((data) => {
            // console.log(data)
            return ideaContainer.innerHTML = `
            <p id="activity">${data.activity}.</p>
            `
        })
})