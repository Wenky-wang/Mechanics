import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import StoreHeader from './storeHeader';
import StoreAvailability from './storeAvailability';
import moment from 'moment';
import axios from "axios";

const StoreHome = ({acc_email, url_head}) => {
    const [accemail, setAccEmail] = useState(acc_email);
    const [urlhead, setUrlHead] = useState(url_head);
    const [avadata, setAvadata] = useState([]);

    useEffect(() => {
        document.title = "Store Home Page";
    }, []);
    
    // get calendar based on today
    const today = moment();
    const firstDayGap = parseInt(today.day())-1;

    const [monday, setMonday] = useState(moment().subtract(firstDayGap, 'days'));
    const [tuesday, setTuesday] = useState(moment().subtract(firstDayGap, 'days').add(1, 'days'));
    const [wednesday, setWednesday] = useState(moment().subtract(firstDayGap, 'days').add(2, 'days'));
    const [thursday, setThursday] = useState(moment().subtract(firstDayGap, 'days').add(3, 'days'));
    const [friday, setFriday] = useState(moment().subtract(firstDayGap, 'days').add(4, 'days'));
    const [saturday, setSaturday] = useState(moment().subtract(firstDayGap, 'days').add(5, 'days'));
    const [sunday, setSunday] = useState(moment().subtract(firstDayGap, 'days').add(6, 'days'));
    const [weeksaway, setWeeksAway] = useState(0);

    useEffect(() => {
        async function fetchAva() {
            const url = `${urlhead}/ava/${accemail}/`;
            axios
                .get(url)
                .then(res => {
                    setAvadata(res.data.filter(dat => 
                        moment(dat.date, "YYYY-M-D") >= moment(monday.format("YYYY-M-D"), "YYYY-M-D")
                        && moment(dat.date, "YYYY-M-D") <= moment(sunday.format("YYYY-M-D"), "YYYY-M-D")));
                })
        }
        fetchAva();
    }, [weeksaway])


    // functions
    const DateBack = () => {
        setMonday(monday.subtract(7, 'days'));
        setThursday(tuesday.subtract(7, 'days'));
        setWednesday(wednesday.subtract(7, 'days'));
        setThursday(thursday.subtract(7, 'days'));
        setFriday(friday.subtract(7, 'days'));
        setSaturday(saturday.subtract(7, 'days'));
        setSunday(sunday.subtract(7, 'days'));
        setWeeksAway(weeksaway - 1);
    }
    const DateForward = () => {
        setMonday(monday.add(7, 'days'));
        setThursday(tuesday.add(7, 'days'));
        setWednesday(wednesday.add(7, 'days'));
        setThursday(thursday.add(7, 'days'));
        setFriday(friday.add(7, 'days'));
        setSaturday(saturday.add(7, 'days'));
        setSunday(sunday.add(7, 'days'));
        setWeeksAway(weeksaway + 1);
    }
    const BackToThisWeek = () => {
        setMonday(moment().subtract(firstDayGap, 'days').add(2, 'days'));
        setTuesday(moment().subtract(firstDayGap, 'days').add(2, 'days').add(1, 'days'));
        setWednesday(moment().subtract(firstDayGap, 'days').add(2, 'days').add(2, 'days'));
        setThursday(moment().subtract(firstDayGap, 'days').add(2, 'days').add(3, 'days'));
        setFriday(moment().subtract(firstDayGap, 'days').add(2, 'days').add(4, 'days'));
        setSaturday(moment().subtract(firstDayGap, 'days').add(2, 'days').add(5, 'days'));
        setSunday(moment().subtract(firstDayGap, 'days').add(2, 'days').add(6, 'days'));
        setWeeksAway(0);
    }
    const dayRelationship = (day, isWeekend) => {
        let result = "";
        if (today.format('YYYY-MMMM-DD')===day.format('YYYY-MMMM-DD'))
            result += "storehome_today";
        else
            result += "";
        
        if (isWeekend) result += " storehome_weekend";
        return result;
    }
    const filterAvaData = (date, time) => {
        if (avadata.length!==0)
            return avadata.filter(dat => dat.date === date.format("YYYY-M-D") 
                                    && dat.timeSlot === time)[0];
        else return undefined;
    }

    // process the availability data
    
    const displayAva = (time) => {
        return <tr>
            <td className="storehome_headcol">{`${time}:00 - ${time+1}:00`}</td>
            <td><StoreAvailability assignData={() => filterAvaData(monday, time)} /></td>
            <td><StoreAvailability assignData={() => filterAvaData(tuesday, time)} /></td>
            <td><StoreAvailability assignData={() => filterAvaData(wednesday, time)} /></td>
            <td><StoreAvailability assignData={() => filterAvaData(thursday, time)} /></td>
            <td><StoreAvailability assignData={() => filterAvaData(friday, time)} /></td>
            <td><StoreAvailability assignData={() => filterAvaData(saturday, time)} /></td>
            <td><StoreAvailability assignData={() => filterAvaData(sunday, time)} /></td>
        </tr>
    }


    return (<>
    <StoreHeader />

    <div className="storehome_calendar">

        <div className='storehome_calendar_top'>
            <button className="storehome_secondary" onClick={BackToThisWeek} >Today</button>
            <div className="storehome_calendar_title">
                <IoIosArrowBack className='storehome_arr_icon' onClick={DateBack} />
                <div className="storehome_h1"><strong>{monday.format('D MMM')} – {sunday.format('D MMM')}</strong> &nbsp; {sunday.format('Y')}</div>
                <IoIosArrowForward className='storehome_arr_icon' onClick={DateForward} />
            </div>
        </div>

        <div className="storehome_outer">

            <table className='storehome_table'>
                <thead>
                    <tr>
                        <th className="storehome_headcol"></th>
                        <th className={ dayRelationship(monday, false) } >
                            <div>{monday.format('ddd, D')}</div>
                        </th>
                        <th className={ dayRelationship(tuesday, false) } >
                            <div>{tuesday.format('ddd, D')}</div>
                        </th>
                        <th className={ dayRelationship(wednesday, false) } >
                            <div>{wednesday.format('ddd, D')}</div>
                        </th>
                        <th className={ dayRelationship(thursday, false) } >
                            <div>{thursday.format('ddd, D')}</div>
                        </th>
                        <th className={ dayRelationship(friday, false) } >
                            <div>{friday.format('ddd, D')}</div>
                        </th>
                        <th className={ dayRelationship(saturday, true) } >
                            <div>{saturday.format('ddd, D')}</div>
                        </th>
                        <th className={ dayRelationship(sunday, true) } >
                            <div>{sunday.format('ddd, D')}</div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className='storehome_empty_row'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    {displayAva(8)}
                    {displayAva(9)}
                    {displayAva(10)}
                    {displayAva(11)}
                    {displayAva(12)}
                    {displayAva(13)}
                    {displayAva(14)}
                    {displayAva(15)}
                    {displayAva(16)}
                    {displayAva(17)}
                    {displayAva(18)}
                </tbody>
            </table>
        </div>
    </div>
    
    </>);
}

export default StoreHome;