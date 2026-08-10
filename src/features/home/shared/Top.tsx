//import logo from "/assets/school-logo.png";
function Top(): React.ReactElement {
  return (
    <header className="w-full h-fit bg-pramary-dark-blue component-spacing flex items-center">
      <section className="text-text-color mr-auto flex gap-1 items-center">
        <h1 className="font-extrabold ">
          GSS KARSHI STUDENTS RECORD & TRACKING
        </h1>
      </section>
      <search className="w-60 bg-body-color h-8 mr-auto rounded-xs flex items-center gap-1.5 pl-1">
        <i className="fa fa-search text-gray-200 text-xl"></i>
        <input
          className="w-full h-full pl-1 placeholder:text-gray-400"
          placeholder="Search..."
        ></input>
      </search>
    </header>
  );
}
export default Top;
