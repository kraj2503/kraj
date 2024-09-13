import Link from "next/link";



export default function Appbar() {

  // const [isNavbarFixed,setIsNavbarFixed] = useState(false);

  // useEffect(()=>{
  //   const handleScroll = ()=>{
  //     if(window.scrollY>100){
  //       setIsNavbarFixed(true)
  //       console.log("fasle");
  //     } else{
  //       setIsNavbarFixed(false)
  //     }
  //   };
  // window.addEventListener('scroll',handleScroll);
  // return ()=>{
  //   window.removeEventListener('scroll',handleScroll)
  // }
  // })
  
  
  //   return ( //sticky top-0
  //     <div className={` flex justify-around py-3 ${isNavbarFixed ? 'fixed top-0' : ''}  bg-oxford-blue  border-b
  //     border-emerald-500 font-mono font-semibold text-lg text-primary `}>


  return ( //sticky top-0
    <div className=" flex justify-around py-3 sticky top-0  bg-smoky-black  border-b
    border-emerald-500 font-mono font-semibold text-lg text-primary ">
      <div className=" flex px-5 py-2 ">Kshitiz</div>
      <div>
        <div className="  flex justify-end  -mr-40">
          <Link href="#about" className={Appbuttons}>
            About
          </Link>
          <Link href="#projects" className={Appbuttons}>
            Projects
          </Link>
          <Link href="#skills" className={Appbuttons}>
            Skills
          </Link>
          <Link href="#experience" className={Appbuttons}>
            Experience
          </Link>
          <Link href="#education" className={Appbuttons}>
            Education
          </Link>
          <Link href="#contact" className={Appbuttons}>
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}

const Appbuttons =
  "transition duration-700 ease-in-out hover:bg-emerald-400 hover:scale-110 hover:underline rounded-md px-4 py-2  ml-3 ";
