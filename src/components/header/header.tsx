import './header.css'
import uuid from 'react-uuid';

type Handler = (a: string, b: string, c: number) => void;

export default function Header({handler}:{handler :Handler}) {

    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const timeZone = currentTarget.nameTimezone.value === '' ? 'Гринвич' : currentTarget.nameTimezone.value;
        const offset = currentTarget.offset.value === '' ? 0 : Number(currentTarget.offset.value);

        currentTarget.nameTimezone.value = '';
        currentTarget.offset.value = '';
        handler(uuid(), timeZone, offset);
    }

    return(
        <form className='header' onSubmit={onSubmit}>
            <input className='input' placeholder='city' name='nameTimezone'></input>
            <input  className='input' placeholder='offset' name='offset'></input>
            <button>Добавить</button>
        </form>
    );
}

