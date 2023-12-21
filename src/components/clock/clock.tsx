import { useEffect, useState } from 'react';
import './clock.css'

type Handler = (a: string) => void;

export default function Clock({id, offset=0, name='none', handler}:{id :string, offset: number, name: string, handler: Handler}) {

    const [seconds, setSeconds] = useState(()=> {
        const d = new Date;
        const s = d.getHours()*3600 + d.getMinutes()*60 +d.getSeconds() + (d.getTimezoneOffset() * 60) + offset*3600;
        
        return s < 43200 ? s : (s - 43200) < 43200 ? (s-43200) : (s -86400);
    });
    
    useEffect(() => {
        const interval = setInterval(() =>{
            setSeconds(seconds => seconds + 1);
        },1000);
        return () => clearInterval(interval);
    },[]);
    
    const onClickHandler = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        const id = e.target.parentElement.id;
        handler(id);
    }

    return(
        <div className='clock' id={id}>
            <div className='city-name'>{name}</div>    
            <div className='clock-del-button' onClick={onClickHandler}>&#10008;</div>
            <div className='clock-face'>
                <div className='hour-hand' style={{transform: `rotate(${seconds * 0.00833}deg)`}}></div>
                <div className='minute-hand' style={{transform: `rotate(${seconds*0.1}deg`}}></div>
                <div className='second-hand' style={{transform: `rotate(${seconds*6}deg`}}></div>
            </div>
        </div>
    );
}