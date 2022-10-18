import moment from "moment";
import { key } from "../../helpers/constants";
const TableRow = async() => { 
    const options = {
        'method': 'GET',
        'headers': {
        'authorization': 'Bearer '+key,
        'content-type': 'application/json',
        'accept': 'application/json'
        },
        'timeout': 5000
        };
    const allTr = [];
    await fetch('https://api.json-generator.com/templates/cCgO_PWZXKHu/data',options)
      .then(data => data.json())
      .then(json =>{
        json.forEach(({name,rating,birthday}) => {
            allTr.push(`
                <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">${name}</th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${moment(birthday).format('Do MMM YY')}</td>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${rating}</td>
                </tr>
            `)
        });
        
      })
    return  allTr.join('')
}
export default TableRow