import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
function Top(): React.ReactElement {
  const [searchParams, _] = useSearchParams();
  const sections = searchParams.get("section");
  const [renderSearchBox, setRenderSearchBox] = useState<boolean>(false);
  //
  useEffect(() => {
    switch (sections) {
      case "students/alerts":
        setRenderSearchBox(true);
        break;
      case "students/info":
        setRenderSearchBox(true);
        break;
      case "students/feedback/reports":
        setRenderSearchBox(true);
        break;
      case "students/tracking":
        setRenderSearchBox(true);
        break;
      default:
        setRenderSearchBox(false);
        break;
    }
  }, [sections]);
  return (
    <header className="w-full  bg-pramary-dark-blue component-spacing flex items-center h-14">
      <section className="text-text-color mr-auto flex gap-1 items-center">
        <h1 className="font-extrabold ">
          GSS KARSHI STUDENTS RECORD & TRACKING
        </h1>
      </section>
      {renderSearchBox && (
        <search className="w-60 bg-body-color h-8 mr-auto rounded-xs flex items-center gap-1.5 pl-1">
          <i className="fa fa-search text-gray-200 text-xl"></i>
          <input
            className="w-full h-full pl-1 placeholder:text-gray-400 text-text-color"
            placeholder="Search..."
          ></input>
        </search>
      )}
    </header>
  );
}
export default Top;
