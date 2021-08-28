// var hello = 'Hello';
// let world = 'Hello world';
// const helloWorld = 'Hello world!';

// const anotherFunction = () => {
//     console.log(hello);
//     console.log(world);
//     console.log(helloWorld);
// }

// anotherFunction();

const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`>>>> $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();
// moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);


