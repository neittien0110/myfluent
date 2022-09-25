/**
 * Tạo menu phải Navigation
 * @see  https://developer.microsoft.com/en-us/fluentui#/controls/web/nav
 * @example pasteimage/2022-09-25-23-10-12.png
 */
import React from "react";
import  {Nav, initializeIcons} from '@fluentui/react'

/** Danh sách các item ở menu phải */
const menuItems = [
    {
    links: [
        {
            name: 'Dashboard',
            url:'/',
            key:'key1',
            iconProps:{
                iconName:'News',
                styles:{
                    root: {
                        fontSize:20,
                        color: 'blue',
                    }
                }
            }
        },
        {
            name: 'Friend',
            url:'https://mycel.app',
            key:'key2',
            iconProps:{
                iconName:'SwitcherStartEnd',
                styles:{
                    root: {
                        fontSize:20,
                        color: 'green',
                    }
                }
            }
        }
    ]
    }
]

const navigationStyles = {
    root: {
        height:"100vh",
        boxSizing:'border-box',
        border:'1px solid #eee',
        overflowY: 'auto',
        paddingTop: '10vh',
    }
}

/**
 * Định nghĩa menu phải Navigation cho trang web
 * @returns 
 */
const Navigation = () => {
    initializeIcons();
    return (
        // Cú pháp tuân theo hướng dẫn https://developer.microsoft.com/en-us/fluentui#/controls/web/nav
       <Nav 
            groups={menuItems}
            selectedKey="key1"
            styles={navigationStyles}
            />
    )
}
export default Navigation;