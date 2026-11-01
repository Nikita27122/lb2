const { calculateAverage } = require('./modules/average');
const { findTopStudent } = require('./modules/topStudent');
const { filterFailed } = require('./modules/failed');
const { addLetterGrade } = require('./modules/letterGrade');

const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

// Экспортируем данные и функции для отчёта
module.exports = {
    grades,
    calculateAverage,
    findTopStudent,
    filterFailed,
    addLetterGrade
};

// Демонстрация работы
if (require.main === module) {
    const PASS_SCORE = 60;

    console.log("=== Анализ успеваемости ===\n");

    console.log("Средний балл:");
    console.log(`  ${calculateAverage(grades).toFixed(2)}\n`);

    console.log("Лучший студент:");
    console.log(`  ${findTopStudent(grades)}\n`);

    console.log(`Не сдали (балл < ${PASS_SCORE}):`);
    console.log(`  ${filterFailed(grades, PASS_SCORE).join(", ")}\n`);

    console.log("Оценки с буквенными грейдами:");
    addLetterGrade(grades).forEach(s => {
        console.log(`  ${s.name}: ${s.score} → ${s.letter}`);
    });
}