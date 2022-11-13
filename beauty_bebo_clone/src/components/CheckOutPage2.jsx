import axios from "axios";
import "./CheckOut.css";
import React, { useContext, useEffect } from "react";
import { Input, Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ButtonP.css"

function CheckOutPage2({ show, sshow, orderedData }) {
  const [data, setData] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(findPrice(orderedData));
  const [discount, setDiscount] = React.useState(false);
  const [dmethod, setDmethod] = useState({ COD: false, CARD: false });
  const [formData, setformData] = useState();
  const [promo, setpromo] = useState(false);
  const [promotxt, setpromotxt] = useState("");
  const [disPrice, setdisPrice] = useState(0);

  function takeformdata() {
   
    const items = JSON.parse(localStorage.getItem('formdata'));
    if (items) {
      setformData(items);
      console.log(items,"ggg")
    }
    
  }
  useEffect(() => {
    takeformdata();
  }, []);

  function apply(p) {
    let masai=p.slice(0,5)
    masai.toUpperCase();
    if (
      p === `${masai}10` ||
      p === `${masai}20` ||
      p === `${masai}30` ||
      p === `${masai}40` ||
      p === `${masai}50` ||
      p === `${masai}60` ||
      p === `${masai}70` 
    ) {
      setdisPrice((totalPrice / 100) * +(p[5] + p[6]));
      setTotalPrice(
        (totalPrice) => totalPrice - (totalPrice / 100) * +(p[5] + p[6])
      );
      setpromo(true);
    }
  }
  function findPrice(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += +data[i].price;
    }
    return sum;
  }

  console.log(formData, "KK");
  const changeDMethod = (m) => {
    if (m === "COD") {
      setDmethod({
        COD: !dmethod.COD,
        CARD: dmethod.CARD === !dmethod.COD ? !dmethod.CARD : dmethod.CARD,
      });
    } else {
      setDmethod({
        COD: dmethod.COD === !dmethod.CARD ? !dmethod.COD : dmethod.COD,
        CARD: !dmethod.CARD,
      });
    }
  };
 
  return (
    <div>
      <div>
        <div style={{ display: "flex", margin: "5vh 10vw" }}>
          <div style={{ display: "flex" }}>
            <div
              onClick={() => {
                sshow();
              }}
              style={{
                height: "1vh",
                width: "15vw",
                cursor: "grab",
                backgroundColor: "rgb(246,246,246)",
              }}
            ></div>
            <div
              style={{
                height: "1vh",
                width: "15vw",
                cursor: "grab",
                backgroundColor: "rgb(221,2,133)",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div style={{ margin: "0vh 8vw", display: "flex", gap: "3vw" }}>
        <div style={{ width: "65%" }}>
          <div>
            <div className="title">PAYMENT METHOD</div>
            <div className="line"></div>
            <div style={{ marginTop: "4vh", gap: "3vw", display: "flex" }}>
              <div>
                <input
                  type="radio"
                  name=""
                  onChange={() => {
                    changeDMethod("COD");
                  }}
                  checked={dmethod.COD}
                ></input>
              </div>
              <div>
                <label className="lable"> Cash On Delivery</label>
              </div>
            </div>
            <div style={{ marginTop: "2vh", gap: "3vw", display: "flex" }}>
              <div>
                <input
                  type="radio"
                  name=""
                  onChange={() => {
                    changeDMethod("CARD");
                  }}
                  checked={dmethod.CARD}
                ></input>
              </div>
              <div>
                <label className="lable">
                  Debit/Credit Card/Net banking/Wallet - PayUmoney
                </label>
              </div>
            </div>
            <div style={{ marginTop: "4vh" }}>
              {" "}
              <label className="lable">Apply Discount Code</label>
              <input
                type="checkbox"
                id=""
                name="Ccode"
                value="code"
                onChange={() => setDiscount((discount) => !discount)}
                checked={discount}
              ></input>
            </div>
            {discount && (
              <div>
                <Input
                  required
                  variant="outline"
                  height="4vh"
                  margin={10}
                  width="30vw"
                  value={promotxt}
                  onChange={(e) => setpromotxt(e.target.value)}
                />
                <button
                  className="next"
                  style={{ width: "20vw", marginLeft: "30vw" }}
                  onClick={() => {
                    apply(promotxt);
                  }}
                >
                  APPLY DISCOUNT
                </button>
              </div>
            )}
          </div>
        </div>
        <div style={{ width: "45%", marginTop: "8vh" }}>
        <div className="title">ORDER SUMMARY</div>
          <div style={{ height: "60vh", overflowX:"hidden",overflow: "scroll",backgroundColor: "rgb(246,246,246)", marginTop: "8vh" }}>
            
            {orderedData?.map((el) => (
              <div
                key={el.id}
                style={{ display: "flex", gap: "3vw", margin: "2vw" }}
              >
                <div>
                  <img
                    style={{ borderRadius: "3vw" }}
                    src={el.image_link}
                    width="150vw"
                    height="140vh"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <label>{el.name}</label>
                  </div>
                  <div>
                    <label>
                      {el.price_sign} {el.price}
                    </label>
                  </div>
                </div>
              </div>
            ))}
            <label style={{marginBottom:"3vh"}}>{`Shipping charge  $1`}</label>
            {promo ? (
              <div>
              <label style={{marginBottom:"3vh"}}>{` price After discount ${totalPrice}`}</label><br />
                <label style={{marginBottom:"3vh"}}>{` discount ${disPrice}`}</label>
                <label style={{marginBottom:"3vh"}}>`Total price ${totalPrice+1}`</label>
              </div>
            ) : (
              <div>
              <label style={{marginBottom:"3vh"}}>Price ${totalPrice}</label><br />
              <label style={{marginBottom:"3vh"}}>Total price ${totalPrice+1}</label><br />
              </div>
            )}
          </div>
          <div
            style={{
              height: "48vh",
              marginTop: "18vh",
              backgroundColor: "rgb(246,246,246)",
            }}
          >
            <div className="title">SHIP TO:</div>
            <label className="label">{`First Name : ${formData?.fname}`}</label><br />
            <label className="label">{`Last Name : ${formData?.lname}`}</label><br />
            <label className="label">{`Email  : ${formData?.email}`}</label><br />
            <label className="label">{`City  : ${formData?.city}`}</label><br />
            <label className="label">{`Country  : ${formData?.country}`}</label><br />
            <label className="label">{`PhoneNo  : ${formData?.phoneno}`}</label><br />
          </div>
          <div
            style={{
              height: "8vh",
              marginTop: "8vh",
              backgroundColor: "rgb(246,246,246)",
            }}
          >
            <div className="title">SHIPPING METHOD:</div>
            <label className="label">Best Way - Max 7 Business days</label>
          </div>
          
        </div>
        
      </div>
      <button
                  className="next button-19"
                  style={{ width: "15vw",height:"5vh",
                    marginLeft:"40vw",
                    marginTop:"6vh",
                    marginBottom:"7vh"}}
                  onClick={() => {
                    alert("ordered will be delivered in our address")
                  }}
                >
                  PROCEED
                </button>
    </div>
  );
}

export default CheckOutPage2;
