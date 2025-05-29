// from index to blog page
const redirectIndex = document.getElementById("redirect-index");
if (redirectIndex) {
    redirectIndex.addEventListener("click", function(){
        window.location.href="./blog.html";
    });
}

// from blog to index page
const redirectBlog = document.getElementById("redirect-blog");
if (redirectBlog) {
    redirectBlog.addEventListener("click", function(){
        window.location.href="./index.html";
    });
}