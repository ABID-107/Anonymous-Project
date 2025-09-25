import { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ getMarks }) => {
    const marksData = use(getMarks)
    const resData = marksData.data

    const marksGetByMap = resData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            math: studentData.subjects.math,
            eng: studentData.subjects.english,
            science: studentData.subjects.science,
        }
        const avg = (student.math + student.eng + student.science) / 3
        const twoDigit = avg.toFixed(2)
        student.avg = twoDigit
        return student;
    }
    )

    console.log(marksGetByMap)
    return (
        <div>
            <BarChart width={1000} height={500} data={marksGetByMap}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={"avg"} fill="black"></Bar>
                <Bar dataKey={"math"} fill="white"></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;