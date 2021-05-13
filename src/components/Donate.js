import React from 'react';
import { useState } from 'react';
const COLORS = ['Government Sector', 'Public Sector', 'Private Sector', 'Self Employed', 'Unemployed'];
function Donate() {

const [values, setValues] = useState({
    first_name: '', last_name: '', mobile: '', email: '', org_type: '', org_name: '', address: '' 
  });

  const set = name => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({...oldValues, [name]: value }));
    }
  };


return (
<form style={{marginTop:"70px"}}> 
   <h4>Share your details with us and we will reach out to you:</h4>   
   <label>First Name</label>
   <input type="text" required value={values.name} onChange={set('first_name')} />
   <label>Last Name</label>
   <input type="text" required value={values.name} onChange={set('last_name')} />
   <label>Mobile</label>
   <input required value={values.name} onChange={set('mobile')} />
   <label>Email</label>
   <input required value={values.name} onChange={set('email')} />
   <label>Organisation Type</label>
   <select value={values.name} onChange={set('org_type')} >
      <option value="">Options</option>
      {COLORS.map(c => 
      <option key={c}>{c}</option>
      )}
   </select>
   <label>Organisation Name</label>
   <input value={values.name} onChange={set('org_name')} />
   <label>Address</label>
   <textarea required value={values.name} onChange={set('address')} />
   <button type="submit">Submit</button>
</form>
);
}
export default Donate;