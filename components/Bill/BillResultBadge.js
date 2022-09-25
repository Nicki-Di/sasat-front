export default function BillResultBadge({status}) {
    let classNames = "bg-attention-1 text-attention"

    switch (status) {
        case "جریمه":
            classNames = "bg-alert-1 text-alert"
            break
        case "پاداش":
            classNames = "bg-success-1 text-success"
            break
    }

    return (
        <p className = {"b1 p-2 rounded-md text-center " + classNames}>
            {status}
        </p>
    )
}