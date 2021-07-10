const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

let getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
};

let createPost = (post, callback) => {
  setTimeout(() => {
    post.push(post);
    callback();
  }, 2000);
};

getPosts();
createPost({ title: "Post Three", body: "This is post three" }, getPosts);

/*
    As this is asynchronous createPost takes longer then make post,
    this is an issue as it will not be updated in the DOM

    This is where asynchronicity comes in. Specifically Ajax
*/
