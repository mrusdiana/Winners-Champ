import { useState } from "react";
import Button from "./button";

export default function UploadImage({patchProduct, product}) {

    const formData = new FormData()
    const [imgUrl, setImgUrl] = useState("")
    formData.append("image", imgUrl)

    return (
        <>
            <div className="flex justify-center h-screen items-center ml-18 mr-4">
                <div className="w-150 bg-white shadow-xl p-8">
                    <h1 className="text-blue-950 font-black text-3xl uppercase mb-1">
                        Upload Photo
                    </h1>
                    <p className="text-red-600 font-bold text-xs tracking-widest mb-6">
                        Winners Champ
                    </p>
                    <div className="flex justify-start gap-5 my-4 items-center">
                        <img src={product.imgUrl} alt="" width={200}/>
                        <p className="font-bold">{product.name}</p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => patchProduct(e, formData)}>
                        <div>
                            <label className="block text-blue-950 text-xs font-black uppercase  mb-2">
                                Choose Image
                            </label>
                            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 px-10 py-5 cursor-pointer  transition-colors">
                                <span className="text-blue-950 font-bold text-sm">
                                    {!imgUrl.name ? "Click to select a file" : imgUrl.name}
                                </span>
                                <span className="text-gray-400 text-xs mt-1">PNG, JPG up to 5MB</span>
                                <input type="file" className="hidden" onChange={(e) => setImgUrl(e.target.files[0])}/>
                            </label>
                        </div>
                        <Button/>
                    </form>
                </div>
            </div>

        </>
    )
}