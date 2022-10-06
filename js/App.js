window.addEventListener('load',()=>{
    if(!document.cookie && !authorizeCookie()){
        location.href='effervescent-kashata-846664.netlify.app/login.html'
    }
})
const authorizeCookie=()=>{
    let token=document.cookie.slice(document.cookie.indexOf('=')+1)
    if(token===localStorage.getItem('userToken')){
        return true
    }
}
