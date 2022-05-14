// fetch(`https://api.nasa.gov/planetary/apod?api_key=BQ0ieYm6pqSVyF0vZIwUeI9kt6e9GnY4yw9Tjkaf`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         console.log(data)

//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });



document.querySelector('button').addEventListener('click', dispic)


function dispic() {
    let userdate = document.querySelector('input').value
    console.log(userdate)
    fetch(`https://api.nasa.gov/planetary/apod?date=${userdate}&api_key=BQ0ieYm6pqSVyF0vZIwUeI9kt6e9GnY4yw9Tjkaf`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data);
        document.querySelector("h2").innerText = data.title;
        document.querySelector('#pushin').innerText = data.explanation;
        if (data.media_type == 'image') {
            if (!(document.querySelector('iframe').classList.contains('hidden'))) {
                document.querySelector('iframe').classList.add('hidden')
            }
            document.querySelector('img').classList.remove('hidden');
            document.querySelector('img').src = data.hdurl;
        }
        if (data.media_type == 'video') {
            if (!(document.querySelector('img').classList.contains('hidden'))) {
                document.querySelector('img').classList.add('hidden')
            }
            document.querySelector('iframe').classList.remove('hidden')
            document.querySelector('iframe').src = data.url
        }
        

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}