import {getMaterialsData} from "./api/dataFetching.mjs"
import {createContext, useContext, useState} from "react";
import {
    rowsFromData, columnsFromRows
} from "./api/dataTransformations";
import {DataGridPremium, GridToolbar, useGridApiRef} from "@mui/x-data-grid-premium";
import {colors, createTheme, ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";

const PrimaryGridColumnsContext = createContext({})
const PrimaryGridRowsContext = createContext({})

export default function Mt(props){
    
    const theme = createTheme({
        palette: {
            primary:{
                main: colors.orange[900],
            },
        },
        typography : {
            fontFamily: ["Goldman Sans"],
        },
    })

    const [data, setData] = useState(props.data)
    const [primaryGridRows, setPrimaryGridRows] = useState(rowsFromData(data))
    const [primaryGridColumns, setPrimaryGridColumns] = useState(columnsFromRows(primaryGridRows))

    console.log(primaryGridRows)
    console.log(primaryGridColumns)

    return(
            <>
            <ThemeProvider theme={theme}>
                <PrimaryGridColumnsContext.Provider value = {{primaryGridColumns, setPrimaryGridColumns}}>
                    <PrimaryGridRowsContext.Provider value = {{primaryGridRows, setPrimaryGridRows}}>
                        <PrimaryGrid initialState = {[]}/>
                    </PrimaryGridRowsContext.Provider>
                </PrimaryGridColumnsContext.Provider>
            </ThemeProvider>
            </>
    )
}

function PrimaryGrid(props){

    const columnsObj = useContext(PrimaryGridColumnsContext)
    const rowsObj = useContext(PrimaryGridRowsContext)

    const apiRef = useGridApiRef()

    function getPrimaryGridDetailPanelContent(props) {
        return(
                <>
                <h1>{23}</h1>
                </>
                )
    }

    function onColumnVisibilityModelChange(x){
        console.log(x)
//        uploadGridStateObj(apiRef.current.exportState(),"APIStateExport")
//        uploadGridStateObj(x, "ColumnVisibilityModel")
    }

    return (
            <Box sx={{height: "90vh", width: "100%" , border: "0px solid black"}}>
                <DataGridPremium
                    apiRef={apiRef}
                    initialState = {props.initialState}
                    rowReordering
                    density ="compact"
                    onColumnVisibilityModelChange = {onColumnVisibilityModelChange }
                    components={{Toolbar: GridToolbar}}
                    getDetailPanelContent={getPrimaryGridDetailPanelContent}
                    getDetailPanelHeight={()=> "auto"}
                    experimentalFeatures={{aggregation: true, newEditingApi: true}}
                    checkboxSelection
                    columns={columnsObj.primaryGridColumns}
                    rows={rowsObj.primaryGridRows}
                />
            </Box>
            )
}