import React, { useState } from 'react';
import {Cell, Column, HeaderGroup, Row, useTable} from 'react-table';
import BackgroundLayer from "../../components/backgroundLayer/BackgroundLayer";
import './Table.css'
import {createBrowserHistory} from "history";

interface TableRow {
    indicators: string;
    unit: string;
    results: number;
}
const Table = () => {
    const [rows, setRows] = useState<TableRow[]>([]);
    const [newRow, setNewRow] = useState<TableRow>({ indicators: '', unit: '', results: 0 });
    const history = createBrowserHistory();
    const columns: readonly Column<TableRow>[] = React.useMemo(
        () => [
            {
                Header: 'Indicators',
                accessor: 'indicators',
            },
            {
                Header: 'Results',
                accessor: 'results',
            },
            {
                Header: 'Unit',
                accessor: 'unit',
            },


        ],
        []
    );

    const data = React.useMemo(() => rows, [rows]);
    console.log(data)
    const { getTableProps, getTableBodyProps, headerGroups, rows: rowElements, prepareRow } = useTable({
        columns,
        data,
    });

    const addRow = () => {
        setRows([...rows, newRow]);
        setNewRow({ indicators: '', unit: '', results: 0 });
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof TableRow) => {
        setNewRow({ ...newRow, [field]: event.target.value });
    };

    return (
        <div>
            <div className='wrap__analysis'>
                <table {...getTableProps()} >
                    <thead >
                    {headerGroups.map((headerGroup: HeaderGroup<TableRow>) => (
                        <tr {...headerGroup.getHeaderGroupProps()} >
                            {headerGroup.headers.map((column: HeaderGroup<TableRow>) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rowElements.map((row: Row<TableRow>) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell: Cell<TableRow>) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <div className='wrap__input__analysis'>
                    <input type="text" value={newRow.indicators} onChange={(e) => onInputChange(e, 'indicators')} />
                    <input type="number" value={newRow.results} onChange={(e) => onInputChange(e, 'results')} />
                    <input type="number" value={newRow.unit} onChange={(e) => onInputChange(e, 'unit')} />

                </div>
                <button onClick={addRow}>
                    <span>Add Row</span>
                </button>
                <button>
                    <span>Save Table</span>
                </button>
                <button onClick={() => history.back()}>
                    <span>Back</span>
                </button>
            </div>

        </div>
    );
};


export default Table;