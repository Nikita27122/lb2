function findTopStudent(data) {
    if (!data || data.length === 0) return null;
    const top = data.reduce((best, student) =>
        student.score > best.score ? student : best
    );
    return top.name;
}

module.exports = { findTopStudent };