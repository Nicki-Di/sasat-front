import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid'
import {useRef} from "react";
import {useRouter} from "next/router";


export default function Pagination({pagesNumber}) {
    const router = useRouter();
    const currentPage = useRef((parseInt(router.asPath.split("?page=")[1])) || 1)

    return (
                <div className = "flex items-center justify-center">
                    <nav className = "z-0 inline-flex -space-x-px"
                         aria-label = "Pagination">
                        <div
                            className = {"items-center px-2 py-2 " + (currentPage.current === 1 ? "cursor-not-allowed text-s-80" : " cursor-pointer  text-s-10")}
                            onClick = {async () => {
                                if (currentPage.current > 1) {
                                    currentPage.current--
                                    await router.push(`${router.pathname}?page=${currentPage.current}`,undefined, {shallow: true})
                                }
                            }}
                        >
                            <span className = "sr-only">Previous</span>
                            <ChevronRightIcon className = "h-5 w-5" aria-hidden = "true"/>

                        </div>

                        <div
                            aria-current = "page"
                            className = "z-10 bg-s-90 text-s-10 items-center px-4 py-2 b1 rounded-md shadow-sm "
                        >
                            {currentPage.current}
                        </div>

                        <div
                            className = {"items-center px-2 py-2 " + (currentPage.current === pagesNumber ? "cursor-not-allowed text-s-80" : " cursor-pointer  text-s-10")}
                            onClick = {async () => {
                                if (currentPage.current < pagesNumber) {
                                    currentPage.current++
                                    await router.push(`${router.pathname}?page=${currentPage.current}`,undefined, {shallow: true})
                                }
                            }}
                        >
                            <span className = "sr-only">Next</span>
                            <ChevronLeftIcon className = "h-5 w-5" aria-hidden = "true"/>
                        </div>
                    </nav>
                </div>
    )
}
