import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import StoreHeader from './storeHeader';
import StoreAvailability from '../../css/store/storeAvailability';

const StoreHome = () => {
    useEffect(() => {
        document.title = "Store Home Page";
    }, []);

    
    return (<>
    <StoreHeader />

    <div className="storehome_calendar">

        <div className='storehome_calendar_top'>
            <button className="storehome_secondary">Today</button>
            <div className="storehome_calendar_title">
                <IoIosArrowBack className='storehome_arr_icon' />
                <div className="storehome_h1"><strong>18 JAN – 24 JAN</strong> &nbsp; 2016</div>
                <IoIosArrowForward className='storehome_arr_icon' />
            </div>
        </div>

        <div className="storehome_outer">

            <table className='storehome_table'>
                <thead>
                    <tr>
                        <th className="storehome_headcol"></th>
                        <th>Mon, 18</th>
                        <th>Tue, 19</th>
                        <th className="storehome_today">Wed, 20</th>
                        <th>Thu, 21</th>
                        <th>Fri, 22</th>
                        <th className="storehome_weekend">Sat, 23</th>
                        <th className="storehome_weekend">Sun, 24</th>
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
                    <tr>
                        <td className="storehome_headcol">6:00 - 7:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>
                    <tr>
                        <td className="storehome_headcol">7:00 - 8:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>
                    <tr>
                        <td className="storehome_headcol">8:00 - 9:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>
                    <tr>
                    <td className="storehome_headcol">9:00 - 10:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>
                    <tr>
                        <td className="storehome_headcol">10:00 - 11:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>

                    <tr>
                        <td className="storehome_headcol">11:00 - 12:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>
                    <tr>
                        <td className="storehome_headcol">12:00 - 13:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>
                    <tr>
                        <td className="storehome_headcol">13:00 - 14:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>
                    <tr>
                        <td className="storehome_headcol">14:00 - 15:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>
                    <tr>
                        <td className="storehome_headcol">15:00 - 16:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>
                    <tr>
                        <td className="storehome_headcol">16:00 - 17:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>
                    <tr>
                        <td className="storehome_headcol">17:00 - 18:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>
                    <tr>
                        <td className="storehome_headcol">18:00 - 19:00</td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                        <td><StoreAvailability /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    </>);
}

export default StoreHome;