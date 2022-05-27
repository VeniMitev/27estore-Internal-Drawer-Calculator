const getPrices = async () => {
    const requestURL = './drawer-prices.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const data = await response.json();

    return data;
}

const priceLog = async () => {
    drawerPrices = await getPrices();

    console.log(drawerPrices)
}

const main = async () => {
    drawerPrices = await getPrices();
    
    let cabWidth = document.getElementById('cabWidth').value;
    let configPrice = document.getElementById('configPrice').value;
    let twoInch = document.getElementById('twoInch').value;
    let fourInch = document.getElementById('fourInch').value;
    let sevenInch = document.getElementById('sevenInch').value;
    let drawerMaterial = document.getElementById('drawerFinish').value;

    const calcTotal = (width, material) => {
        let drawer = (a) => {
            let price = drawerPrices[width][a][material];
        
            if (isNaN(price)) price = 0;

            return price;
        }

        let drawerTotal = (drawer(2) * twoInch) + (drawer(4) * fourInch) + (drawer(7) * sevenInch);

        let total = parseFloat(drawerTotal) + parseFloat(configPrice);

        document.getElementById('drawerTotal').innerHTML = `$${drawerTotal.toFixed(2)}`;
        document.getElementById('total').innerHTML = `<h3>$${total.toFixed(2)}</h3>`
    }
    
    calcTotal(cabWidth, drawerMaterial)

}