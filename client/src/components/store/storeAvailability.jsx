import { useEffect, useState } from "react";

const StoreAvailability = ({assignData=f=>f}) => {
    const [data, setData] = useState();
    const [quota, setQuota] = useState();

    useEffect(() => {
        let catchData = assignData();
        if (catchData !== undefined) {
            setData(catchData);
            setQuota(parseInt(catchData.totalQuota) - parseInt(catchData.bookedQuota))
        }
    }, [assignData])
    // action
    function addQuota() {
        setQuota(quota + 1);
    }
    function redQuota() {
        if (quota === 0) return;
        setQuota(quota - 1);
    }
    function resetQuota() {
        setQuota(parseInt(data.totalQuota));
    }
    function clearQuota() {
        setQuota(0);
    }

    return ( 
    <div className="storehome_mini">
        <div className="storehome_p1">available</div>
        <div className="storehome_p2">{quota}</div>
        <div className="storehome_addDrop">
            <input type="button" value=" + " onClick={addQuota} />
            <input type="button" value=" - " onClick={redQuota} />
        </div>
        <div className="storehome_threebtn">
            <input type="button" value="Reset" onClick={resetQuota} />
            <input type="button" value="Clear" onClick={clearQuota} />
            <input type="button" value="Detail" />
        </div>
    </div> 
);
}
 
export default StoreAvailability;