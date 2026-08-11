import Filter from "./components/Filter";
function StudentsTracking(): React.ReactElement {
  return (
    <div className="w-full h-full component-spacing relative overflow-hidden">
      <Filter />
      <div className="mt-7 w-full h-full  relative pb-31 ">
        <article className="w-full h-full flex gap-7">
          <section className="w-[40%] max-w-100 h-full rounded-xl bg-pramary-dark-blue">
            user info
          </section>
          <section className="w-[70%] h-full rounded-xl flex flex-col gap-7">
            <section className="rounded-xl bg-pramary-dark-blue w-full h-[60%]">
              map
            </section>
            <article className="w-full h-[40%]  flex gap-7">
              <section className="w-[50%] h-full bg-pramary-dark-blue rounded-xl">
                wacth info
              </section>
              <section className="w-[50%] h-full bg-pramary-dark-blue rounded-xl">
                user location info
              </section>
            </article>
          </section>
        </article>
      </div>
    </div>
  );
}
export default StudentsTracking;
