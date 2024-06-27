import Image from "next/image";

export default function Tech() {
    const tech = [
        {name:"React",img:"https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"},
        {name:"Next.js",img:"https://cdn.iconscout.com/icon/free/png-256/next-js-1174949.png"},
        {name:"Tailwindcss",img:"https://cdn.iconscout.com/icon/free/png-256/tailwindcss-1860126.png"},
        {name:"Typescript",img:"https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png"},
        {name:"Node.js",img:"https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"},
        {name:"Express.js",img:"https://cdn.iconscout.com/icon/free/png-256/express-1174944.png"},
        {name:"MongoDB",img:"https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png"},
        {name:"Docker",img:"https://cdn.iconscout.com/icon/free/png-256/docker-226091.png"},
        {name:"Kubernetes",img:"https://cdn.iconscout.com/icon/free/png-256/kubernetes-282855.png"},

    ]
    return (
        <>
                    <div>
                        <h1 className="text-xl">Birazda kullandığım teknolojilere göz atalım.</h1>
                        <div className="grid gap-2 mt-6 mb-12 grid-cols-3">
                        {tech.map((person) => (
                            <div className="border flex items-center gap-2 justify-between pl-5 pr-2 rounded-2xl border-gray-300 h-12 ">
                                <h1 className="text-sm font-semibold">{person.name}</h1>
                                <div className="bg-gray-200 rounded-lg w-8 h-8 flex items-center justify-center">
                                <img src={person.img} className="w-5 rounded bg-white    h-5"></img>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
        </>
    );
}
