export default function DashboardMain(props) {
    return (
        <main className = {"w-[87%] mr-auto p-8 flex flex-col gap-16 items-center "}>
            <div className={"w-full bg-s-100 shadow rounded-md"}>
                {props.children}
            </div>
        </main>
    )
}