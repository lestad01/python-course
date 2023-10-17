async function getData (id) {
    let res = await fetch("https://gorest.co.in/public/v1/posts/" + id);
    return await res.json();

}


console.log(window.location.search);
let urlData = new URLSearchParams(window.location.search);
let id = urlData.get("post_id");

let postData = await getData(id);
console.log(postData);


function createPost(post) {
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    h2.textContent = post.title;
    p.textContent = post.body;
    document.title = post.title;
    document.body.append(h2);
    document.body.append(p);
}

createPost(postData.data);

//console.log(await getData(16882));