function StudentsCard(): React.ReactElement {
  return (
    <div className="w-full flex  gap-3  ">
      <span className="min-w-23 max-w-23 min-h-23 max-h-23 rounded-full block tr-skeleton mr-auto"></span>
      <div className="w-full mt-2 flex flex-col gap-1 ml-auto">
        <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
        <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
        <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
        <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
        <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
        <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
        <span className="min16Max18px h-6 overflow-hidden text-text-color tr-skeleton"></span>
      </div>
    </div>
  );
}
export default StudentsCard;
