export default function IconButton({text, icon, onClick, className}) {
    return (
        <div className = {"flex flex-row gap-2 text-s-10 rounded px-4 py-2 cursor-pointer items-center justify-center " + className}
             onClick = {onClick}
        >
            <p className = {"b1"}>{text}</p>
            {icon}
        </div>
    )
}