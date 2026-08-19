import { useRef } from "react";
function DayOrBoadingOption({
  setDay,
  setBording,
}: {
  setDay: React.Dispatch<React.SetStateAction<boolean>>;
  setBording: React.Dispatch<React.SetStateAction<boolean>>;
}): React.ReactElement {
  //
  const dayRef = useRef<HTMLInputElement | null>(null);
  const bordingRef = useRef<HTMLInputElement | null>(null);
  //
  function clickDay() {
    if (!dayRef.current || !bordingRef.current) return;
    setBording(false);
    setDay(true);
    bordingRef.current.checked = false;
  }
  function clickBording() {
    if (!dayRef.current || !bordingRef.current) return;
    setDay(false);
    setBording(true);
    dayRef.current.checked = false;
  }

  return (
    <div className="w-fit h-fit pl-4 flex  gap-3  mt-2 p-2">
      <span className="flex items-center gap-1 ">
        <input
          className="w-5 h-5 test"
          type="radio"
          ref={dayRef}
          onClick={clickDay}
        ></input>
        <h5 className="text-pramary-dark-blue font-semibold text-[16px] ">
          Day Student
        </h5>
      </span>
      <h5 className="text-[16px] font-sans font-medium text-gray-600">Or</h5>
      <span className="flex items-center gap-1 ">
        <input
          className="w-5 h-5"
          type="radio"
          ref={bordingRef}
          onClick={clickBording}
        ></input>
        <h5 className="text-pramary-dark-blue font-semibold text-[16px] ">
          Boarding Student
        </h5>
      </span>
    </div>
  );
}
export default DayOrBoadingOption;
