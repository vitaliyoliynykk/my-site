const burger = document.querySelector('.icon');
burger.addEventListener('click',burgerMenu);

function burgerMenu(e){
    e.preventDefault();
    const x = document.getElementById('topNav')
    if(x.className === 'topNav'){
        x.className += ' responsive';
    }
    else{
        x.className='topNav'
    }
}
