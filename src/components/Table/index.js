import TableRow from "../TableRow";
const Table = async () => {
    const node = `<div class="mdc-data-table">
<div class="mdc-data-table__table-container">
  <table class="mdc-data-table__table" aria-label="Dessert calories">
    <thead>
      <tr class="mdc-data-table__header-row">
        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">BIO</th>
        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">birthday</th>
        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">rating</th>
      </tr>
    </thead>
    <tbody class="mdc-data-table__content">
      ${await TableRow()}
    </tbody>
  </table>
</div>
</div>`
    document.querySelector('#root').innerHTML += node;
}
export default Table