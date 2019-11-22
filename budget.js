let money = +prompt("Ваш бюджет на месяц?", ''),
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};



// for (let i = 0; i < 2; i++) {
//   a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = +prompt("Во сколько обойдется?", '');
//   if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
//     a != '' && b != '' && a.length < 50) {
//     appData.expenses[a] = b;
//     console.log("ok");
//   } else {
//     a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//       b = +prompt("Во сколько обойдется?", '');
//     appData.expenses[a] = b;
//     console.log("else работает");
//   }
// };

let i = 0;
while (i < 2; i++) {
  a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = +prompt("Во сколько обойдется?", '');
  if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
    a != '' && b != '' && a.length < 50) {
    appData.expenses[a] = b;
    console.log("ok");
  } else {
    a = prompt("Введите обязательную статью расходов в этом месяце", ''),
      b = +prompt("Во сколько обойдется?", '');
    appData.expenses[a] = b;
    console.log("else работает");
  }
};



appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет " + appData.moneyPerDay);

if (appData.moneyPerDay < 500) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else("Произошла ошибка");