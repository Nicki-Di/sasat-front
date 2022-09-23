export default function FileUpload({name, id ,title, error, selectedFile, setSelectedFile, description}) {

    return (
        <div>
            <p className = "b1 text-s-30 mb-2 ">
                {title}
            </p>
            <div
                className = {"w-full rounded b1 p-1 border-2 mt-1 flex flex-col gap-4 justify-center items-center " + (error ? "border-alert" : "border-s-60 hover:border-s-10 transition-all duration-200 ")}>
                <div className = "w-full flex flex-row items-center gap-4">
                    <label
                        htmlFor = {id}
                        className = "cursor-pointer font-light text-base text-shades-100 px-2 py-1 rounded-sm bg-shades-40 focus-within:outline-none focus-within:ring-0 "
                    >
                        <span className = {"b1 text-s-10 border-b-2 border-primary "}>انتخاب فایل</span>
                        <input id = {id} name = {name} type = "file"
                               className = "sr-only"
                               onChange = {(e) => {
                                   setSelectedFile(e.target.files[0]);
                               }
                               }
                        />
                    </label>
                    <p className = {"b1 overflow-hidden text-ellipsis whitespace-nowrap w-[28ch] " + (selectedFile ? "text-s-10" : "text-s-60")}>{selectedFile ? selectedFile.name : "فایلی انتخاب نشده"}</p>
                </div>
            </div>
            <p className={"b1 text-s-30 mt-3 "}>{description}</p>

        </div>


    )
}


