const StoreAvailability = () => {
    return ( 
    <div className="storehome_mini">
        <div className="storehome_p1">available</div>
        <div className="storehome_p2">2</div>
        <div className="storehome_addDrop">
            <input type="button" value=" + " />
            <input type="button" value=" - " />
        </div>
        <div className="storehome_threebtn">
            <input type="button" value="Reset" />
            <input type="button" value="Clear" />
            <input type="button" value="Detail" />
        </div>
    </div> 
);
}
 
export default StoreAvailability;