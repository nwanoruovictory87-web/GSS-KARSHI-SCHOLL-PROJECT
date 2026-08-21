function Filter(): React.ReactElement {
  return (
    <article className="flex w-full gap-5">
      <section className="w-50 max-w-50 h-12 bg-pramary-dark-blue rounded-xl flex gap-2 items-center font-semibold  text-text-color pl-2 pr-2">
        <i className="fa fa-calendar min20Max24px"></i>
        <h5>Year</h5>
        <input className="w-full h-full" placeholder="Enter year"></input>
      </section>
      <section className="w-50 max-w-50 h-12 bg-pramary-dark-blue rounded-xl flex gap-2 items-center font-semibold  text-text-color pl-2 pr-2">
        <i className="fa fa-calendar min20Max24px"></i>
        <h5>Month</h5>
        <input className="w-full h-full" placeholder="Enter month"></input>
      </section>
      <section className="w-50 max-w-50 h-12 bg-pramary-dark-blue rounded-xl flex gap-2 items-center font-semibold  text-text-color pl-2 pr-2">
        <i className="fa fa-calendar min20Max24px"></i>
        <h5>Time</h5>
        <input className="w-full h-full" placeholder="Enter time"></input>
      </section>
      <section className="w-40 h-12 bg-pramary-dark-blue rounded-xl flex gap-2 items-center font-semibold  text-text-color pl-1 pr-1">
        <span className="flex w-fit gap-1 items-center">
          <i className="fa fa-stopwatch min20Max24px -mr-1"></i>
          <h5>Watch State</h5>
          <i className="fa fa-angle-down pointer"></i>
        </span>
      </section>
    </article>
  );
}
export default Filter;
