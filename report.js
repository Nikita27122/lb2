const {
    grades,
    calculateAverage,
    findTopStudent,
    filterFailed,
    addLetterGrade
} = require('./main');

const PASS_SCORE = 60;

console.log("=== ОТЧЁТ: Анализ успеваемости ===\n");

console.log("1) Средний балл группы:");
console.log(`   ${calculateAverage(grades).toFixed(2)}\n`);

console.log("2) Студент с максимальным баллом:");
console.log(`   ${findTopStudent(grades)}\n`);

console.log(`3) Студенты с баллом ниже ${PASS_SCORE}:`);
console.log(`   ${filterFailed(grades, PASS_SCORE).join(", ")}\n`);

console.log("4) Итоговая таблица с буквенными оценками:");
console.table(addLetterGrade(grades));