/** 
 *  Cấu trúc hiển thị dạng bảng
 * @see pasteimage/2022-09-29-21-19-23.png
 * @see https://developer.microsoft.com/en-us/fluentui#/controls/web/detailslist
 */
import React from "react";
import {DetailsList} from "@fluentui/react";
import {mergeStyleSets} from "office-ui-fabric-react/lib/Styling";
import 'office-ui-fabric-react/dist/css/fabric.css';   /** Bổ sung Layout ms-Grid bằng cách cài gói npm install office-ui-fabric-react, hoặc bổ sung css trực tiếp vào html */

/**
 * Payload của các cell trong bảng thông tin
 */
const cells = [
    {
        from: '0000 0345 0553 6839 8857',
        to: '8473 8377 1957 8593 9897',
        amount: '$35.3',
        date: '12-09-2022',
    },
    {
        from: '0000 0345 0553 6839 8857',
        to: '8473 8377 1957 8593 9897',
        amount: '$35.3',
        date: '12-09-2022',
    }
]

/**
 * Tên và thuộc tính hiển thị của các cột trong bảng
 */
const columnAttributes= [
    {
        key: "col1",                
        name: "Từ",                 // Tiêu đề cột
        fieldName: "from",          /** Bind với trường dữ liệu trong biến payload @see cells ở trên  */
        minWidth: 50,
        maxWidth: 200,
        isResizeable: true,
    },
    {
        key: "col2",
        name: "Tới",                // Tiêu đề cột
        fieldName: "to",            /** Bind với trường dữ liệu trong biến payload @see cells ở trên  */
        minWidth: 100,
        maxWidth: 200,
        isResizeable: true,
    },
    {
        key: "col3",
        name: "Số lượng",           // Tiêu đề cột
        fieldName: "amount",        /** Bind với trường dữ liệu trong biến payload @see cells ở trên  */
        minWidth: 50,  
        maxWidth: 100,
        isResizeable: true,
    },   
    {
        key: "col4",
        name: "Ngày",               // Tiêu đề cột
        fieldName: "date",          /** Bind với trường dữ liệu trong biến payload @see cells ở trên  */
        minWidth: 100,
        maxWidth: 200,
        isResizeable: true,
    }    
]

/**
 * @see https://github.com/microsoft/fluentui/blob/master/packages/merge-styles/README.md
 */
const classNames = mergeStyleSets({
    table: {
        margin:'auto',
    }
})

export function OperationsTable() {
    return (
       <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl19 ${classNames.table}`}>
                <DetailsList 
                    items = {cells}                     // Nội dung
                    columns = {columnAttributes}        // Cột tiêu đề
                    selectionMode = {0}                 // Các kiểu select 0 = single, 1 = multi
                    isHeaderVisible = {false}           // Ẩn hiện/header
                    compact = {true}                    // Thu gọn kích thước
                />
            </div>
       </div>     
    )
}
