function LeftNavigationBar(): React.ReactElement {
  return (
    <nav className="w-[30%] max-w-60 h-full bg-pramary-dark-blue flex flex-col component-spacing gap-7">
      <section className="pointer flex items-center  gap-2 text-gray-400 font-medium text-[24px] mt-10 pl-4">
        <i className="fa fa-home"></i>
        <h5 className="text-[20px] text-gray-400">Overview</h5>
      </section>
      <section className="pointer flex items-center  gap-2 text-text-color font-medium text-[24px]  pl-4">
        <i className="fa fa-triangle-exclamation"></i>
        <h5 className="text-[20px]">Alerts</h5>
      </section>
      <section className="pointer flex items-center  gap-2 text-text-color font-medium text-[24px]  pl-4">
        <i className="fa fa-users"></i>
        <h5 className="text-[20px]">Students</h5>
      </section>
      <section className="pointer flex items-center  gap-2 text-text-color font-medium text-[24px]  pl-4">
        <i className="fa fa-location"></i>
        <h5 className="text-[20px]">Tracking</h5>
      </section>
      <section className="pointer flex items-center  gap-2 text-text-color font-medium text-[24px]  pl-4">
        <i className="fa fa-globe"></i>
        <h5 className="text-[20px]">All Tracking</h5>
      </section>
      <section className="pointer flex items-center  gap-2 text-text-color font-medium text-[24px]  pl-4">
        <i className="fa fa-gears"></i>
        <h5 className="text-[20px]">Dev Mode</h5>
      </section>
    </nav>
  );
}
export default LeftNavigationBar;
