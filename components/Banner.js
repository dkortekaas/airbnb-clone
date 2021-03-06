import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src="https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg" layout="fill" objectFit="cover" />

            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-5xl text-white font-semibold">Not sure where to go? Perfect.</p>
                <button className="text-purple-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
            </div>

        </div>
    )
}

export default Banner
