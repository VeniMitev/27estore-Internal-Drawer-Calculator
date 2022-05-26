const getPrices = async () => {
    const requestURL = './drawer-prices-2.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const data = await response.json();

    return data;
}

const priceLog = async () => {
    drawerPrices = await getPrices();

    console.log(drawerPrices)
}

const main = async (event) => {
    drawerPrices = await getPrices();
    event.preventDefault();

    let cabWidth = document.getElementById('cabWidth').value;
    let drawerMaterial = document.getElementById('drawerFinish').value;
    let twoInch = document.getElementById('twoInch').value;
    let fourInch = document.getElementById('fourInch').value;
    let sevenInch = document.getElementById('sevenInch').value;
    let configPrice = document.getElementById('configPrice').value;

    console.log(cabWidth);
    console.log(drawerMaterial);
    console.log(twoInch);
    console.log(fourInch);
    console.log(sevenInch);
    console.log(configPrice);

}