window.addEventListener('load',()=>{
    if(!document.cookie && !authorizeCookie()){
        location.href='http://localhost:63342/cookie%20project/login.html?_ijt=n2rlr947rn316k4pe9iv0l1g0g&_ij_reload=RELOAD_ON_SAVE'
    }
})
const authorizeCookie=()=>{
    let token=document.cookie.slice(document.cookie.indexOf('=')+1)
    if(token===localStorage.getItem('userToken')){
        return true
    }
}