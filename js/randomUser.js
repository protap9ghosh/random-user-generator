const userTitle = document.getElementById('look');
userTitle.style.fontSize = '40px';


const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(response => response.json())
        .then(data => displayUser(data));
}

const displayUser = user => {
    const userInfo = document.getElementById('user-info');
    userInfo.style.backgroundColor = "#e1e5f2"
    userInfo.style.paddingLeft = "10px"

    const userPic = document.getElementById('userPic');

    const image = document.createElement('img');
    image.style.borderRadius = '50%'
    image.src = (`${user.results[0].picture.large}`)
    userPic.appendChild(image)

    const userName = document.getElementById('name');
    userName.innerText = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last
    userName.style.fontStyle = 'italic';

    const email = document.getElementById('email');
    email.innerText = user.results[0].email
    email.style.fontStyle = 'italic';

    const phone = document.getElementById('phone');
    phone.innerText = user.results[0].phone
    phone.style.fontStyle = 'italic';

    const country = document.getElementById('country');
    country.innerText = user.results[0].location.country
    country.style.fontStyle = 'italic';

    const city = document.getElementById('city');
    city.innerText = user.results[0].location.city
    city.style.fontStyle = 'italic';

    const postcode = document.getElementById('postcode');
    postcode.innerText = user.results[0].location.postcode
    postcode.style.fontStyle = 'italic';

    const gender = document.getElementById('gender');
    gender.innerText = user.results[0].gender;
    gender.style.fontStyle = 'italic';

    console.log(user.results[0])
}

loadUser();
