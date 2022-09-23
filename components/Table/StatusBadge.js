export default function StatusBadge({status}) {
    let classNames = "bg-attention-1 text-attention"

    switch (status) {
        case "جدید":
            classNames = "bg-attention-1 text-attention"
            break
        case "دیده شده":
            classNames = "bg-s-80 text-s-10"
            break
    }

    return (
        <p className = {"b1 rounded-full text-center py-2 w-20 " + classNames}>
            {status}
        </p>
    )
}