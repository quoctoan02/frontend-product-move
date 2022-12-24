import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Table.scss'
import { ThemeProvider } from '@material-ui/styles';
import MaterialTable, { Paper, MTableToolbar, MTableBody, MTableHeader, MTablePagination } from 'material-table'
import tableIcons from '../../components/MuiIcons'
import { tableTheme } from './TableTheme';
import { data, columns } from './TableData'
const components = {
    Toolbar: props => {
        return (
            <div>
                <MTableToolbar {...props} />
            </div>
        )
    },
    // Body: props => (
    //     <div className='' style={{ border: '1px solid red' }}>
    //         <MTableBody  {...props} />
    //     </div>
    // ),

    // Header: props => (
    //     <div style={{ border: '1px solid red', 'width': '100%', overflow: 'hidden' }}>
    //         <MTableHeader {...props} />
    //     </div>
    // ),
    // Container: props => (
    //     <div style={{ border: '1px solid green' }}>
    //         <Paper {...props} />
    //     </div>
    // )

    // {
    //     Pagination: props => (
    //         <div style={{ height: '0' }}>
    //             <MTablePagination  {...props} />
    //         </div>
    //     )
    // }
}

const actions = [
    {
        icon: tableIcons.Add,
        tooltip: "Add",
        position: "toolbar",
        onClick: () => {
            this.props.toggleOpenModal("factory");
        }
    }
]

const options = {
    //filtering: true,
    columnsButton: true,
    showEmptyDataSourceMessage: true,
    pageSize: 10,
    pageSizeOptions: [10, 20, 30],
    exportButton: true,
    //search: false,
    searchFieldAlignment: 'left',
    showTitle: false,
    selection: true,
    maxBodyHeight: "calc(100vh - 135px)",
    // minBodyHeight: "",
    rowStyle: (rowData, index) => ({
        background:
            index % 2 === 0 ? "#fff" : "#f9f9f9",
        color: "#666",
        "fontSize": "0.95rem",
        'borderBottom': '1px solid #e8e8e8'
    }),

    headerStyle: {
        backgroundColor: '#dcf4fc',
        "fontWeight": "600",
        "fontSize": "1rem",
        color: "#666"
    }
};

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: "false",
            allData: data
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.searchText !== this.state.searchText) {

        }
    }
    handleChangeSearchText = (event) => {
        this.setState({
            searchText: event.target.value
        }, () => {
            console.log(this.state.searchText)
        })

    }

    toggleRowChecked = (row) => {
        return (row.tableData && row.tableData.checked ? !row.tableData.checked : true);
    }

    toggleSelectAll = () => {
        let newData = this.state.allData.map((row) => ({
            ...row,
            tableData: {
                checked: this.toggleRowChecked(row),
            },
        }));
        this.setState({
            allData: newData
        });
    };

    render() {
        return (

            <div className='product-table-box'>
                {/* <div className='product-table-header'>
                    <TableHeader />
                </div> */}
                <div className='product-table-content'>
                    <ThemeProvider theme={tableTheme}>
                        {/* <button onClick={() => this.toggleSelectAll()}>Toggle Selection</button> */}
                        <MaterialTable
                            style={{
                                "maxWidth": "100%",
                            }}
                            onSelectionChange={(data) => console.log(data)}
                            icons={tableIcons}
                            columns={columns}
                            data={this.state.allData}
                            options={options}
                            title="Demo Title"
                            components={components}
                            actions={[
                                {
                                    icon: tableIcons.Add,
                                    tooltip: "Add",
                                    position: "toolbar",
                                    onClick: () => {
                                        this.props.toggleOpenModal("product");
                                    }
                                }
                            ]}
                        />

                    </ThemeProvider>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
