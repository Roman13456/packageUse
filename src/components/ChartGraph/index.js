// import { Chart } from "chart.js"
import Chart from 'chart.js/auto';
import moment from "moment";
import { key } from "../../helpers/constants";
const ChartGraph = () => {
    // document.querySelector('.chart').innerHTML = `<canvas id="myChart"></canvas>`
        const options = {
            'method': 'GET',
            'headers': {
                'authorization': 'Bearer ' + key,
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            'timeout': 5000
        };
        fetch('https://api.json-generator.com/templates/cCgO_PWZXKHu/data', options)
            .then(res => res.json())
            .then(json => {
                const labels = [];
                const graphData = [];
                json.forEach(({ name, rating}) => {
                    labels.push(name)
                    graphData.push(rating)
                })
                const data = {
                    labels,
                    datasets: [{
                        label: 'Rating',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: graphData,
                    }]
                };
                const config = {
                    type: 'line',
                    data: data,
                    options: {}
                };
                const myChart = new Chart(
                    document.getElementById('myChart'),
                    config
                );
            })
    }
    export default ChartGraph