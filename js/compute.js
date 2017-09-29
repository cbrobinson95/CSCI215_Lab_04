var I = [];

I[0] = [];
I[0][0] = “Array Position 0”;
I[0][1] = “Array Position 1”;
I[0][2] = “Array Position 2”;
I[0][3] = “Array Position 3”;
I[0][4] = “Array Position 4”;

I[1] = [];
I[1][0] = 'http://munsellb.people.cofc.edu/img/pound.jpeg’;
I[1][1] = 'http://munsellb.people.cofc.edu/img/euro.jpeg’;
I[1][2] = 'http://munsellb.people.cofc.edu/img/kroon.jpeg’;
I[1][3] = 'http://munsellb.people.cofc.edu/img/canadian.jpeg’;
I[1][4] = 'http://munsellb.people.cofc.edu/img/canadian.jpeg’;

document.write(I[0][0] + “I[1][0]”);
document.write(I[0][1] + “I[1][1]”);
document.write(I[0][2] + “I[1][2]”);
document.write(I[0][3] + “I[1][3]”);
document.write(I[0][4] + “I[1][4]”);

convert() {
    var dollar = document.getElementsbyName(“dollars”)[0].value;
    var selectElement = document.getElementbyId(‘currency’);
    var exchangeRate = selectElement.value;
    var index = selectElement.selectedIndex;
    var currency = selectElement.options[index].text;
}

updateExchange(dollar, exchangeRate, currency, index); {

}

calculate(dollar, exchangeRate); {
    return dollar*echangeRate
}