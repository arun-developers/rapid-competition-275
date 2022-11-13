import axios from "axios";
import "./CheckOut.css";
import React, { useContext } from "react";
import { Input, Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CheckOutPage1({show,sshow,orderedData}) {
  //const navigate =useNavigate();
  const [data, setData] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(findPrice(orderedData));
  const [topline, setTopline] = React.useState(true);
  const [formData, setformData] = useState({
    email: "",
    fname: "",
    lname: "",
    stAddress: "",
    city: "",
    state: "",
    country: "India",
    pin: "",
    phoneno: "",
  });

  function saveFormData(data){
    localStorage.setItem('formdata', JSON.stringify(data));
  }

  console.log(orderedData,"11")
  function findPrice(data){
    let sum =0
    for (let i = 0; i < data.length; i++) {
      sum += (+(data[i].price));
  }
    return sum;
    
    
  }

  const submitPage = (data) => {
    saveFormData(data)
  };

  return (
    <div>
      <div>
        <div style={{ display: "flex", margin: "5vh 10vw" }}>
          {topline ? (
            <div style={{ display: "flex" }}>
              <div
                style={{
                  height: "1vh",
                  width: "15vw",
                  backgroundColor: "rgb(221,2,133)",
                }}
              ></div>
              <div
                style={{
                  height: "1vh",
                  width: "15vw",
                  backgroundColor: "rgb(246,246,246)",
                }}
              ></div>
            </div>
          ) : (
            <div style={{ display: "flex" }}>
              <div
                style={{
                  height: "1vh",
                  width: "15vw",
                  backgroundColor: "rgb(221,2,133)",
                }}
              ></div>
              <div
                style={{
                  height: "1vh",
                  width: "15vw",
                  backgroundColor: "rgb(221,2,133)",
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
      <div style={{ margin: "0vh 8vw", display: "flex", gap: "3vw" }}>
        <div style={{ width: "65%" }}>
          <div>
            <div className="title">Shipping Address</div>
            <div className="line"></div>
            <form onSubmit={submitPage(formData)}>
              <label className="lable">
                Email Address <span className="star">*</span>
              </label>
              <br></br>
              <Input
                variant="outline"
                height="4vh"
                margin={20}
                width="50vw"
                required
                placeholder=""
                onChange={(e) =>
                  setformData({ ...formData, email: e.target.value })
                }
              />
              <br />
              <span style={{ marginLeft: "2vw" }}>
                You can create an account after checkout.
              </span>
              <br />
              <label className="lable">
                First Name <span className="star">*</span>
              </label>
              <br></br>
              <Input
                variant="outline"
                height="4vh"
                margin={20}
                required
                width="50vw"
                onChange={(e) =>
                  setformData({ ...formData, fname: e.target.value })
                }
              />
              <br />
              <label className="lable">
                Last Name <span className="star">*</span>
              </label>
              <br></br>
              <Input
                variant="outline"
                height="4vh"
                margin={20}
                required
                width="50vw"
                onChange={(e) =>
                  setformData({ ...formData, lname: e.target.value })
                }
              />
              <br />
              <label className="lable">
                Street Address <span className="star">*</span>
              </label>
              <br></br>
              <Input
                variant="outline"
                height="4vh"
                margin={20}
                required
                width="50vw"
                placeholder=""
                onChange={(e) =>
                  setformData({ ...formData, stAddress: e.target.value })
                }
              />
              <br />
              <label className="lable">
                City <span className="star">*</span>
              </label>
              <br></br>
              <Input
                variant="outline"
                height="4vh"
                margin={20}
                required
                width="50vw"
                onChange={(e) =>
                  setformData({ ...formData, city: e.target.value })
                }
              />
              <br />
              <label className="lable">
                State <span className="star">*</span>
              </label>
              <br></br>
              <Input
                variant="outline"
                height="4vh"
                margin={20}
                required
                width="50vw"
                onChange={(e) =>
                  setformData({ ...formData, state: e.target.value })
                }
              />
              <br />
              <label className="lable">Zip/Postal Code</label>
              <br></br>
              <Input
                required
                variant="outline"
                height="4vh"
                margin={20}
                width="50vw"
                onChange={(e) =>
                  setformData({ ...formData, code: e.target.value })
                }
              />
              <br />
              <label className="lable">
                Country <span className="star">*</span>
              </label>
              <br></br>
              <Select
                style={{
                  height: "5vh",
                  size: "lg",
                  marginLeft: "1vw",
                  width: "50vw",
                }}
                variant="outline"
                placeholder="Select country"
                value={formData.country}
                onChange={(e) =>
                  setformData({ ...formData, country: e.target.value })
                }
              >
                <option value="Afghanistan"> Afghanistan</option>
                <option value="Albania"> Albania</option>
                <option value="Australia">Australia</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Belgium">Belgium</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Canada">Canada</option>
                <option value="China"> China</option>
                <option value="Cyprus"> Cyprus</option>
                <option value="France"> France</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                <option value="Lebanon">Lebanon</option>
                <option value="India">India</option>
              </Select>

              <br />
              <label className="lable">
                Phone no <span className="star">*</span>
              </label>
              <br></br>
              <Input
                variant="outline"
                type="number"
                max={10}
                min={10}
                height="4vh"
                required
                margin={20}
                width="50vw"
                onChange={(e) =>
                  setformData({ ...formData, phoneno: e.target.value })
                }
              />
              <br />
            </form>
            <div className="title">Delivery Charges</div>
            <div className="line"></div>
            <div style={{ marginTop: "2vh", gap: "3vw", display: "flex" }}>
              <div>
                <input type="radio" name="" checked="checked"></input>
              </div>
              <div>
                <span>{totalPrice}</span>
              </div>
              <div>
                <span>Max 7 Business Days</span>
              </div>
            </div>
            <div>
              {" "}
              <button
                className="next"
                onClick={() => {
                  if((formData.fname!=="")&&(formData.lname!=="")&&(formData.email!=="")){
                    sshow();
                  }else{
                    alert("you should fill the form")
                  }
    
              }}
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
        <div style={{ width: "65%", marginTop: "8vh" ,height:"3vh" }}>
        <div style={{ height: "60vh", overflowX:"hidden",overflow: "scroll",backgroundColor: "rgb(246,246,246)", marginTop: "8vh" }}>
          <div className="title">ORDER SUMMARY</div>
         { orderedData?.map((el)=><div style={{display:"flex",gap:"3vw",margin:"2vw"}}>
            <div><img style={{borderRadius:"3vw"}} src={el.image_link} width="150vw" height="140vh" alt="" /></div>
            <div>
            <div><label>{el.name}</label></div>
            <div><label>{el.price_sign}  {el.price }</label></div>
            </div>
           
          </div>)}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage1;
