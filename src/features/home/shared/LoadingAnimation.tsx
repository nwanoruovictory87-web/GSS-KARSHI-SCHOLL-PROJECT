import loadingAnimationGif from "/assets/loadingAnimation.gif";
function LoadingAnimation(): React.ReactElement {
  return (
    <div className="pr-6 absolute w-full h-full flex justify-center items-center bg-[#2928282c]">
      <div className="w-full h-[300px]  flex justify-center items-center">
        <img className="w-fit h-50" src={loadingAnimationGif}></img>
      </div>
    </div>
  );
}
export default LoadingAnimation;
