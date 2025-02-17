const grades = Array.from({length: 12}, () => Math.floor(Math.random() * 100) + 1);

const sum = grades[0] + grades[1] + grades[2] + grades[3] + grades[4] + grades[5] + grades[6] + grades[7] + grades[8] + grades[9] + grades[10] + grades[11];
const averageGrade = sum / grades.length;

const maxGrade = Math.max(...grades);
const minGrade = Math.min(...grades);

const positiveGradesCount = grades.filter((grade => {
    return grade >=60})).length;

    const negativeGradesCount = grades.filter((grade =>
    {return grade < 60})).length;


    const letterGrades = grades.map(grade => getLetterGrade(grade));
    
    function getLetterGrade(grade) {
        if(grade >= 80)  return "A";
        else if(grade >= 60)  return "B";
        else if(grade >= 40) return "C";
        else if(grade >= 20) return "D";
        else return "E";
    }


console.log("Оценки:", grades);
console.log("Средний балл:", averageGrade);
console.log("Максимальный балл:", maxGrade);
console.log("Минимальный балл:", minGrade);
console.log("Количество положительных оценок:", positiveGradesCount);
console.log("Количество отрицательных оценок:", negativeGradesCount);
console.log("Буквенные оценки:", letterGrades);