import noProfileImg from "/assets/student-male.png";
function StudentsCard({
  firstName,
  middleName,
  lastName,
  age,
  dateOfBirth,
  gender,
  house,
  image,
}: {
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  dateOfBirth: string;
  gender: string;
  house: string;
  image: string | null;
}): React.ReactElement {
  return (
    <div className="w-full flex  gap-3  ">
      <span className="min-w-23 max-w-23 min-h-23 max-h-23 rounded-full block  mr-auto">
        <img
          className="w-full h-full rounded-full"
          src={image ? image : noProfileImg}
        ></img>
      </span>
      <div className="w-full mt-2 flex flex-col gap-1 ml-auto">
        <span className="min16Max18px h-6 overflow-hidden text-text-color flex gap-2">
          <h2 className="">FirstName:</h2>
          <h2 className=" line-clamp-1">{firstName}</h2>
        </span>
        <span className="min16Max18px h-6 overflow-hidden text-text-color flex gap-2">
          <h2 className="">LastName:</h2>
          <h2 className="line-clamp-1">{lastName}</h2>
        </span>
        <span className="min16Max18px h-6 overflow-hidden text-text-color flex gap-2">
          <h2 className="">MiddleName:</h2>
          <h2 className="line-clamp-1">{middleName}</h2>
        </span>
        <span className="min16Max18px h-6 overflow-hidden text-text-color flex gap-2">
          <h2 className="">Age:</h2>
          <h2 className="line-clamp-1">{age}</h2>
        </span>
        <span className="min16Max18px h-6 overflow-hidden text-text-color flex gap-2">
          <h2 className="">Date Of Birth:</h2>
          <h2 className="line-clamp-1">{dateOfBirth}</h2>
        </span>
        <span className="min16Max18px h-6 overflow-hidden text-text-color flex gap-2">
          <h2 className="">Gender:</h2>
          <h2 className="line-clamp-1">{gender}</h2>
        </span>
        <span className="min16Max18px h-6 overflow-hidden text-text-color flex gap-2">
          <h2 className="">House:</h2>
          <h2 className="line-clamp-1">{house}</h2>
        </span>
      </div>
    </div>
  );
}
export default StudentsCard;
