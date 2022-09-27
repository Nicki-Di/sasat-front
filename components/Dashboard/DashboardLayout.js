import {useEffect, useState} from 'react'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {TJNavigation, otherNavigation} from '../../utils/dashboardNavigation'
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DashboardLayout({userState}) {
    const [navigation, setNavigation] = useState(otherNavigation);
    const router = useRouter();
    const role = userState.role
    useEffect(() => {
        role === "تجمیع کننده" ? setNavigation(TJNavigation) : setNavigation(otherNavigation)
    }, [role])


    return (
        <div>
            {/* Sidebar */}
            <div
                className = "flex flex-col fixed inset-y-0 w-[13%] shadow-md z-10 bg-s-100 items-center justify-between py-6 overflow-y-auto ">
                <div className = "flex flex-col items-center gap-2 px-4 border-b border-s-90 pb-2">
                    <img
                        className = "h-8 w-auto"
                        src = {(role === "توانیر" || role === "پژوهشگاه") ? "/common/tavanir.png" : "/common/person-icon.png"}
                        alt = "layer-icon"
                    />
                    {role === "توانیر" ? <p className = {"b2 text-s-10"}>پنل ادمین</p> :
                        <p className = {"b2 text-s-10"}>{`پنل ${role}`}</p>}
                    <p className = {"b2 text-s-60"}>{userState.area}</p>
                </div>
                <nav className = "p-10 w-full flex-grow flex flex-col justify-center gap-4">
                    {navigation.map((item) => (
                        <a
                            key = {item.name}
                            href = {item.href}
                            className = {classNames(
                                router.pathname.startsWith(item.href) ? 'bg-primary' : 'hover:bg-primary transition-all duration-500',
                                'relative b1 text-s-10 group flex flex-col justify-center items-center p-6 rounded-lg gap-2 cursor-pointer'
                            )}
                        >
                            <item.icon
                                className = 'flex-shrink-0 h-6 w-6 text-s-10'
                                aria-hidden = "true"
                            />
                            <p className = {"absolute left-2 top-2 bg-alert px-3 py text-s-100 rounded"}>1</p>
                            {item.name}
                        </a>
                    ))}
                </nav>
                <img src = {"/dashboard/layer-footer.png"} alt = {""} className = {"w-32 h-auto"}/>
            </div>

            {/*header + main*/}
            <div className = "md:w-[87%] flex flex-col mr-auto">
                {/*header*/}
                <div className = "sticky top-0 flex-shrink-0 flex h-16 bg-s-100">
                    <div className = "flex-1 px-4 flex justify-between">
                        <div className = "flex-1 flex w-full md:ml-0">
                            {/* Header */}
                        </div>
                        <div className = "ml-4 flex items-center md:ml-6">
                            <div
                                className = "flex flex-row gap-3 p-1 rounded-full text-s-10 focus:outline-none focus:ring-0 cursor-pointer ">
                                <p>خروج از پنل</p>
                                <LogoutRoundedIcon className = "h-6 w-6"/>
                            </div>

                        </div>
                    </div>
                </div>
                {/*main*/}
            </div>
        </div>
    )
}
