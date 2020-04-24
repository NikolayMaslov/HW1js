let money=+prompt("Ваш бюджет на месяц?","");
let time=prompt("Введите дату в формате YYYY-MM-DD","");
let appData={
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false
};
let a=prompt("Введите обязательную статью расходов в этом месяце");
let b=prompt("Во сколько обойдется?","");
appData.expenses[a]=b;
console.log(appData);
a=prompt("Введите обязательную статью расходов в этом месяце");
b=prompt("Во сколько обойдется?","");
appData.expenses[a]=b;
console.log(appData);
alert("Бюджет пользователя на 1 день " + money/30);