type props={
    title:string
}

export default function Heading(props:props){

    return (
        <div className="flex justify-center text-primary text-5xl p-8 font-mono  bg-smoky-black underline-offset-8">
        {props.title}
      </div>
    )
}