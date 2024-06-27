import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <nav className="w-full  h-20 flex items-center">
                <div className="flex items-center  gap-3">
                    <img className="w-10 h-10 rounded-full" src="https://i.pinimg.com/564x/79/4f/c9/794fc906198da55fd721b007aefb9965.jpg"></img>
                    <h1 className="font-semibold text-xl">Mehmet Caner.</h1>
                </div>
            </nav>
        </>
    );
}
