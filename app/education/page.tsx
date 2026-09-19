export default function Education() {
  return (
    <div className="p-5 text-white font-mono">
      <div className="flex gap-20 flex-col md:flex-row items-center justify-center">
        <div>
          <img className="md:h-100 h-70" src="images/ed.png" alt="Priyanshu pfp" />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-2xl font-semibold text-blue-400">Educational Background</h1>
          <div className="max-w-100 mt-10">
            <div className="collapse collapse-plus border border-base-300">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold">
                Secondary Ed
              </div>
              <div className="collapse-content text-sm">
                2020 - B.D.Public School - 86%
              </div>
            </div>
            <div className="collapse collapse-plus border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                Senior Secondary
              </div>
              <div className="collapse-content text-sm">
                2023 - R.N.College - 84%
              </div>
            </div>
            <div className="collapse collapse-plus border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                Bachelor's Degree
              </div>
              <div className="collapse-content text-sm">
                2026 - BCA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
