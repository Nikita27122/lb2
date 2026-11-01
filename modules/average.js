function calculateAverage(data) {
    if (!data || data.length === 0) return 0;
    const sum = data.reduce((acc, student) => acc + student.score, 0);
    return sum / data.length;
}

module.exports = { calculateAverage };