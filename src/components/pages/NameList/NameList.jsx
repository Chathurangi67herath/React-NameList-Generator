import React, { useEffect, useState } from "react";
import NameListItem from "./NameListItem";

function NameList(){

//refresh wimata
const [loadData, setLoadData] = useState(new Date());



const [nameList, setNameList]= useState([ {
  "id":1,
   "name": {
       "title": "Miss",
       "first": "Jennie",
       "last": "Nichols"
     },
     "location": {
       "city": "Billings"
      
     },
     "email": "1jennie.nichols@example.com",
     "dob": {
       "date": "1992-03-08T15:13:16.688Z",
       "age": 30
     },
     "picture": {
    
       "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
     
     },

},
{
 "id":2,
 "name": {
     "title": "Miss",
     "first": "Jennie",
     "last": "Nichols"
   },
   "location": {
     "city": "Billings"
    
   },
   "email": "2jennie.nichols@example.com",
   "dob": {
     "date": "1992-03-08T15:13:16.688Z",
     "age": 30
   },
   "picture": {
  
     "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
   
   },

},
{
 "id":3,
 "name": {
     "title": "Miss",
     "first": "Jennie",
     "last": "Nichols"
   },
   "location": {
     "city": "Billings"
    
   },
   "email": "3jennie.nichols@example.com",
   "dob": {
     "date": "1992-03-08T15:13:16.688Z",
     "age": 30
   },
   "picture": {
  
     "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
   
   },

}]);



const nameListComponent = ()=>{
  return nameList.map((aName)=>{
    return(
    <NameListItem
    key={aName.id}
    name ={aName.name.first+' '+aName.name.last}
    city={aName.location.city}
    email={aName.email}
    birthday={aName.dob.date}
    avatar={aName.picture.medium}
    >
  </NameListItem>
  );});
};

// const addUserHandler =()=> {
// const newUser = {
//   "id":3,
//   "name": {
//       "title": "Miss",
//       "first": "Jennie",
//       "last": "Nichols"
//     },
//     "location": {
//       "city": "Billings"
     
//     },
//     "email": "4jennie.nichols@example.com",
//     "dob": {
//       "date": "1992-03-08T15:13:16.688Z",
//       "age": 30
//     },
//     "picture": {
   
//       "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
    
//     },
// };

// //first method
// //setNameList((nameList) => nameList.concat(newUser));

// //second method
// setNameList((nameList) =>[...nameList, newUser]);

// };

//refresh wimedi ihatha addUserhandler function eka wenuwata meya yodnn

const addUserHandler =()=> {
 setLoadData(new Date());
  
  };

//page ek refresh weddi load wima sadaha
useEffect(() => {
  fetch('https://randomuser.me/api').then((response)=>{
return response.json();

  })
  .then((responseData) => {
    setNameList((nameList)=> [...nameList, responseData.results[0]]);
  });
},[loadData]);

    return(

//First Method   
//     <div>
//            <ul>
//     <li>abc</li>
//     <li>abc</li>
//     <li>abc</li>
//     <li>abc</li>
//    </ul>
//     </div>



//Second Method
//<React.Fragment>
//<ul>
//<NameListItem></NameListItem>
//<NameListItem></NameListItem>
 //   </ul>
//</React.Fragment>


//Third Method
/* <React.Fragment>
<ul>
<NameListItem name='Chamodi' course='Java'></NameListItem>
<NameListItem></NameListItem>
<NameListItem></NameListItem>
    </ul>
</React.Fragment> */


//===================================================================================
//List
/* <React.Fragment>
<h1>Name List</h1>
<hr></hr>
<ul>
  <NameListItem
    name ={nameList[0].name.first+' '+nameList[0].name.last}
    // name={"${nameList.name.first} ${nameList.name.last}"}    
    //check it
    city={nameList[0].location.city}
    email={nameList[0].email}
    birthday={nameList[0].dob.date}
    avatar={nameList[0].picture.medium}
    >
  </NameListItem>
  <NameListItem
    name ={nameList[1].name.first+' '+nameList[1].name.last}
    // name={"${nameList.name.first} ${nameList.name.last}"}    
    //check it
    city={nameList[1].location.city}
    email={nameList[1].email}
    birthday={nameList[1].dob.date}
    avatar={nameList[1].picture.medium}
    >
  </NameListItem>
  <NameListItem
    name ={nameList[2].name.first+' '+nameList[2].name.last}
    // name={"${nameList.name.first} ${nameList.name.last}"}    
    //check it
    city={nameList[2].location.city}
    email={nameList[2].email}
    birthday={nameList[2].dob.date}
    avatar={nameList[2].picture.medium}
    >
  </NameListItem>
</ul>
</React.Fragment>  */


//loop=================================================================================
<React.Fragment>
<div className="container mt-4">
  <button className="btn btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
<ul className="list-group">{nameListComponent()}</ul>
</div>


</React.Fragment>

    );
}
export default NameList;