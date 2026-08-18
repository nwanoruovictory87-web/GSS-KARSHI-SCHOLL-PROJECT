import AddStudents from "./StudentCardPopUp/AddStudents";
import { useState } from "react";
function Filter(): React.ReactElement {
  const [isPopUp, setPopUp] = useState<boolean>(false);
  function popUpCard(): void {
    setPopUp(!isPopUp);
  }
  return (
    <article className="w-full relative">
      <section className="flex w-full gap-5">
        <section className="w-50 max-w-50 h-12 bg-pramary-dark-blue rounded-xl flex gap-2 items-center font-semibold  text-text-color pl-2 pr-2">
          <i className="fa fa-calendar min20Max24px"></i>
          <h5>Year</h5>
          <input className="w-full h-full" placeholder="Enter year"></input>
        </section>
        <section className="w-60 max-w-60 h-12 bg-pramary-dark-blue rounded-xl flex gap-2 items-center font-semibold  text-text-color pl-2 pr-2">
          <i className="fa fa-home min20Max24px"></i>
          <h5>House</h5>
          <input className="w-full h-full" placeholder="Enter house"></input>
        </section>
        <section className="w-fit h-12 bg-pramary-dark-blue rounded-xl flex gap-2 items-center font-semibold  text-text-color pl-1 pr-1">
          <span className="flex w-fit gap-1 items-center">
            <i className="fa fa-male min20Max24px -mr-1"></i>
            <h5>Gender</h5>
            <i className="fa fa-angle-down pointer"></i>
          </span>
        </section>
        <section
          className="pointer ml-auto w-30 h-12  rounded-xl flex gap-3 justify-center items-center font-semibold  bg-text-color text-pramary-dark-blue pl-2 pr-2"
          onClick={popUpCard}
        >
          <i className="fa fa-plus min20Max24px -mr-1"></i>
          <h5>Add</h5>
        </section>
      </section>
      {isPopUp && <AddStudents control={popUpCard} />}
    </article>
  );
}
export default Filter;
