 let preloader =  document.querySelector('.preloader');
        window.addEventListener('load', function () {
            setInterval(() => {
               preloader.style.display = 'none'                
            }, 1000);
        })
