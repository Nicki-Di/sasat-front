export default function BillStatusBadge({status}) {
    let classNames

    switch (status) {
        case "قبض در انتظار صدور":
            classNames = "bg-alert-1 text-alert"
            break
        case "قبض  تایید شده":
            classNames = "bg-success-1 text-success"
            break
        case "قبض صادر شده و فعال است":
            classNames = "bg-primary-1 text-s-10"
            break
    }

    return (
        <p className = {"b1 p-2 rounded-full text-center grow " + classNames}>
            {status}
        </p>
    )
}