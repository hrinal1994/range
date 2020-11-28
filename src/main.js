import React, { Component } from 'react';
import './App.css';



class Main extends Component {

    state={
        classForHighlight:false,
        leftGreen:50,
        leftBlue:50,
        rightGreen:50,
        rightBlue:50,
        capablityDetails:[
             {capName:"Capablity name 01" , value:50 ,rank:1},
             {capName:"Capablity name 02" , value:67,rank:2},
             {capName:"Capablity name 03" , value:53,rank:3},
             {capName:"Capablity name 04" , value:20,rank:4},
             {capName:"Capablity name 05" , value:90,rank:5},
             {capName:"Capablity name 06" , value:3,rank:6},
             {capName:"Capablity name 07" , value:50,rank:7},
             {capName:"Capablity name 08" , value:80,rank:8},
             {capName:"Capablity name 09" , value:85,rank:9},
             {capName:"Capablity name 10" , value:30,rank:10}

 
        ]



    }
    leftSlider=(e)=>{
        let leftGreen = e.target.value;
        let leftBlue= 100-leftGreen;

        //console.log(leftSlider);

        this.setState({leftGreen:leftGreen,leftBlue:leftBlue});
    }

    rightSlider=(e)=>{
        let rightGreen = e.target.value;
        let righBlue= 100-rightGreen;

        //console.log(leftSlider);

        this.setState({rightGreen:rightGreen,rightBlue:righBlue});
    }
    
    closeNav=()=>{

        document.getElementById("mySidepanel").style.width = "0px";
    }
    openNav=()=>{

        document.getElementById("mySidepanel").style.width = "275px";
    }

    closeNavRgt=()=>{

        document.getElementById("mySidepanel1").style.width = "0px";
    }
    openNavRgt=()=>{

        document.getElementById("mySidepanel1").style.width = "275px";
    }
    rangeChange=()=>{
       
            let arr=[... this.state.capablityDetails];
             for(let a=0;a<arr.length;a++){
                arr[a].value= document.getElementsByClassName("slider")[a].value;

             }
            arr.sort((a,b)=>b.value-a.value);
            console.log(arr);
     
            arr.map((elem,index)=> elem.rank=index+1);
            //console.log(arr.sort((a,b)=>a.capName-b.capName));
     
          let arrBold=[...this.state.capablityDetails];
             //this.setState({capablityDetails :arr})
             arrBold.forEach((val,i)=> {
                  
                 arr.forEach((value,ind)=>{
                     if(arrBold[i].capName==arr[ind].capName)
                     arrBold[i].rank= arr[ind].rank;
                       }
                 )
      
               });
         console.log(arrBold);
         
         this.setState({capablityDetails:arrBold});
             }
     
             highlight=(e)=>{
             console.log(e.target.innerHTML);
      if(e.target.innerHTML == 1 ||e.target.innerHTML == 2||e.target.innerHTML == 3){
     
        this.setState({classForHighlight:'highlight'});
      }
     
         
         
             }   
    


          
       // let values = this.state.capablityDetails.forEach((element,i)=>{
            //console.log(element.value,i);
            //arr[i] = element.value;
         
         
          //arr.push(element.value)
          //arr.sort((a,b)=>a-b)
        
         // } )
        //arr.sort((a,b)=>a-b);
// arr.sort((a,b)=>a.value-b.value);

       // console.log(arr);
        //console.log(sortredArr);

   // }


    render() {
  
        var list = this.state.capablityDetails.map((element,index) => {
            
            if(element.rank == 1 ||element.rank == 2||element.rank == 3){
                
                return <tr key={index}>
                        <td  className='highlight'>{element.capName}</td>
                        <td colSpan="3"><input  className='commonRange'  onChange={this.rangeChange} type="range" min="1" max="100"  class="slider" ></input></td>
                        <td  className='highlight' value={element.rank} onClick={(event)=>this.highlight(event)} >{element.rank}</td>
                       
                   </tr>
               
            }
            else{

                return <tr key={index}>
                <td  >{element.capName}</td>
                <td colSpan="3"><input  className='commonRange'  onChange={this.rangeChange} type="range" min="1" max="100"  class="slider" ></input></td>
               
       

                 <td   value={element.rank} onClick={(event)=>this.highlight(event)} >{element.rank}</td>
           
                 </tr>
            }
            

        })

        return (
            <div>
                <h2>Current Vs Desired Capabilities</h2>
                <table border='1'  className="mainTable">
                    <tr className="head">
                        <td> Capablity Name </td>
                        <td> Not Supported </td>
                        <td> Partially Supported </td>
                        <td> Fully Supported </td>
                        <td> Rank </td>
                    </tr>
                {list} 

                </table>

                <div className="replica">
              
                   <div className="upper" >
                   </div>
                   <div className="lower" ></div>
                   <div className="outer">
        <span id="leftPer"> {this.state.leftGreen}%</span> <span id="rightPer">{this.state.rightGreen}%</span>
                   <span id="leftPer1">{this.state.leftBlue}%</span> <span id="rightPer1">{this.state.rightBlue}%</span>
                 
                      <div className="circle">
                          <p className="catSpell1">Category 01</p>
                          <p className="catSpell2">Category 02</p>
                          <p></p>
                      <input  id="leftSlider" onChange={(event)=>this.leftSlider(event)} type="range" min="1" max="100"  class="range vertical-lowest-first" ></input>
                     
                      <input  id="rightSlider" onChange={(event)=>this.rightSlider(event)} type="range" min="1" max="100"  class="range rightRange  vertical-lowest-first" ></input>
                          </div> 
                     <div className="title"><span id="cat1">Current State</span><span id="cat2">Future State</span></div>
                     <div></div>
                   </div>
                    
                  

                </div>
                <div class="base">
                    <p className="category1">Category 01</p>
                    <p className="category2">Category 02</p>
                    <div id="mySidepanel" className="sidepanel">
  <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
</div>

<div id="mySidepanel1" className="sidepanel1">
  <a href="javascript:void(0)" className="closebtn1" onClick={this.closeNavRgt}>&times;</a>
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </div>
                    <div onClick={this.openNav} className="base1"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p></div>
                    <div onClick={this.openNavRgt} className="base2"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p></div>
                   
                 </div> 
            </div>
        );
    }
}

export default Main;