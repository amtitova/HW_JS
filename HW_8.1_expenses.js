let expenses = [
  {
    expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390],
  },
  {
    expenses: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    expenses: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

expenses.forEach(function (obj) {
  let total = 0;
  obj.expenses.forEach(function (value, index) {
    if (value > 1000) {
      total += value;
    } else {
      const date = new Date();
      date.setMonth(index);
      const month = date.toLocaleString("default", { month: "long" });
      console.log(month);
    }
  });
});
