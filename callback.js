const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';



const getPeople = (id) => {
  const lukeURL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
  const options = {
    crossDomain: true
  }
  $.get(lukeURL, options, (res) =>console.log(res.name));
}

getPeople(1)
getPeople(2)
getPeople(3)
getPeople(4)

