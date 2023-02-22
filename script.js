

let url = '/login.html'
const features = 'scroll=no,width=500,height=300'
function openWindow(){
    window.open(url,
        '_blank',
        features)
}


const link = document.querySelector('a')

loginBtn = document.querySelector('.login-btn')
loginBtn.addEventListener('click',openWindow)
