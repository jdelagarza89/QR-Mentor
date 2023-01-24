import React from "react";




function Body() {
    return(
       
            <div style={myStyle}>
                   
                      <img src = "/images/code.png" alt="" style={{width : "90%", height: "auto", marginTop :"15px", borderRadius:"20px" }}/>

                  
          
              <div style={{margin:"30px"}}>

                <p style={{fontWeight : "bold"}}>Improve your front-end skills by building projects</p>
                <p style={{margin:"20px"}}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                
              </div >

           
                
              
            </div>
          );
    
}
const myStyle ={
   backgroundColor:"white",
    margin:"auto",
    marginTop:"5%",
    marginBottom:"5%",
    width:"300px",
    boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius:" 20px"


}





export default Body;