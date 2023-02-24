import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MainStore = () => {

    const [today, changeDate] = useState(new Date());
    return ( <div>
        <Calendar onChange={changeDate} value={today} />
    </div> );
}
 
export default MainStore;