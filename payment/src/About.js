import React from 'react'
import "./index.css"

function About(){
    return(
        <div className="tab">
            <br/>
            <h4 className="Abtstyle">About Us</h4>
            <br/>
            <table>
                <tr className="change">
                <td className="changea"><p className="do"><b>Our Doctors</b></p>
                <p>Meet our team</p>
                <button type="button" class="btn btn-light">Find a Doctor</button>
                </td>
                <td className="changea">
                <p className="do"><b>Our Locations & directions</b></p>
                <p>Find the nearest location and maps</p>
                <button type="button" class="btn btn-light">Get Directions</button>
                  </td>
                <td className="changea"><p className="do"><b>Appointment</b></p>
                <p>Schedule an appointment</p>
                <button type="button" class="btn btn-light">book an Appointments</button>
                </td>
                </tr>
               </table><br/>
        </div>
    )
}
export default About