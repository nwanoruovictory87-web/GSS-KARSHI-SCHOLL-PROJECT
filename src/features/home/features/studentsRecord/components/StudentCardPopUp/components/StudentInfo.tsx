import noProfileImg from "/assets/student-male.png";
function StudentInfo(): React.ReactElement {
  return (
    <>
      {/**profile pic */}
      <div className="w-full h-fit flex justify-center mt-5">
        <div className="w-fit h-fit text-center flex flex-col items-center gap-2">
          <span className="w-25 h-25 block  ">
            <img
              className="w-full h-full rounded-full"
              src={noProfileImg}
            ></img>
          </span>
          <span className="w-fit flex">
            <h5 className="text-[#4646d1] text-[16px] font-semibold font-sans hover:text-[#9b9beb] transition-all pointer">
              Upload Student picture
            </h5>
          </span>
        </div>
      </div>
      {/** */}
      <div className="w-full h-fit p-2 mt-5">
        <div className="w-full h-fit bg-pramary-dark-blue rounded-t-xl pt-2 pb-2 grid grid-cols-3">
          <span className="pl-2 border-r border-r-body-color text-text-color font-sans font-medium text-[16px]">
            <h5>Firstname</h5>
          </span>
          <span className="border-r border-r-body-color pl-2 text-text-color font-sans font-medium text-[16px]">
            <h5>Middlename</h5>
          </span>
          <span className=" pl-2 text-text-color font-sans font-medium text-[16px]">
            <h5>Lastname</h5>
          </span>
        </div>
        {/** */}
        <div className="w-full h-fit  grid grid-cols-3 border-r border-r-body-color border-l border-l-body-color">
          <span className="border-r border-r-body-color text-pramary-dark-blue font-sans font-medium text-[16px] ">
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-pramary-dark-blue placeholder:font-semibold"
              placeholder="Enter text...."
            ></input>
          </span>
          <span className="border-r border-r-body-color pl-2 text-pramary-dark-blue font-sans font-medium text-[16px]">
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-pramary-dark-blue placeholder:font-semibold"
              placeholder="Enter text...."
            ></input>
          </span>
          <span className=" pl-2 text-pramary-dark-blue font-sans font-medium text-[16px]">
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-pramary-dark-blue placeholder:font-semibold"
              placeholder="Enter text...."
            ></input>
          </span>
        </div>
        {/*** */}
        <div className="w-full h-fit bg-pramary-dark-blue  pt-2 pb-2 grid grid-cols-3">
          <span className="pl-2 border-r border-r-body-color text-text-color font-sans font-medium text-[16px]">
            <h5>Age</h5>
          </span>
          <span className="border-r border-r-body-color pl-2 text-text-color font-sans font-medium text-[16px]">
            <h5>Date Of Birth</h5>
          </span>
          <span className=" pl-2 text-text-color font-sans font-medium text-[16px]">
            <h5>Gender</h5>
          </span>
        </div>
        {/** */}
        <div className="w-full h-fit  grid grid-cols-3 border-b border-b-body-color border-r border-r-body-color border-l border-l-body-color">
          <span className="border-r border-r-body-color text-pramary-dark-blue font-sans font-medium text-[16px] ">
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-pramary-dark-blue placeholder:font-semibold"
              placeholder="Enter text...."
            ></input>
          </span>
          <span className="border-r border-r-body-color pl-2 text-pramary-dark-blue font-sans font-medium text-[16px]">
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-pramary-dark-blue placeholder:font-semibold"
              placeholder="Enter text...."
            ></input>
          </span>
          <span className=" pl-2 text-pramary-dark-blue font-sans font-medium text-[16px]">
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-pramary-dark-blue placeholder:font-semibold"
              placeholder="Enter text...."
            ></input>
          </span>
        </div>
        {/*** */}
        <div className="w-full h-fit bg-pramary-dark-blue  pt-2 pb-2 grid grid-cols-3">
          <span className="pl-2 border-r border-r-body-color text-text-color font-sans font-medium text-[16px]">
            <h5>House</h5>
          </span>
          <span className=" pl-2 border-r border-r-body-color text-text-color font-sans font-medium text-[16px]">
            <h5></h5>
          </span>
          <span className=" pl-2 text-text-color font-sans font-medium text-[16px]">
            <h5></h5>
          </span>
        </div>
        {/** */}
        <div className="w-full h-fit  grid grid-cols-3 border-b border-b-body-color border-r border-r-body-color border-l border-l-body-color">
          <span className="border-r border-r-body-color text-pramary-dark-blue font-sans font-medium text-[16px] ">
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-pramary-dark-blue placeholder:font-semibold"
              placeholder="Enter text...."
            ></input>
          </span>
          <span className="border-r border-r-body-color pl-2 text-pramary-dark-blue font-sans font-medium text-[16px]"></span>
          <span className=" pl-2 text-pramary-dark-blue font-sans font-medium text-[16px]"></span>
        </div>
      </div>
      {/*** */}
    </>
  );
}
export default StudentInfo;
