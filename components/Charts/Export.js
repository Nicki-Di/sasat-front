export default function Export({excel = false}) {
    return (
        <div className = {"flex flex-col gap-4 items-center justify-center bg-s-90 rounded p-5 basis-1/3 "}>
            <p className = {"text-s-30 b1 "}>دریافت خروجی</p>
            <div className = {"flex flex-row gap-5 "}>
                <div className = {"bg-s-80 flex flex-row items-center justify-center rounded p-2 cursor-pointer"}>
                    <p className = {"b1 text-s-10"}> پی دی اف</p>
                    <img src = {"/dashboard/pdf.png"} alt = {""} className = {"w-6 h-auto "}/>
                </div>
                {
                    excel &&
                    <div className = {"bg-s-80 flex flex-row items-center justify-center rounded p-2 cursor-pointer"}>
                        <p className = {"b1 text-s-10"}>اکسل</p>
                        <img src = {"/dashboard/excel.png"} alt = {""} className = {"w-6 h-auto "}/>
                    </div>
                }


            </div>
        </div>
    )
}