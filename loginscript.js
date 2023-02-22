
let cancel = document.querySelector('.cancel')
cancel.addEventListener('click',()=>{
    window.close()
})

let reset = document.querySelector('.reset')
let resetUrl = './reset.html'
const features = 'scroll=no,width=500,height=300'
reset.addEventListener('click',()=>{
    window.open(resetUrl,
        '_blank',
        features)
window.close()
    })


