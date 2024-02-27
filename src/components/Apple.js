import React from "react";

class Apple extends React.Component
{
  render(){
    const {appleInfo}=this.props;
    const {type,color}=appleInfo;
    return(
       <h3>Hi,I am {color} {type} Apple</h3>
    );
      
  }
  
}

export default Apple;