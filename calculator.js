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



const main = async () => {
    drawerPrices = await getPrices();
    
    let cabWidth = document.getElementById('cabWidth').value;
    let drawerMaterial = document.getElementById('drawerFinish').value;
    let twoInch = document.getElementById('twoInch').value;
    let fourInch = document.getElementById('fourInch').value;
    let sevenInch = document.getElementById('sevenInch').value;
    let configPrice = document.getElementById('configPrice').value;

    // console.log(drawerPrices[12][4]["Aspen"])

    const calcTotal = (width, material) => {
        let priceA = drawerPrices[width][2][material];
        let priceB = drawerPrices[width][4][material];
        let priceC = drawerPrices[width][7][material];

        let drawerA = priceA * twoInch;
        let drawerB = priceB * fourInch;
        let drawerC = priceC * sevenInch;

        let drawerTotal = drawerA + drawerB + drawerC;
        let total = parseFloat(drawerTotal) + parseFloat(configPrice);

        document.getElementById('drawerTotal').innerHTML = `$${drawerTotal}`;
        document.getElementById('total').innerHTML = `$${total}`
    }
    
    calcTotal(cabWidth, drawerMaterial)

}