import Image from "next/image";
import ProjectCard from "./card";

export default function Project() {

    return (
        <>
            <div className="mt-32">
                <div className="absolute bg-blue-400 -ml-32 -mt-8 w-96 z-[-1] opacity-50 h-24 rounded-full blur-3xl ">

                </div>
                <div>
                    <h1 className=" text-2xl">Projelerim</h1>
                    <h4 className="font-bold text-2xl max-w-md">Katkıda bulunduğum ve geliştirmiş olduğum projelerim...</h4>
                </div>

                <div className="mt-16">
                    <ProjectCard/>
                </div>
            </div>
        </>
    );
}
