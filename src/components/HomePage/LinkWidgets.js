import React from "react";


function redirectTo(link){window.location.href = link;}


function SmallWidget(props){
    const style = {
        gridColumn: `${props.startPosition}/span 1`,
        backgroundColor: props.color,
    }
    return(
        <div onClick={()=>redirectTo(props.link)} className='small-grid-item' id={props.id} style={style} >
            <div className='widget-icon-container'>
            <img className='widget-icon' src={props.src} alt='widget icon'></img>
            </div>
            <p className='widget-title'>{props.widgetTitle}</p>
            <p className='widget-userid'>{props.userId}</p>
        </div>
    )
}

function WideWidget(props){
    const style = {
        gridColumn: `${props.startPosition}/span 2`,
        backgroundColor: props.color,
    }
   
    return(
        <div onClick={()=>redirectTo(props.link)} className='wide-grid-item'style={style} >
            <div className='widget-icon-container'>
            <img className='widget-icon' src={props.src} alt='widget icon'></img>
            </div>
            <p className='widget-title'>{props.widgetTitle}</p>
            <p className='widget-userid'>{props.userId}</p>
        </div>
    )
}


export {SmallWidget, WideWidget};
