import React from 'react'
import "./index.css"

function Contact(){
    return(
            <div>
                <br/>
                <h4 className="conus"> Contact Us</h4>
            <br/>
            <form className="con"><br/>
  <div className="form-group row ">
    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm text-primary">FullName</label>
    <div className="col-sm-4">
      <input type="fullname" className="form-control form-control-sm" id="colFormLabelSm" placeholder="fullname"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="colFormLabel" className="col-sm-2 col-form-label text-primary">Phonenumber</label>
    <div className="col-sm-4">
    <input type="Phonenumber" className="form-control" id="colFormLabel" placeholder="phonenumber"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg text-primary">Email</label>
    <div className="col-sm-4">
      <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="email"/>
    </div>
  </div>
  <div className="btnone"><button type="submit" class="btno btn-light text-primary ">Submit</button></div>
  <br/>
</form>
<br/>
        </div>
    )
}
export default Contact