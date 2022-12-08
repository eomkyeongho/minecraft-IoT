import React from "react";
import block1 from './Img/1.JPG'
import block2 from './Img/2.JPG'
import block3 from './Img/3.JPG'
import block4 from './Img/4.JPG'
import block5 from './Img/5.JPG'
import block7 from './Img/7.JPG'
import block12 from './Img/12.JPG'
import block13 from './Img/13.JPG'
import block14 from './Img/14.JPG'
import block17 from './Img/17.JPG'


function BlockImg({props}) {
    if(props === "1"){
        return (
            <div>
                <img src={block1} alt="" />
            </div>
        )
    }
    if(props === "2"){
        return (
            <div>
                <img src={block2} alt="" />
            </div>
        )
    }
    if(props === "3"){
        return (
            <div>
                <img src={block3} alt="" />
            </div>
        )
    }
    if(props === "4"){
        return (
            <div>
                <img src={block4} alt="" />
            </div>
        )
    }if(props === "5"){
        return (
            <div>
                <img src={block5} alt="" />
            </div>
        )
    }if(props === "7"){
        return (
            <div>
                <img src={block7} alt="" />
            </div>
        )
    }if(props === "12"){
        return (
            <div>
                <img src={block12} alt="" />
            </div>
        )
    }if(props === "13"){
        return (
            <div>
                <img src={block13} alt="" />
            </div>
        )
    }
    if(props === "14"){
        return (
            <div>
                <img src={block14} alt="" />
            </div>
        )
    }
    if(props === "17"){
        return (
            <div>
                <img src={block17} alt="" />
            </div>
        )
    }
    
}

export default BlockImg