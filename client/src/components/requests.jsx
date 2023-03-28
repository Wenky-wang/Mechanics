const Requests = ({ data, type }) => {    
    return (
    <table className="appointment_store_Table_One" >
        <tbody>
            <tr className="appointment_store_tr">
                <td className="appointment_store_td" >{type==="store"?data.clientName:data.storeName}</td>
                <td className="appointment_store_td" ></td>
            </tr>
            <tr className="appointment_store_tr">
                <td className="appointment_store_td" >Status</td>
                <td className="appointment_store_td" ><b>{data.apptStatus}</b></td>
            </tr>
            <tr className="appointment_store_tr">
                <td className="appointment_store_td" >{type==="store"?"Client Info":"Store Info"}</td>
                <td className="appointment_store_td" >{type==="store"?`${data.clientEmail} / ${data.clientPhoneNum}`:`${data.storeEmail}`}</td>
            </tr>
            <tr className="appointment_store_tr">
                <td className="appointment_store_td" >Date</td>
                <td className="appointment_store_td" >{data.day} &nbsp;{data.timeSlot}:00-{parseInt(data.timeSlot)+1}:00</td>
            </tr>
            <tr className="appointment_store_tr">
                <td className="appointment_store_td" >Car Info</td>
                <td className="appointment_store_td" >{data.carMake} / {data.carModel} / {data.carYear} / {data.carMileage} km / {data.carTransmission} / {data.carDrivetrain}</td>
            </tr>
            <tr className="appointment_store_tr">
                <td className="appointment_store_td" >Category</td>
                <td className="appointment_store_td" >{data.problemCate}</td>
            </tr>
            <tr className="appointment_store_tr">
                <td className="appointment_store_td" >Problem Description</td>
                <td className="appointment_store_td" >{data.problemDesc}</td>
            </tr>
        </tbody>
    </table>
    );
}
 
export default Requests;