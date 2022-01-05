
import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram } from "react-icons/ai"
const Footer = () => {
    return <footer className=" bg-purple-500 sticky top-0 z-50">
        <div className="flex flex-col ml-10 mr-10 text-white gap-20 pt-10 pb-28">
            <div className=" flex flex-row justify-between ">
                <div className=" text-3xl ">
                    Elevate
                </div>
                <div className=" flex flex-row gap-x-4">
                    <div>
                        <AiFillFacebook className=" text-4xl" />
                    </div>
                    <div>
                        <AiFillInstagram className=" text-4xl" />
                    </div>
                    <div>
                        <AiFillTwitterCircle className=" text-4xl" />
                    </div>

                </div>
            </div>
            <div className="flex space-x-10">
                <div className=" flex gap-y-4 flex-col">
                    <div className=" font-bold">
                        Company
                    </div>
                    <div>
                        About US
                    </div>

                </div>

                <div className=" flex gap-y-4 flex-col">
                    <div className=" font-bold">
                        Resources
                    </div>
                    <div>
                        Help Center
                    </div>

                </div>
                <div className=" flex gap-y-4 flex-col">
                    <div className=" font-bold">
                        Legal
                    </div>
                    <div>
                        Terms and policies
                    </div>

                </div>
            </div>
        </div>
    </footer>
}

export default Footer