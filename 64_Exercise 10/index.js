// // Problem 1
// Use a API From the Internet & Feed your app with list Data
let x = "https://jsonplaceholder.typicode.com/photos";
let response = fetch(x);
response
  .then((v) => v.json())
  .then((contest) => {
    console.log(contest);
    let ihtml = ""; // Initialize HTML string
    for (let item of contest.slice(0, 10)) { // Use `for-of` for iteration
      console.log(item);
      ihtml += `
        <div class="card" style="width: 18rem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7CKi-rsicg9Uaa_xCREaxnSdEdyad1_iBg&s"  <!-- Use dynamic thumbnail URL -->
          <div class="card-body">
            <h5 class="card-title">${item.id}</h5>
            <p class="card-text">
              <a href="${item.url}">Visit URL</a> <!-- Add meaningful link text -->
            </p>
            <p class="card-text">${item.title}</p>
            <a href="${item.thumbnailUrl}" class="btn btn-primary">Visit Here</a>
          </div>
        </div>`;
    }
    let cardbox = document.getElementById("cardbox"); // Ensure cardbox is defined
    cardbox.innerHTML = ihtml; // Inject the HTML
  })
  .catch((error) => console.error("Error fetching data:", error)); // Handle errors

// // Problem 2
// Create a Note saving app which stores your note to LocalStorage
// // Problem 3
// Repeat the Last Question & Fetch the Note which was saved
// // Problem 4
// Delete the note in the Previous Question
let n = localStorage.getItem("note");
alert("your note is "+n)
let note = prompt("Enter your note");
if(note){
  localStorage.setItem("note", note);
}
let d = confirm("Do you want to delete the note?");
if (d) {
  localStorage.removeItem("note");
  alert("Note has been deleted");
}
