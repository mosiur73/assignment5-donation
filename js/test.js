//move Home to Blog page
 const move=document.querySelector('#btn-blog');
 move.addEventListener('click',function(){
    document.getElementById('donate').classList.add('hidden');
    window.location.href = './blog.html';
})

//move Blog to Home page
function goToHome() {
     window.location.href='./index.html'
}
