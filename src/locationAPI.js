//turns location into lat and long coords
const locationAPI = (()=>{
  const apiKey = "e5b25352c0f62a"

  async function getCoords(address){
    //use api to get coordinates of the address
    const response = await fetch(`https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${address}&format=json`,{mode: 'cors'});
    const data = await response.json();

    let str = data[0].display_name.split(",");
    let location = `${str[0]}, ${str[str.length-1]}`;

    let coords = [Math.round(data[0].lat*100)/100,Math.round(data[0].lon*100)/100,location];

    return coords;
  }

  return {getCoords};

})();

export default locationAPI;