import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import Link from "next/link";

export default function Breadcrumb({items}) {


    return (
        <div className = {"flex flex-row "}>
            {
                items.map((item, index) =>
                    <div className = {"flex flex-row "} key={index}>
                        <Link href = {item.url}>
                        <a className = {"b1 text-s-10 " + (index < items.length - 1 ? "underline decoration-primary underline-offset-8" : "")}>
                            {item.name}
                        </a>
                        </Link>
                        {
                            index < items.length - 1 && <KeyboardArrowLeftRoundedIcon className={"mx-8"}/>
                        }
                    </div>
                )
            }
        </div>
    );
}
