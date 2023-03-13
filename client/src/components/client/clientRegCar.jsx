import React from 'react';
import { useState } from 'react';

const ClientRegCar = ({info, updateFunc=f=>f, deleteFunc=f=>f}) => {

    return (
        <div className="cl_reg_page_vehicle_information">
            &nbsp; Vehicle Information - Please enter a vehicle
            <div className="cl_reg_page_input-box">
                <span className="cl_reg_page_details">Make*</span>
                <input type="text" placeholder="Toyota"
                    onChange={(event) => updateFunc(
                        info.id,
                        event.target.value, 
                        info.model, 
                        info.year, 
                        info.mileage, 
                        info.transmission, 
                        info.drivetrain)} /> 
            </div>
            <div className="cl_reg_page_input-box">
                <span className="cl_reg_page_details">Model</span>
                <input type="text" placeholder="Corolla"
                    onChange={(event) => updateFunc(
                        info.id,
                        info.make, 
                        event.target.value, 
                        info.year, 
                        info.mileage, 
                        info.transmission, 
                        info.drivetrain)} /> 
            </div>
            <div className="cl_reg_page_input-box">
                <span className="cl_reg_page_details">Year</span>
                <input type="text" placeholder="2005"
                    onChange={(event) => updateFunc(
                        info.id,
                        info.make, 
                        info.model, 
                        event.target.value, 
                        info.mileage, 
                        info.transmission, 
                        info.drivetrain)} /> 
            </div>
            <div className="cl_reg_page_input-box">
                <span className="cl_reg_page_details">mileage</span>
                <input type="text" placeholder="100K"
                    onChange={(event) => updateFunc(
                        info.id,
                        info.make, 
                        info.model,
                        info.year,
                        event.target.value, 
                        info.transmission, 
                        info.drivetrain)} /> 
            </div>
            <div className="cl_reg_page_input-box">
                <span className="cl_reg_page_details">Transmission</span>
                <input type="text" placeholder="Auto"
                    onChange={(event) => updateFunc(
                        info.id,
                        info.make, 
                        info.model,
                        info.year,
                        info.mileage, 
                        event.target.value, 
                        info.drivetrain)} /> 
            </div>
            <div className="cl_reg_page_input-box">
                <span className="cl_reg_page_details">Drivetrain</span>
                <input type="text" placeholder="4x2"
                    onChange={(event) => updateFunc(
                        info.id,
                        info.make, 
                        info.model,
                        info.year,
                        info.mileage, 
                        info.transmission,
                        event.target.value)} />
            </div>
            <div className="cl_reg_page_button">
                <input type="button" value="Delete this car" onClick={deleteFunc} /> 
            </div>
        </div>
    );
}
 
export default ClientRegCar;