const PRIORITY = {
  SUPER_HIGH: 'Super High', // 0
  HIGH: 'High', //1
  NORMAL: 'Normal', //2
  LOW: 'Low', //3
  BACKLOG: 'Backlog', //4
};

const array = [
  { id: 9, text: 'This is Normal', priority: 'Normal' },
  { id: 24, text: 'This is High', priority: 'High' },
  { id: 18, text: 'This is Normal', priority: 'Normal' },
  { id: 22, text: 'This is Low', priority: 'Low' },
  { id: 8, text: 'This is Normal', priority: 'Normal' },
  { id: 39, text: 'This is Backlog', priority: 'Backlog' },
  { id: 36, text: 'This is Super High', priority: 'Super High' },
  { id: 14, text: 'This is Normal', priority: 'Normal' },
  { id: 64, text: 'This is High', priority: 'High' },
  { id: 73, text: 'This is Super High', priority: 'Super High' },
  { id: 44, text: 'This is High', priority: 'High' },
  { id: 52, text: 'This is High', priority: 'High' },
  { id: 33, text: 'This is Backlog', priority: 'Backlog' },
  { id: 90, text: 'This is Normal', priority: 'Normal' },
  { id: 61, text: 'This is Normal', priority: 'Normal' },
  { id: 65, text: 'This is Low', priority: 'Low' },
  { id: 81, text: 'This is Backlog', priority: 'Backlog' },
  { id: 5, text: 'This is Normal', priority: 'Normal' },
  { id: 51, text: 'This is Low', priority: 'Low' },
  { id: 20, text: 'This is High', priority: 'High' },
  { id: 35, text: 'This is Low', priority: 'Low' },
  { id: 1, text: 'This is Low', priority: 'Low' },
  { id: 67, text: 'This is High', priority: 'High' },
  { id: 86, text: 'This is Low', priority: 'Low' },
  { id: 70, text: 'This is Normal', priority: 'Normal' },
  { id: 26, text: 'This is Backlog', priority: 'Backlog' },
  { id: 97, text: 'This is Super High', priority: 'Super High' },
  { id: 80, text: 'This is Low', priority: 'Low' },
  { id: 99, text: 'This is Backlog', priority: 'Backlog' },
  { id: 42, text: 'This is Super High', priority: 'Super High' },
  { id: 46, text: 'This is Backlog', priority: 'Backlog' },
  { id: 43, text: 'This is Normal', priority: 'Normal' },
  { id: 93, text: 'This is High', priority: 'High' },
  { id: 56, text: 'This is High', priority: 'High' },
  { id: 92, text: 'This is High', priority: 'High' },
  { id: 10, text: 'This is Low', priority: 'Low' },
  { id: 48, text: 'This is Backlog', priority: 'Backlog' },
  { id: 27, text: 'This is Super High', priority: 'Super High' },
  { id: 31, text: 'This is Low', priority: 'Low' },
  { id: 88, text: 'This is Normal', priority: 'Normal' },
  { id: 98, text: 'This is High', priority: 'High' },
  { id: 12, text: 'This is Backlog', priority: 'Backlog' },
  { id: 37, text: 'This is Super High', priority: 'Super High' },
  { id: 58, text: 'This is Normal', priority: 'Normal' },
  { id: 84, text: 'This is Low', priority: 'Low' },
  { id: 79, text: 'This is Normal', priority: 'Normal' },
  { id: 11, text: 'This is Super High', priority: 'Super High' },
  { id: 66, text: 'This is Super High', priority: 'Super High' },
  { id: 59, text: 'This is Backlog', priority: 'Backlog' },
  { id: 75, text: 'This is Backlog', priority: 'Backlog' },
  { id: 49, text: 'This is High', priority: 'High' },
  { id: 38, text: 'This is Low', priority: 'Low' },
  { id: 25, text: 'This is Normal', priority: 'Normal' },
  { id: 55, text: 'This is Low', priority: 'Low' },
  { id: 60, text: 'This is Super High', priority: 'Super High' },
  { id: 40, text: 'This is Normal', priority: 'Normal' },
  { id: 6, text: 'This is Low', priority: 'Low' },
  { id: 41, text: 'This is Low', priority: 'Low' },
  { id: 83, text: 'This is Super High', priority: 'Super High' },
  { id: 15, text: 'This is Super High', priority: 'Super High' },
  { id: 54, text: 'This is Super High', priority: 'Super High' },
  { id: 50, text: 'This is Backlog', priority: 'Backlog' },
  { id: 17, text: 'This is Normal', priority: 'Normal' },
  { id: 45, text: 'This is Normal', priority: 'Normal' },
  { id: 82, text: 'This is Super High', priority: 'Super High' },
  { id: 34, text: 'This is High', priority: 'High' },
  { id: 62, text: 'This is Super High', priority: 'Super High' },
  { id: 2, text: 'This is High', priority: 'High' },
  { id: 71, text: 'This is Low', priority: 'Low' },
  { id: 91, text: 'This is High', priority: 'High' },
  { id: 4, text: 'This is Super High', priority: 'Super High' },
  { id: 77, text: 'This is Backlog', priority: 'Backlog' },
  { id: 94, text: 'This is Low', priority: 'Low' },
  { id: 85, text: 'This is High', priority: 'High' },
  { id: 69, text: 'This is Backlog', priority: 'Backlog' },
  { id: 78, text: 'This is Super High', priority: 'Super High' },
  { id: 13, text: 'This is Super High', priority: 'Super High' },
  { id: 30, text: 'This is Super High', priority: 'Super High' },
  { id: 53, text: 'This is Backlog', priority: 'Backlog' },
  { id: 47, text: 'This is Super High', priority: 'Super High' },
  { id: 72, text: 'This is High', priority: 'High' },
  { id: 89, text: 'This is Normal', priority: 'Normal' },
  { id: 21, text: 'This is Super High', priority: 'Super High' },
  { id: 87, text: 'This is Low', priority: 'Low' },
  { id: 63, text: 'This is Low', priority: 'Low' },
  { id: 3, text: 'This is Backlog', priority: 'Backlog' },
  { id: 23, text: 'This is Backlog', priority: 'Backlog' },
  { id: 16, text: 'This is Super High', priority: 'Super High' },
  { id: 0, text: 'This is Super High', priority: 'Super High' },
  { id: 57, text: 'This is Backlog', priority: 'Backlog' },
  { id: 74, text: 'This is High', priority: 'High' },
  { id: 29, text: 'This is Low', priority: 'Low' },
  { id: 19, text: 'This is High', priority: 'High' },
  { id: 28, text: 'This is High', priority: 'High' },
  { id: 95, text: 'This is Normal', priority: 'Normal' },
  { id: 68, text: 'This is Backlog', priority: 'Backlog' },
  { id: 7, text: 'This is Super High', priority: 'Super High' },
  { id: 96, text: 'This is Low', priority: 'Low' },
  { id: 76, text: 'This is High', priority: 'High' },
  { id: 32, text: 'This is High', priority: 'High' },
];

const sortTasks = tasks => {
  const priorities = Object.values(PRIORITY);
  return [...tasks].sort((task1, task2) => {
    const task1Pr = priorities.indexOf(task1.priority);
    const task2Pr = priorities.indexOf(task2.priority);
    if (task1Pr < task2Pr) return -1;

    if (task1Pr === task2Pr) return task1.id - task2.id;

    return 1;
  });
};

const sorted = sortTasks(array);
// sorted[0].text = '!!!!!!!!!!!!';
console.table(sorted);
console.table('--------------------');
console.table(array);
