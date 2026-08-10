import StudentsInfo from "./StudentsInfo";
function List(): React.ReactElement {
  return (
    <div className=" w-full h-full overflow-y-auto pb-12 ">
      {/** */}
      <div className="w-full flex flex-col  border-r border-r-body-color border-l border-l-body-coborder-r-body-color ">
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
        <StudentsInfo />
      </div>
    </div>
  );
}
export default List;
