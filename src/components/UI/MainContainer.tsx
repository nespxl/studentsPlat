import { IChildren } from "../../interface/app.interface";

export default function MainContainer({children}: IChildren) {
    return (
        <main className="container">
            {children}
        </main>
    )
}