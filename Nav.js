import React, {useState, useEffect} from 'react'
import './nav.css'

function Nav() {

    const [w, setW] = useState(1920)
    const [column, setColumn] = useState('7')

    const widthFunc = () => setW(window.innerWidth);

    useEffect(() => {
        setW(window.innerWidth)
    },[]);

    useEffect( () => {

    if (w <= 370) setColumn('2') 

    else if (w <= 490) setColumn('3')

    else if (w <= 610) setColumn('4')

    else if (w <= 730) setColumn('5')

    else if (w <= 850) setColumn("6")

    else if (w <= 970) setColumn('7') 
    
    else if (w <= 1090) setColumn('8')

    // IF STATEMENT IS HERE

    }, [w])

 window.addEventListener('resize', widthFunc)

    return (
        <div className='container'>
           <a href='#' className='link'>Home</a>
           <a href='#' className='link'>Mail</a>
           <a href='#' className='link' style={w < 370 ? {gridColumn: `${column} / 11`} : null}>COVID-19</a>
           <a href='#' className='link' style={w < 490 ? {gridColumn: `${column} / 11`} : null}>News</a>
           <a href='#' className='link' style={w < 610 ? {gridColumn: `${column} / 11`} : null}>Finance</a>
           <a href='#' className='link' style={w < 730 ? {gridColumn: `${column} / 11`} : null}>Sports</a>
           <a href='#' className='link' style={w < 850 ? {gridColumn: `${column} / 11`} : null}>Entertainment</a>
           <a href='#' className='link' style={w < 970 ? {gridColumn: `${column} / 11`} : null}>Life</a>
           <a href='#' className='link' style={w < 1090 ? {gridColumn: `${column} / 11`} : null}>Shopping</a>
            {/*

COMMENTS =>
                  IF YOU WANNA ADD ONE MORE MENU BUTTON JUST COPY&PASTE LAST ANCHOR TAG FULLY AND ADD 120 TO IT's FIRST APPEARED NUMBER &
           ADD ONE MORE "IF STATEMENT" (GO UP) AND REWRITE IT's STATE WITH ADDING 120, LAST THING "JUST THINK LOGICALY"  
           
        I FOUND IT TO BE ENOUGH :)
*/}

        </div>
    )
}

export default Nav
