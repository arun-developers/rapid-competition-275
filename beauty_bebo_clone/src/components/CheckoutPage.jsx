import axios from "axios";
import  "./CheckOut.css"
import React, { useContext } from "react";
import { Input, Stack } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function CheckOut() {
  //const navigate =useNavigate();
  const [data, setData] = React.useState([]);

  

  return (
    <div>
      <div style={{width:"70%",}}>
        <div >
          <form >
            <label className="lable" >Email Address</label><br></br>
            <Input variant="outline" margin={10} Size="0vw" placeholder="Email Address" />
          

            <br></br>
            <label >
              
                First Name
                </label><br></br>
                <Input variant="outline" margin={10} Size="0vw"
                type="email"
                name="First-Name"
                
                placeholder="example"
              /><br/>
           
           
            <label >
             
                Last Name
                </label><br></br>
                <Input variant="outline" margin={10} Size="0vw"
                type="email"
                name="Last Name"
                
                placeholder="example"
              /><br/>
          

            <label >
             
                Street Address
                </label><br></br>
                <Input variant="outline" margin={10} Size="0vw"
                type="email"
                name="Street-Address"
                
                placeholder="example"
              /><br/>
          
            <br></br>
            <label >
              
                City
                </label>
            <br></br>
                <Input variant="outline" margin={10} Size="0vw"
                type="email"
                name="City"
               
                placeholder="example"
              /><br/>
            
            <label>

                State
                </label>
            <br></br>
                <Input variant="outline" margin={10} Size="0vw"
                type="email"
                name="State"
                
                placeholder="example"
              /><br/>
           
            <label class="block">
              
                Zip/Postal Code
                </label>
            <br></br>
                <Input variant="outline" margin={10} Size="0vw"
                type="email"
                name="Zip-Code"
               
                placeholder="example"
              /><br/>
            
            <label>

                Country
                </label>
            <br></br>
                <Input variant="outline" margin={10} Size="0vw"
                type="email"
                name="Country"
               
                placeholder="example"
              /><br/>
            
            <label class="block">
              
                Phone Number
                </label>
            <br></br>
                <Input variant="outline" margin={10} Size="0vw"
                type="email"
                name="Phone-Number"
               
                placeholder="example"
              /><br/>
          
          </form>
          <div >Delivery Charges</div>
          <hr ></hr>
          <input type="radio" name=""></input>
          <span >55</span>
          <span >Max 7 Business Days</span>
          <button
            onClick={navigateTOHome}
          >
            NEXT
          </button>
        </div>
        <div >
          <div >ORDER SUMMARY</div>
          <div>
            1 ITEM IN CART
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
