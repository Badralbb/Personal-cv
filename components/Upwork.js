export const Upwork = ({ props }) => {
  const items = props.listItems;
  return (
    <div className="flex flex-col gap-12 mt-12">
      <div className="bg-[#FFFFFF] dark:bg-[#1F2937] w-[896px] m-auto rounded-xl border-1 shadow-black shadow-md p-[32px]">
        <div className="m-auto flex justify-between">

           

          <div>
            <img src="images/logo-upwork.png" />
          </div>


          <div className="w-[384px]">
            <div className="flex justify-between">
              <h2 className="text-[#111827] text-lg dark:text-[#F9FAFB]">
                {props.title}
              </h2>
            </div>

            <div className="mt-4">
              <ul
                id="list"
                className="list-disc  ml-5 text-[#4B5563] text-base flex flex-col gap-1 flex-wrap"
              >
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-[#374151] text-base text-nowrap dark:text-[#D1D5DB]">
            {props.startDate}
          </h3>
        </div>
      </div>
    </div>
    
  );
};
