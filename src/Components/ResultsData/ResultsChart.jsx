import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";

const resultsData = [
    {
        "id": 1,
        "name": "Aminul",
        "math": 85,
        "english": 78,
        "science": 92,
        "total": 255
    },
    {
        "id": 2,
        "name": "Bristy",
        "math": 74,
        "english": 88,
        "science": 81,
        "total": 243
    },
    {
        "id": 3,
        "name": "Sakib",
        "math": 90,
        "english": 85,
        "science": 87,
        "total": 262
    },
    {
        "id": 4,
        "name": "Mitu",
        "math": 67,
        "english": 72,
        "science": 70,
        "total": 209
    },
    {
        "id": 5,
        "name": "Hasib",
        "math": 80,
        "english": 76,
        "science": 85,
        "total": 241
    },
    {
        "id": 6,
        "name": "Tania",
        "math": 92,
        "english": 89,
        "science": 95,
        "total": 276
    },
    {
        "id": 7,
        "name": "Rafi",
        "math": 58,
        "english": 64,
        "science": 60,
        "total": 182
    },
    {
        "id": 8,
        "name": "Farhana",
        "math": 77,
        "english": 82,
        "science": 79,
        "total": 238
    },
    {
        "id": 9,
        "name": "Jahid",
        "math": 88,
        "english": 90,
        "science": 84,
        "total": 262
    },
    {
        "id": 10,
        "name": "Nishat",
        "math": 69,
        "english": 73,
        "science": 75,
        "total": 217
    }
]

const ResultsChart = () => {
    return (
        <div className="m-10">
            <PieChart width={700} height={300} data={resultsData}>
                <Pie dataKey="english" type={'monotone'}>
                </Pie>
                <Pie dataKey="math" stroke="red" type={'monotone'}>
                </Pie>
                <Pie dataKey="science" stroke="green" type={'monotone'}>
                </Pie>
                <Tooltip></Tooltip>
                {/* <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis> */}
            </PieChart>
        </div>
    );
};

export default ResultsChart;