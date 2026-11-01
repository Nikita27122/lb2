function addLetterGrade(data) {
    return data.map(student => {
        let letter;
        if (student.score >= 90) letter = "A";
        else if (student.score >= 75) letter = "B";
        else letter = "C";
        return { ...student, letter };
    });
}

module.exports = { addLetterGrade };