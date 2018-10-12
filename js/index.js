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
$(document).ready(function() {
    $('.smooth').click(function(e) {
        e.preventDefault();
        let linkHref = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(linkHref).offset().top
        }, 850)
    });

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 100) {
                $('#comeback').fadeIn();
            } else {
                $('#comeback').fadeOut();
            }
        });
        $('#comeback').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
        });
    });
});
