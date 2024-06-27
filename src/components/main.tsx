import Image from "next/image";

export default function Main() {
    const style = {
        backgroundImage: "url('/redgradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    const spotify = {
        backgroundImage: "url('/spotify.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <>
            <div style={style} className="w-full text-white px-16 py-10  flex justify-center items-center rounded-3xl h-[35rem] bg-black/90">
                <div>
                    <div className="text-center text-6xl font-semibold">
                        <h1 className="">&quot;Yarım kalan bir sevgi.</h1>
                        <h4 className="mt-3">Kalpte sızlar...&quot;</h4>
                    </div>
                    <div className="flex justify-center">
                        <h4 className="text-center max-w-xl  my-8  font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At odit adipisci, optio minima consequuntur magni quibusdam cupiditate id nostrum blanditiis laudantium ducimus aspernatur architecto in a eligendi vero. Impedit, sit.
                        </h4>
                    </div>
                    <div className="w-full gap-4 select-none flex items-center p-2 bg-white bg-opacity-10 h-24  rounded-3xl ">
                        <div className="flex justify-between items-center w-full pr-5">
                            <div className="flex gap-4 items-center">
                                <div style={spotify} className="w-20 h-20  rounded-2xl bg-red-500">

                                </div>
                                <div>
                                    <h1 className="text-lg ">Defoluyorum</h1>
                                    <h4 className="text-xs text-gray-300">Emir Can İğrek</h4>
                                </div>
                            </div>
                            <div className="rounded-full flex items-center shadow-xl hover:bg-opacity-70 active:scale-90 justify-center bg-white w-10 h-10">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="w-4  h-4"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
