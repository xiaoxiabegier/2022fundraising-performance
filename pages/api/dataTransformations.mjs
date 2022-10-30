import {getMaterialsData} from "./dataFetching.mjs";
import {useState} from "react";


export function rowsFromData(obj) {
    let rows = []
    for (let elem in obj ) {
        let thisRow = obj[elem]
        thisRow["id"] = elem
        rows.push(thisRow)
    }
    return rows
}

export function columnsFromRows(arry){
    let columns =  []
    for (let rowElem in arry) {
        for (let rowKey in arry[rowElem]) {
            let found = false
            // hits each entry in rows
            for(let colElem in columns ) {
                for(let colKey in columns[colElem] ) {
                    // hits each entry in columns
                    if (columns[colElem].field === rowKey) found = true
                }
            }
            if ((!found) && (rowKey === "price")) columns.push({field: rowKey, headerName: rowKey, width: 150, editable: true, type: "number"})
            else {
                if (!found) columns.push({field: rowKey, headerName: rowKey, width: 150, editable: true})
            }
        }
    }
    return  columns
}
