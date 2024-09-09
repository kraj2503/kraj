export default function Appbar() {
  return (
    <div className="flex justify-around py-3 -mr-16 bg-emerald-200 font-mono font-semibold text-lg">
      <div className=" flex px-5 py-2">Kshitiz</div>
      <div>
        <div className="  flex justify-end  ">
          <button className={Appbuttons}>Home</button>
          <button className={Appbuttons}>About</button>
          <button className={Appbuttons}>Skills</button>
          <button className={Appbuttons}>Education</button>
          <button className={Appbuttons}>Experience</button>
        </div>
      </div>
    </div>
  );
}

const Appbuttons ="transition duration-700 ease-in-out hover:bg-emerald-400 hover:scale-110 rounded-md px-6 py-3  ml-2 ";
