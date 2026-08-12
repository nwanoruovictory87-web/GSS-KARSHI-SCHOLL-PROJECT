import groupAImg from "/assets/groupA.png";

function StudentsHiglights(): React.ReactElement {
  return (
    <article className="w-full  h-fit  grid grid-cols-4 gap-10">
      <section className="w-full min-w-55 h-fit bg-pramary-dark-blue rounded-xl flex flex-col gap-2 component-spacing border border-text-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          Total Students
        </h5>
        <div className="flex items-center gap-3 mb-2">
          <span className="block min-w-18 min-h-18 w-20 h-20 rounded-full ">
            <img className="w-full h-full rounded-full" src={groupAImg}></img>
          </span>
          <div className="flex flex-col ">
            <h5 className="text-text-color font-extrabold min20Max24px line-clamp-1">
              3,000
            </h5>
            <h5 className="text-text-color -mt-1">
              Total: <strong className="text-green-600">100%</strong>
            </h5>
          </div>
        </div>
      </section>
      <section className="w-full min-w-55 h-fit bg-pramary-dark-blue rounded-xl flex flex-col gap-2 component-spacing border border-text-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          Resumed Students
        </h5>
        <div className="flex items-center gap-3 mb-2">
          <span className="block min-w-18 min-h-18 w-20 h-20 rounded-full ">
            <img className="w-full h-full rounded-full" src={groupAImg}></img>
          </span>
          <div className="flex flex-col ">
            <h5 className="text-text-color font-extrabold min20Max24px line-clamp-1">
              2,650
            </h5>
            <h5 className="text-text-color -mt-1">
              Total: <strong className="text-green-600">82%</strong>
            </h5>
          </div>
        </div>
      </section>
      <section className="w-full min-w-55 h-fit bg-pramary-dark-blue rounded-xl flex flex-col gap-2 component-spacing border border-text-color">
        <h5 className="text-text-color font-medium min16Max18px line-clamp-1">
          Active Students
        </h5>
        <div className="flex items-center gap-3 mb-2">
          <span className="block min-w-18 min-h-18 w-20 h-20 rounded-full ">
            <img className="w-full h-full rounded-full" src={groupAImg}></img>
          </span>
          <div className="flex flex-col ">
            <h5 className="text-text-color font-extrabold min20Max24px line-clamp-1">
              2,342
            </h5>
            <h5 className="text-text-color -mt-1">
              Total: <strong className="text-green-600">60%</strong>
            </h5>
          </div>
        </div>
      </section>
      <section className="w-full min-w-55 h-fit bg-pramary-dark-blue rounded-xl flex flex-col gap-2 component-spacing border border-text-color">
        <h5 className="text-text-color font-medium min16Max18px">
          InActive Students
        </h5>
        <div className="flex items-center gap-3 mb-2">
          <span className="block min-w-18 min-h-18 w-20 h-20 rounded-full ">
            <img className="w-full h-full rounded-full" src={groupAImg}></img>
          </span>
          <div className="flex flex-col ">
            <h5 className="text-text-color font-extrabold min20Max24px line-clamp-1">
              348
            </h5>
            <h5 className="text-text-color -mt-1">
              Total: <strong className="text-red-600">20%</strong>
            </h5>
          </div>
        </div>
      </section>
    </article>
  );
}
export default StudentsHiglights;
