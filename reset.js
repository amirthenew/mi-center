let tryUrl = 'try.html'
let cancelBtn = document.querySelector('.cancel')
let changeBtn = document.querySelector('.change')
const features = 'scroll=no,width=200,height=150'
cancelBtn.addEventListener('click',()=>{
    window.close()
})

changeBtn.addEventListener('click',()=>{
    window.open(tryUrl,
        '_blank',
        features)
        window.close()
})


