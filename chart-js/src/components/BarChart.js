import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

/*Options */
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'TSR Sensor values',
        },
    },
};


/*Data */

const BarChart = () => {

    const [data, setData] = useState({
        labels: ['jan', 'feb', 'mar'],
        datasets: [
            {
                label: 'RPM',
                data: [111, 222, 565,],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Temperature',
                data: [252, 333, 555,],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    })

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/comments")
            const data = await res.json()
            const label = []
            const rpm = []
            const temp = []
            console.log(data)
            for (const val of data) {
                rpm.push(val.id);
                temp.push(val.postId);
                label.push(val.email)
            }
            setData({
                labels: label,
                datasets: [
                    {
                        label: 'RPM',
                        data: rpm,
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    {
                        label: 'Temperature',
                        data: temp,
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    }
                ]
            })
            console.log("dataset: ", temp, rpm)
        } catch (e) {
            console.log("Error", e)
        }
        
    }
    return <Bar options={options} data={data} />;
}

export default BarChart
/*Legend library - for the  top dataset1 and dataset2 */
