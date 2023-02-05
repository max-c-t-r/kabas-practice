import { v4 as uuidv4 } from "uuid"
const mockData = [
    {
        id: uuidv4(),
        title: "Por hacer 😶",
        tasks: [
            {
                id: uuidv4(),
                title: "estudiar js"
            },
            {
                id: uuidv4(),
                title: "estudiar jsx"
            },
            {
                id: uuidv4(),
                title: "estudiar +"
            },
        ]
    },
    {
        id: uuidv4(),
        title: "En progreso 🔨",
        tasks: [
            {
                id: uuidv4(),
                title: "estudiar js m"
            },
            {
                id: uuidv4(),
                title: "estudiar jsx mm"
            },
        ]
    },
    {
        id: uuidv4(),
        title: "completado 🎉",
        tasks: [
            {
                id: uuidv4(),
                title: "terminado"
            },
        ],
    },
];
export default mockData;