import Image from "next/image";

export default function Spotify() {
    return (
        <>
            <div>
                <div style={{ backgroundImage: `url(https://i.pinimg.com/564x/2d/67/f9/2d67f9834649b584682ab58606f5a27e.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-full h-screen">
                    <div className="w-full h-screen p-16 grid content-between bg-black bg-opacity-60">
                        <div className="bg-white bg-opacity-80 flex  items-center p-5 h-16 rounded-xl w-52">
                            <div className="flex items-center gap-4 ">
                                <div>
                                <svg className="w-8 h-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                                </div>
                                <h1>Spotify Music</h1>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-10">
                                <img src="/pp.png" className="w-56 h-56 shadow-xl rounded-xl"></img>
                                <div>
                                    <h1 className="font-extrabold text-white text-6xl">Yüzsüz Ay</h1>
                                    <h4 className="font-semibold text-xl text-gray-300">Redisto, Caner</h4>
                                </div>
                            </div>
                            <div className="flex items-center mt-5 gap-2">
                                <h1 className="font-medium  text-gray-200">00:00</h1>
                                <div className="w-full h-1 flex items-center  rounded-full bg-white bg-opacity-40 ">
                                    <div className="w-0  bg-white h-1 rounded-full">

                                    </div>
                                </div>
                                <h4 className="font-medium  text-gray-200">2:12</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
