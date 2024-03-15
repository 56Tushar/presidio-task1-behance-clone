import React, { useState } from "react";
import { behanceItem } from "../util";
import { AiFillFolderOpen } from "react-icons/ai";
import ModalScreen from "./ModalScreen";

function BehanceList() {
  const [ImageOpen, setImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [colorChange,setColorChange] = useState('gray');
  const [likes, setLikes] = useState(behanceItem[0].feLike);
  const [data, setData] = useState(0);
  const [showModal, setShowModal] = useState(false);
  
  const receiveDataFromChild = () => {
    setShowModal(false);
  };

 
  const handleClick = (index) => {
    console.log(behanceItem[index], index);
    if(behanceItem[index].like == false){
        behanceItem[index].feLike++;
        var currLikes = behanceItem[index].feLike;
        behanceItem[index].like = true;
    }
    else{
        behanceItem[index].feLike--;
        var currLikes = behanceItem[index].feLike;
        behanceItem[index].like = false;
    }
    setLikes(currLikes);
  }

  const openModal = (index) => {
    const data = {
        name: behanceItem[index].featureImg,
        age: 10,
        city: 'bihar'
    };
    setShowModal(true);
    setData(index);
  }

//   const openImage = (value) => {
//     setSelectedImage(value.fePatch);
//     setImageOpen(true);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//     setImageOpen(false);
//   };
  return (
    <section>
     {showModal && <ModalScreen data={data} sendDataToParent={receiveDataFromChild} />}
      <div className={showModal?("containerHolder item-holder px-4 disable-scroll"):("containerHolder item-holder px-4")}>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 py-5">
          {behanceItem.map((value, index) => (
            <div className="category-item cursor-pointer">
              <div className="category-img relative overflow-hidden rounded-md">
                <div className="bg-overlay" onClick={() => openModal(index)}></div>
                <img
                  className="modalImage"
                  src={value.featureImg}
                  alt="featureImg"
                ></img>
                <div className="save-file flex items-center absolute cursor-pointer top-2 left-2 py-2 px-3 bg-black/50 rounded-full">
                  <div className="s-icon text-white text-sm pr-1">
                    <AiFillFolderOpen />
                  </div>
                  <span className="text-white text-xs font-medium">Save</span>
                </div>
                <div className="patch absolute top-0 hover:translate-y-[-5px] cursor-pointer translate-y-[-10px] right-2">
                  <img src={value.fePatch} alt="" />
                </div>
              </div>
              <div className="cat-info py-3 flex justify-between">
                <div className="cat-name w-[80%]  cursor-pointer">
                  <h4 className="font-medium text-sm hover:underline leading-[15px]   text-ellipsis">
                    {value.featureTxt}
                  </h4>
                  <span className=" text-sm hover:underline ">
                    {value.feUser}
                  </span>
                </div>
                <div className="be-time flex">
                  <div className="be-like flex mr-2">
                    <div
                      className={value.like?"li-icon font-medium cursor-pointer mr-1 mt-[2px] text-[red]":"li-icon font-medium cursor-pointer mr-1 mt-[2px] text-[gray]"}
                      onClick={() => handleClick(index)}
                    >
                      {value.felikeIcons}
                    </div>
                    <span className="text-sm text-[#959595]">
                      {value.feLike}
                    </span>
                  </div>
                  <div className="be-watch flex mr-2">
                    <div className="li-icon  text-[#959595] mr-1 mt-[2px]">
                      {value.fewatchIcon}
                    </div>
                    <span className="text-sm text-[#959595]">
                      {value.feWatch}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BehanceList;
