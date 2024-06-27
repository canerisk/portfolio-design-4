import { url } from "inspector";
import Image from "next/image";
import { title } from "process";

export default function ProjectCard() {
    const card = [
        {
            title: "DESKTOP",
            image: "/proje.png",
            url: "rabelcode.net"
        },
        {
            title: "APP",
            image: "/teamvlr.png",
            url: "teamvlr.net"
        }
    ]
    return (
        <>
            <div className="grid gap-x-5 gap-y-12 grid-cols-3">
                {card.map((item, index) => (
                    <div>
                        <div className="bg-gray-200  hover:bg-blue-400/50  p-1 rounded-3xl">
                            <div style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover' }} className="h-52 project hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.6)] rounded-3xl w-full bg-red-500">

                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <h1 className=" ">{item.title}</h1>
                            <h4 className="text-xl font-bold">{item.url}</h4>
                        </div>
                    </div>
                ))}

            </div>
        </>
    );
}
