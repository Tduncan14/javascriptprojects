const btnEl = document.getElementById('btn');
const errorMessage = document.getElementById('errorMessage')
const galleryEl = document.getElementById('gallery');




function fetchImage() {

    const inputValue = document.getElementById('input').value;

    console.log(inputValue)


    if (inputValue >= 10 || inputValue <= 0) {
        errorMessage.style.display = 'block';
        errorMessage.innerText = "Number Needs to be less than 11 and great than 0"
        return


    }

    else {

        errorMessage.style.display = 'none';

        urls = ''
        fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=rbXICY6Rc9u-IvRFOfesUmLhkyazyV-BXysTVw2z9mo`).then((res) => res.json())
            .then((data) => {

                if (data) {
                    data.forEach((pic) => {



                        urls += `<img src=${pic.urls.small}  alt="image"/>`
                        galleryEl.style.display = 'block';
                        galleryEl.innerHTML = urls;

                    })
                }

            }

            );


    }






}





btn.addEventListener('click', fetchImage)

