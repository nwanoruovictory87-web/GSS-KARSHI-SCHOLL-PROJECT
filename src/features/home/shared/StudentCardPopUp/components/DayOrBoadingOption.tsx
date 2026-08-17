function DayOrBoadingOption(): React.ReactElement {
  return (
    <div className="w-fit h-fit pl-4 flex flex-col gap-3  mt-2 p-2">
      <span className="flex items-center gap-1 ">
        <input className="w-5 h-5" type="radio"></input>
        <h5 className="text-pramary-dark-blue font-semibold text-[16px] ">
          Day Student
        </h5>
      </span>
      <h5 className="text-[16px] font-sans font-medium text-gray-600">Or</h5>
      <span className="flex items-center gap-1 ">
        <input className="w-5 h-5" type="radio"></input>
        <h5 className="text-pramary-dark-blue font-semibold text-[16px] ">
          Boarding Student
        </h5>
      </span>
    </div>
  );
}
export default DayOrBoadingOption;
