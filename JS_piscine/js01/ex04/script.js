

window.onload = function(){
    const article = document.querySelectorAll('.section');
    const articleCount = article.length;
    article.forEach(function(item, index){
        item.addEventListener('mousewheel', function(event){
            event.preventDefault();
            let delta = 0;

            if(!event) event = window.event;
            if(event.wheelDelta){
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            }
            else if (event.detail)
            delta = -event.detail / 3;

            let moveTop = window.scrollY;
            let articleSelector = article[index];

            if(delta <0){
                if (articleSelector !== articleCount-1){
                    try{
                        moveTop = window.pageYOffset + articleSelector.nextElementSibling.getBoundingClientRect().top;
                    }catch(e){}
                }
            }

            else {
                if (articleSelector !== 0) {
                    try {
                        moveTop = window.pageYOffset + articleSelector.previousElementSibling.getBoundingClientRect().top;
                    } catch (e) { }
                }
            }

            const body = document.querySelector('html');
            window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
                });
    });
} 
