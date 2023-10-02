//Database


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://oldagram-296fa-default-rtdb.firebaseio.com/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const postsInDb = ref(database, "oldgramPosts")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



const containerEl = document.querySelector("body")
const btnEl = document.querySelector(".btn-test")


function publishPost() {

    containerEl.innerHTML = ""

    createHeader()

    for (let i = 0; i < posts.length; i++) {
        let currentPost = posts[i];
        createPost(currentPost)
        push(postsInDb, currentPost)
    }

}




function createHeader(array) {
    
    let header = `
        <header>
            <div class="container" class="header-container">
                <img class="logo" src="images/logo.png" alt="logo image">
                <img class="header-profile-picture" src="images/user-avatar.png" alt="profile picture">
            </div>
        </header>
    `
    containerEl.innerHTML += header
}

function createPost(array) {
    let newPost = `
    <div class="main-container">

        <section class="user-info">
            <div class="container">
                <img class="avatar-img" src="${array.avatar}">
                <div>
                    <p class="bold-font">${array.name}</p>
                    <p>${array.location}</p>
                </div>
            <div>
        </section>

        <section class="post-img-section">
            <div class="container">
                <img class="post-img" src="${array.post}">
            </div>
        </section>

        <section class="footer">
            <div class="container">
                <div>
                    <button id="like-btn"></button>
                    <button id="comment-btn"></button>
                    <button id="dm-button"></button>
                </div>
                <p class="bold-font">${array.likes} likes</p>
                <p><span class="bold-font">${array.username}</span> ${array.comment}</p>
            </div>
        </section>
    </div>

    
    `
    containerEl.innerHTML += newPost
}




btnEl.addEventListener("click", function() {
    publishPost()
});