import { Header } from "./Header";
import { SiderBar } from "./SiderBar";
import { Video } from "./Video";

export function Event() {

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <Video />
                <SiderBar />
            </main>
        </div>
    )

}