import Image from "next/image";
import SocialCard from "./socialcard";


export default function Social() {
    return (
        <>
            <div className="mt-32">
                <div className="absolute bg-blue-400 -ml-32 -mt-8 w-96 z-[-1] opacity-50 h-24 rounded-full blur-3xl ">

                </div>
                <div>
                    <h1 className=" text-2xl">İletişim Bilgilerim</h1>
                    <h4 className="font-bold text-2xl max-w-md">Benimle iletişime geçebileceğin platformlar...</h4>
                </div>
                <div>
                    <SocialCard />
                </div>

            </div>
        </>
    );
}
