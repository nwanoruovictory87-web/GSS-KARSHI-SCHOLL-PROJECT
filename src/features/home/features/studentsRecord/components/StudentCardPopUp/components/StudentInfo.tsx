import noProfileImg from "/assets/student-male.png";
import { useState, useRef, useEffect } from "react";
interface StudentsInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  dateOfBirth: string;
  gender: string;
  house: string;
  year: string;
}
interface ControlData {
  readonly: number;
  studentInfo?: StudentsInfo;
  validateInput: number;
  validateInputFunc: (result: number) => void;
  saveData: boolean;
  validateSaveInputFunc: (
    result: number,
    studentsInfor: StudentsInfo | null,
  ) => void;
}
function StudentInfo(prop: ControlData): React.ReactElement {
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [house, setHouse] = useState<string>("");
  const [year, setYear] = useState<string>("");
  //
  const firstNameRef = useRef<HTMLSpanElement | null>(null);
  const middleNameRef = useRef<HTMLSpanElement | null>(null);
  const lastNameRef = useRef<HTMLSpanElement | null>(null);
  const ageRef = useRef<HTMLSpanElement | null>(null);
  const dateOfBirthRef = useRef<HTMLSpanElement | null>(null);
  const genderRef = useRef<HTMLSpanElement | null>(null);
  const houseRef = useRef<HTMLSpanElement | null>(null);
  const yearRef = useRef<HTMLSpanElement | null>(null);
  //
  function activiteEmptyUXFallback(
    ref: React.RefObject<HTMLSpanElement | null>,
  ) {
    if (!ref.current) return;
    ref.current.classList.remove("border");
    ref.current.classList.remove("border-body-color");
    ref.current.classList.add("border-2");
    ref.current.classList.add("border-red-600");
  }
  function removeEmptyUXFallback(ref: React.RefObject<HTMLSpanElement | null>) {
    if (!ref.current) return;
    ref.current.classList.remove("border-2");
    ref.current.classList.remove("border-red-600");
    ref.current.classList.add("border");
    ref.current.classList.add("border-body-color");
  }
  //
  function validateInput(): boolean {
    if (firstName.length < 3) {
      activiteEmptyUXFallback(firstNameRef);
      return false;
    } else {
      removeEmptyUXFallback(firstNameRef);
    }
    //
    if (middleName.length < 3) {
      activiteEmptyUXFallback(middleNameRef);
      return false;
    } else {
      removeEmptyUXFallback(middleNameRef);
    }
    //
    if (lastName.length < 3) {
      activiteEmptyUXFallback(lastNameRef);
      return false;
    } else {
      removeEmptyUXFallback(lastNameRef);
    }
    //
    if (age.length < 1 || !Number(age)) {
      activiteEmptyUXFallback(ageRef);
      return false;
    } else {
      removeEmptyUXFallback(ageRef);
    }
    //
    if (gender.length < 3) {
      activiteEmptyUXFallback(genderRef);
      return false;
    } else {
      removeEmptyUXFallback(genderRef);
    }
    //
    if (dateOfBirth.length < 5) {
      activiteEmptyUXFallback(dateOfBirthRef);
      return false;
    } else {
      removeEmptyUXFallback(dateOfBirthRef);
    }
    //
    if (house.length < 3) {
      activiteEmptyUXFallback(houseRef);
      return false;
    } else {
      removeEmptyUXFallback(houseRef);
    }
    //
    if (year.length < 4) {
      activiteEmptyUXFallback(yearRef);
      return false;
    } else {
      removeEmptyUXFallback(yearRef);
    }
    return true;
  }
  //
  useEffect(() => {
    if (prop.readonly != 0) return;
    if (prop.validateInput != 1) return;
    const result = validateInput();
    if (result) {
      prop.validateInputFunc(1);
    } else {
      prop.validateInputFunc(2);
    }
  }, [prop.validateInput]);
  //
  useEffect(() => {
    if (prop.readonly != 0) return;
    if (!prop.saveData) return;
    const result = validateInput();
    if (result) {
      prop.validateSaveInputFunc(1, {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        age: age,
        dateOfBirth: dateOfBirth,
        gender: gender,
        house: house,
        year: year,
      });
    } else {
      prop.validateSaveInputFunc(2, null);
    }
  }, [prop.validateInput, prop.saveData]);
  //
  useEffect(() => {
    if (prop.readonly != 1) return;
    function updateInputSection(): void {
      const studentsData = prop.studentInfo;
      if (!studentsData) return;
      setFirstName(studentsData.firstName);
      setMiddleName(studentsData.middleName);
      setLastName(studentsData.lastName);
      setAge(studentsData.age);
      setDateOfBirth(studentsData.dateOfBirth);
      setGender(studentsData.gender);
      setHouse(studentsData.house);
      setYear(studentsData.year);
    }
    updateInputSection();
  }, []);
  return (
    <>
      {/**profile pic */}
      <div className="w-full h-fit flex justify-center mt-5">
        <div className="w-fit h-fit text-center flex flex-col items-center gap-2">
          <span className="w-25 h-25 block  ">
            <img
              className="w-full h-full rounded-full"
              src={noProfileImg}
            ></img>
          </span>
          <span className="w-fit flex">
            <h5 className="text-[#4646d1] text-[16px] font-semibold font-sans hover:text-[#9b9beb] transition-all pointer">
              Upload Student picture
            </h5>
          </span>
        </div>
      </div>
      {/** */}
      <div className="w-full h-fit p-2 mt-5">
        <div className="w-full h-fit border border-body-color bg-pramary-dark-blue rounded-t-xl pt-2 pb-2 grid grid-cols-3">
          <span className="pl-2 border-r border-r-body-color text-text-color font-sans font-medium text-[16px]">
            <h5>Firstname</h5>
          </span>
          <span className="border-r border-r-body-color pl-2 text-text-color font-sans font-medium text-[16px]">
            <h5>Middlename</h5>
          </span>
          <span className=" pl-2 text-text-color font-sans font-medium text-[16px]">
            <h5>Lastname</h5>
          </span>
        </div>
        {/** */}
        <div className="w-full h-fit  grid grid-cols-3 border-r border-r-body-color border-l border-l-body-color">
          <span
            className="border border-body-color text-pramary-dark-blue font-sans font-medium text-[16px] "
            ref={firstNameRef}
          >
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-gray-400 placeholder:font-semibold"
              placeholder="Exp Victory...."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </span>
          <span
            className="border border-body-color  pl-2 text-pramary-dark-blue font-sans font-medium text-[16px]"
            ref={middleNameRef}
          >
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-gray-400 placeholder:font-semibold"
              placeholder="Exp Chibuzo...."
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            ></input>
          </span>
          <span
            className=" pl-2 text-pramary-dark-blue border border-body-color font-sans font-medium text-[16px]"
            ref={lastNameRef}
          >
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-gray-400 placeholder:font-semibold"
              placeholder="Exp Nwanoruo...."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </span>
        </div>
        {/*** */}
        <div className="w-full h-fit border border-body-color bg-pramary-dark-blue  pt-2 pb-2 grid grid-cols-3 ">
          <span className="pl-2 border-r border-r-body-color text-text-color font-sans font-medium text-[16px]">
            <h5>Age</h5>
          </span>
          <span className="border-r border-r-body-color pl-2 text-text-color font-sans font-medium text-[16px]">
            <h5>Date Of Birth</h5>
          </span>
          <span className=" pl-2 text-text-color font-sans font-medium text-[16px]">
            <h5>Gender</h5>
          </span>
        </div>
        {/** */}
        <div className="w-full h-fit  grid grid-cols-3 border-r border-r-body-color border-l border-l-body-color">
          <span
            className="border border-body-color text-pramary-dark-blue font-sans font-medium text-[16px] "
            ref={ageRef}
          >
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-gray-400 placeholder:font-semibold"
              placeholder="Exp 22...."
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </span>
          <span
            className="border border-body-color pl-2 text-pramary-dark-blue font-sans font-medium text-[16px]"
            ref={dateOfBirthRef}
          >
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-gray-400 placeholder:font-semibold"
              placeholder="Exp 14/07/2004...."
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            ></input>
          </span>
          <span
            className=" pl-2 text-pramary-dark-blue border border-body-color font-sans font-medium text-[16px]"
            ref={genderRef}
          >
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-gray-400 placeholder:font-semibold"
              placeholder="Exp Male/Female...."
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            ></input>
          </span>
        </div>
        {/*** */}
        <div className="w-full h-fit border border-body-color bg-pramary-dark-blue  pt-2 pb-2 grid grid-cols-3">
          <span className="pl-2 border-r border-r-body-color text-text-color font-sans font-medium text-[16px]">
            <h5>House</h5>
          </span>
          <span className=" pl-2 border-r border-r-body-color text-text-color font-sans font-medium text-[16px]">
            <h5>Year</h5>
          </span>
          <span className=" pl-2 text-text-color font-sans font-medium text-[16px]">
            <h5></h5>
          </span>
        </div>
        {/** */}
        <div className="w-full h-fit  grid grid-cols-3 border border-body-color ">
          <span
            className="border border-body-color text-pramary-dark-blue font-sans font-medium text-[16px] "
            ref={houseRef}
          >
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-gray-400 placeholder:font-semibold "
              placeholder="Garki...."
              value={house}
              onChange={(e) => setHouse(e.target.value)}
            ></input>
          </span>
          <span
            className="border border-body-color pl-2 text-pramary-dark-blue font-sans font-medium text-[16px]"
            ref={yearRef}
          >
            <input
              className="w-full h-9 pl-2 text-pramary-dark-blue placeholder:text-gray-400 placeholder:font-semibold"
              placeholder="2020...."
              value={year}
              onChange={(e) => setYear(e.target.value)}
            ></input>
          </span>
          <span className=" pl-2 border border-body-color text-pramary-dark-blue font-sans font-medium text-[16px]"></span>
        </div>
        {/*** */}
        <div className="w-full h-9 border border-body-color bg-pramary-dark-blue rounded-b-xl  pt-2 pb-2 grid grid-cols-3">
          <span className="pl-2 border-r border-r-body-color text-text-color font-sans font-medium text-[16px]">
            <h5></h5>
          </span>
          <span className=" pl-2 border-r border-r-body-color text-text-color font-sans font-medium text-[16px]">
            <h5></h5>
          </span>
          <span className=" pl-2 text-text-color font-sans font-medium text-[16px]">
            <h5></h5>
          </span>
        </div>
        {/** */}
      </div>
      {/*** */}
    </>
  );
}
export default StudentInfo;
