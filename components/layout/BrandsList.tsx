import Image from "next/image";

const BrandList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center bg-black py-10 px-5 gap-5 md:px-[50px]">
            <div className="flex justify-between gap-2">
                <Image
                    src={"/Frame33.png"}
                    alt={"Frame33"}
                    width={166}
                    height={33}
                    className="w-[116px] md:w-[166px] h-[23px] md:h-[33px]"
                />
                <Image
                    src={"/Frame34.png"}
                    alt={"ZARA"}
                    width={91}
                    height={37.98}
                    className="w-[63px] md:w-[166px] h-[26] md:h-[33px] "
                />
                <Image
                    src={"/Frame32.png"}
                    alt={"GUCCI"}
                    width={156}
                    height={36}
                    className="w-[109px] md:w-[156px] h-[25px] md:h-[36px]"
                />
            </div>

            <div className="flex justify-evenly gap-2">
                <Image
                    src={"/Frame38.png"}
                    alt={"PRADA"}
                    width={194}
                    height={32}
                    className="w-[127px] h-[21px] md:w-[194px] md:h-[32px]"
                />
                <Image
                    src={"/Frame34.png"}
                    alt={"Calvin Klein"}
                    width={206}
                    height={33}
                    className="w-[134px] h-[21px] md:w-[206px] md:h-[33px]"
                />
            </div>
        </div>
    );
};

export default BrandList;