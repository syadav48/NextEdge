// to use the client componnet with metadata import ffrom another file
import CounterPageRealId from "./counter";

export const metadata = {
    title: "Counter"
}

export default function CounterPage() {
    return (
        <CounterPageRealId />
    )
}