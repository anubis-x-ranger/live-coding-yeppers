import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FolderView from './Components/FolderView';
import { useEffect, useState } from 'react';

function App() {
  const array = [{    "type":"folder",
  "name":"labeller_api",
  "items":[
     {
        "type":"folder",
        "name":"datasets",
        "items":[{
          "type":"folder",
          "name":"migrations",
          "items":[{
            "type":"file",
            "name":"__init__.py"
          },{
            "type":"file",
            "name":"admin.py"
          },{
            "type":"file",
            "name":"apps.py"
          },{
            "type":"file",
            "name":"apps.py"
          },{
            "type":"file",
            "name":"models.py"
          },{
            "type":"file",
            "name":"serialisers.py"
          }]
        }
           
        ]
     },
     {
        "type":"file",
        "name":"urls.py"
     }
      ]
   }];
  // const getData=()=>{
  //   axios.get("http://localhost:8080/folder")
  //   .then((res)=>{
  //     setArray(res.data);
  //     console.log(array)
  //   })
    
  // }
  // useEffect(() => {
  //   getData();
  //   return () => {
  //   }
  // }, [])
  
  return (
    <div className="App">
      
      {array.map((item)=>(<FolderView folder={item} />))}
    </div>
  );
}

export default App;
