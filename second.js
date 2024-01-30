
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 60 },
    { name: 'Charlie', score: 92 },
    { name: 'David', score: 75 }
];

function Threshold(studentarr, threshold) {
    const Thresholdnames = [];
    for (const student of studentarr) {
        if (student.score > threshold) {
            Thresholdnames.push(student.name);
        }
    }

    return Thresholdnames;
}

const thresholdValue = 70;
const Thresholdnames = Threshold(students, thresholdValue);

console.log(Thresholdnames); 
document.write(Thresholdnames);