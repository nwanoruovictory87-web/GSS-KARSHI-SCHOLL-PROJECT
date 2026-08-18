function Filter(): React.ReactElement {
  return (
    <div className="w-full h-12">
      <section className="w-120 max-w-100 h-12  bg-pramary-dark-blue rounded-xl flex gap-2 items-center font-semibold  text-text-color pl-2 pr-2">
        <span className="w-60 h-7 items-center flex gap-2">
          <i className="fa fa-location min20Max24px"></i>
          <h5 className="w-fit">Tracking ID</h5>
        </span>
        <input
          className="w-full h-full"
          placeholder="Enter Tracking ID"
        ></input>
      </section>
    </div>
  );
}
export default Filter;
