import React from "react";
import momemt from "moment"

import './NameListItem.css';

function NameListItem(props){
    return (
       
        <li className="list-group-item shadow-sm"> 
           <div className="row align-items-center ">
<div className="col-2">
<img src={props.avatar} alt={props.name} className="border border-dark rounded-circle shadow-sm"></img>
</div>
<div className="col-10">
<h4 style={{color: 'green'}}>{props.name}</h4>
        <p>{props.city} |  {props.email}</p>
        

        {/* date formating */}
        {/* part 1 */}
        {/* <p>{new Intl.DateTimeFormat('en-GB').format (new Date(props.birthday))}</p> */}
        {/* part 2 */}
<small>{momemt(props.birthday).format('DD-MM-YYYY')}</small>
</div>
           </div>

          </li> 
    );
}

export default NameListItem;