import Link from "next/link";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function AddButton({slug, text, disable}) {
    return (
        <Link href = {`/dashboard/${slug}`}>
            <a
                className = {"bg-primary text-s-10 b1 flex items-center gap-2 py-2 px-4 rounded focus:ring-0 focus:outline-0 " + (disable && " opacity-75 cursor-not-allowed")}
            >
                <p>{text}</p>
                <AddRoundedIcon/>
            </a>
        </Link>
    )
}