import React from 'react';
import { useState } from 'react';

const ClientRegCar = ({info, updateFunc=f=>f, deleteFunc=f=>f}) => {

    return (
        <div className="cl_reg_page_vehicle_information">
            &nbsp; Vehicle Information - Please enter a vehicle
            <div className="cl_reg_page_input-box">
                <span className="cl_reg_page_details">Make*</span>
                {/* <input type="text" placeholder="Toyota" name='make'
                    onChange={(event) => updateFunc(
                        info.id,
                        event.target.value, 
                        info.model, 
                        info.year, 
                        info.mileage, 
                        info.transmission, 
                        info.drivetrain)} /> */}
                <select name="make" id="" onChange={(event) => updateFunc(
                        info.id,
                        event.target.value, 
                        info.model, 
                        info.year, 
                        info.mileage, 
                        info.transmission, 
                        info.drivetrain)}>
                    <option value=""> Toyota</option>
                    <option value=""> Audi</option>
                    <option value=""> BMW</option>
                    <option value=""> Mercedes</option>
                    <option value=""> Kia</option>
              </select>
            </div>
            <div className="cl_reg_page_input-box">
                <span className="cl_reg_page_details">Model</span>
                {/* <input type="text" placeholder="Corolla" name='model'
                    onChange={(event) => updateFunc(
                        info.id,
                        info.make, 
                        event.target.value, 
                        info.year, 
                        info.mileage, 
                        info.transmission, 
                        info.drivetrain)} />  */}
                <select name="model" id="" onChange={(event) => updateFunc(
                        info.id,
                        info.make, 
                        event.target.value, 
                        info.year, 
                        info.mileage, 
                        info.transmission, 
                        info.drivetrain)}>
                    <option value=""> Corolla</option>
                    <option value=""> Rav4</option>
                    <option value=""> 4Runner</option>
                    <option value=""> Auris</option>
                    <option value=""> GR86</option>
                </select>
            
            </div>
            <div className="cl_reg_page_input-box">
                <span className="cl_reg_page_details">Year</span>
                <input type="text" placeholder="2005" name='year'
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
                <input type="text" placeholder="100K" name='mileage'
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
                {/* <input type="text" placeholder="Auto" name='transmission'
                    onChange={(event) => updateFunc(
                        info.id,
                        info.make, 
                        info.model,
                        info.year,
                        info.mileage, 
                        event.target.value, 
                        info.drivetrain)} />  */}
                <select name="transmission" id="" onChange={(event) => updateFunc(
                        info.id,
                        info.make, 
                        info.model,
                        info.year,
                        info.mileage, 
                        event.target.value, 
                        info.drivetrain)}>
                    <option value=""> Auto</option>
                    <option value=""> Manual</option>
                </select>
            
            </div>
            <div className="cl_reg_page_input-box">
                <span className="cl_reg_page_details">Drivetrain</span>
                {/* <input type="text" placeholder="4x2" name='drivetrain'
                    onChange={(event) => updateFunc(
                        info.id,
                        info.make, 
                        info.model,
                        info.year,
                        info.mileage, 
                        info.transmission,
                        event.target.value)} /> */}
                <select name="drivetrain" id="" onChange={(event) => updateFunc(
                        info.id,
                        info.make, 
                        info.model,
                        info.year,
                        info.mileage, 
                        info.transmission,
                        event.target.value)}>
                    <option value=""> 4x2</option>
                    <option value=""> 4x4</option>
                </select>
            
            </div>
            <div className="cl_reg_page_button">
                <input type="button" value="Delete this car" onClick={deleteFunc} /> 
            </div>
        </div>
    );
}
 
export default ClientRegCar;