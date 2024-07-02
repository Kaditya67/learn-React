import Card from "./Card"

interface BgProps{
    setbgColor:React.Dispatch<React.SetStateAction<string>>,
}

const Home:React.FC<BgProps> = ({setbgColor})=> {
  return (
    <>
    <div className="flex px-10 gap-20 py-10">
      <Card
        imageUrl="https://picsum.photos/seed/picsum/1000/1000"
        title="Random Image"
        description="Checkout out new product. Just selected for You. Procees by clicking!"
        linkUrl="https://example.com"
      />
      <Card
        imageUrl="https://picsum.photos/seed/picsum/1000/1000"
        title="Random Image"
        description="Checkout out new product. Just selected for You. Procees by clicking!"
        linkUrl="https://example.com"
      />
      <Card
        imageUrl="https://picsum.photos/seed/picsum/1000/1000"
        title="Random Image"
        description="Checkout out new product. Just selected for You. Procees by clicking!"
        linkUrl="https://example.com"
      />
      <Card
        imageUrl="https://picsum.photos/seed/picsum/1000/1000"
        title="Random Image"
        description="Checkout out new product. Just selected for You. Procees by clicking!"
        linkUrl="https://example.com"
      />
    </div>
    <div className="flex p-10">
      <button className="p-5 bg-blue" onClick={()=>setbgColor("blue")}></button>
      <button className="p-5 bg-red" onClick={()=>setbgColor("red")}></button>
      <button className="p-5 bg-gray" onClick={()=>setbgColor("gray")}></button>
      <button className="p-5 bg-cyan" onClick={()=>setbgColor("cyan")}></button>
      <button className="p-5 bg-black" onClick={()=>setbgColor("black")}></button>
    </div>
    </>
  )
}

export default Home
