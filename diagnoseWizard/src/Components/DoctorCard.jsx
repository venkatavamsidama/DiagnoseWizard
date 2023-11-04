const DoctorCard = (props) => {
    return (
        <div >
            <div className="text-start w-[408px] h-[306px] overflow-hidden">
                <img src={props.imageSrc} alt="hospital image" id="doctorCard" />

            </div>
            <div className="text-start w-[408px] ">
                <div className=" bg-[#00A0AA] text-[#FFFFFF] translate-y-[-100%]  ">
                    <div className="flex ">
                        <h3 className="text-[20px] font-semibold ml-[15px] mt-[15px]">
                           {props.name}
                        </h3>
                        <a href={props.website} className="">
                        <img src="assets/hospital_web.svg" alt=""  className="w-[20px] mr-[5px] mt-[20px]"/>
                        </a>
                    </div>
                    <div className="flex justify-between mx-[15px] mt-[5px]">
                        <p ><span className="text-[#FFC567] font-bold mr-[2px]">{props.rating}</span>/5 </p>
                        <div className="flex">
                            <div className="flex">
                                <img src="/assets/phone_doctor.svg" alt=""  className="w-[20px] mr-[5px]"/>   <p>{props.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center bg-[#00A0AA] text-[#FFFFFF] font-bold mt-[10px] border-t-[1px] ">
                        <a href={props.directions} target="_blank">
                            <button className="text-[18px] font-semibold my-[10px] w-[408] " id="doctorCard" >
                                Go To Hospital
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorCard;