class Cookie {
    constructor() {
        this.form=document.querySelector('.login-form')
        this.username=document.getElementById('username')
        this.password=document.getElementById('password')
        this.checkbox=document.querySelector('.ck')
        this.usernameRegex=/^([^\_\.])([\w\d]+)$/i
        this.passwordRegex=/^([\w\d\@\#]){8,12}$/i
        this.cookieName='userCookie'
        this.start()
    }
    start=()=>{
        this.form.addEventListener('submit',e=>{
            e.preventDefault()
            if(this.usernameRegex.test(this.username.value) && this.passwordRegex.test(this.password.value)){
                if(this.checkbox.checked){
                    let token=this.generateRandomToken
                    this.storeToken(token)
                    this.createCookie(this.cookieName,token,3)
                }
                this.clearInput()
            }
        })

    }
    createCookie=(name,token,exDay)=>{
        let date=new Date()
        date.setTime(date.getTime() +(exDay *24*60*60*1000))
        document.cookie=`${name}=${token};path=/;expires=${date}`
    }
    clearInput=()=>{
        this.username.value=''
        this.password.value=''
        this.checkbox.checked=false
    }
    get generateRandomToken(){
        const rand = () => {
            return Math.random().toString(36).substr(2);
        };

        const token = () => {
            return rand() + rand();
        };
        return token()
    }
    storeToken(token){
        localStorage.setItem('userToken',token)
    }
}
new Cookie()


