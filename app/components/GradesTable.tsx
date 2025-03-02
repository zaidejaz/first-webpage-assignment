import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table"

type Subject = {
    name: string;
    creditHours: number;
    grade: string;
}

const subjects = [
    { name: "Applied Physics", creditHours: 3, grade: "A" },
    { name: "English Composition & Comprehension", creditHours: 3, grade: "B+" },
    { name: "Programming Fundamentals", creditHours: 4, grade: "B+" },
    { name: "Object Oriented Programming", creditHours: 4, grade: "B+" },
    { name: "Communication and Presentation Skills", creditHours: 3, grade: "B+" },
    { name: "Quranic Studies", creditHours: 3, grade: "B+" },
    { name: "Introduction to Social Media Marketing", creditHours: 3, grade: "B+" },
    { name: "Introduction to Computer Programming", creditHours: 3, grade: "B" },
    { name: "Discrete Structures", creditHours: 4, grade: "C" },
    { name: "Calculus & Analytical Geometry", creditHours: 3, grade: "C" },
    { name: "Digital Logic Design", creditHours: 3, grade: "C" },
    { name: "Multivariate Calculus", creditHours: 3, grade: "C" },
    { name: "Linear Algebra", creditHours: 3, grade: "A" },
    { name: "Introduction to Software Engineering", creditHours: 3, grade: "D" },
    { name: "Islamic World View and Civilization", creditHours: 3, grade: "B+" },
    { name: "Introduction to Database System", creditHours: 4, grade: "B+" },
    { name: "Data Structure and Algorithms", creditHours: 4, grade: "B+" },
    { name: "Object Oriented Analysis and Design", creditHours: 3, grade: "B" },
    { name: "Differential Equation", creditHours: 3, grade: "B+" },
    { name: "Probability & Statistics", creditHours: 3, grade: "B+" },
    { name: "Design and Analysis of Algorithms", creditHours: 3, grade: "D+" },
    { name: "Operating System", creditHours: 4, grade: "C" },
    { name: "Computer Networks", creditHours: 4, grade: "A" },
    { name: "Numerical Computing", creditHours: 3, grade: "C" },
    { name: "Advance Computer Programming", creditHours: 4, grade: "B+" },
];

const gradeOrder = ["A", "B+", "B", "C", "D+", "D"];

subjects.sort((a, b) => {
    const gradeA = gradeOrder.indexOf(a.grade);
    const gradeB = gradeOrder.indexOf(b.grade);
    return gradeA - gradeB;
});

export function GradesTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Credit Hours</TableHead>
                    <TableHead>Grade</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {subjects.map((subject) => (
                    <TableRow key={subject.name}>
                        <TableCell className="font-medium">{subject.name}</TableCell>
                        <TableCell>{subject.creditHours}</TableCell>
                        <TableCell className="text-right">{subject.grade}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={2}>CGPA</TableCell>
                    <TableCell className="text-right">3.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
