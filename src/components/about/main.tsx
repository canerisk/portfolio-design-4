import Image from "next/image";
import Tech from "./tech";

export default function About() {
    return (
        <>
            <div className="mt-20 w-full flex gap-32 justify-center">
                <div className="">

                    <div className="">
                        <div className="w-64  h-64 rounded-full" style={{backgroundImage:`url(https://i.pinimg.com/564x/c3/5a/55/c35a553252050d66ea4fc4558a24fd73.jpg)`, backgroundPosition:'center', backgroundSize:'cover'}}></div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-8">
                    <div>
<div className="flex"><h1 className="bg-blue-300 font-semibold py-2 px-3 rounded-xl ">Merhaba, Ben Caner</h1></div>
                        <h1 className="text-2xl max-w-xl mt-3 font-bold">Merhaba, Ben Mehmet Caner. Web Tasarım üzerinde çalışıyorum ve yaklaşık 3 yıllık bir tecrübem bulunmaktadır. Bu zamana kadar bir çok projelerde yer aldım ve web tasarımları yaptım tasarımlarım bir çok kişi tarafından beğenildi yaptığım projeleri olabildiğince göze hoş ve özenle yapmaya efor sarf ediyorum. Sende bana proje yaptırmak istersen iletişime geçebilirsin... <button className="bg-gray-300  text-sm px-2 py-1 rounded-lg"><img src="https://files.sikayetvar.com/lg/cmp/45/45631.png?1522650125" className="w-10"></img></button> </h1>
                    </div>
                    <Tech/>
                </div>
            </div>
        </>
    );
}
