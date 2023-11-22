const tornaSuButton = document.querySelector('#tornaSu');

tornaSuButton.addEventListener('mouseover', function() {

tornaSuButton.style.cursor = 'pointer';

});

tornaSuButton.addEventListener('click', function() {

    window.scrollTo({
        top: 0,
    behavior: "smooth"    
   })

})