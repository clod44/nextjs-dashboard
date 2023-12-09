import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        < div className="flex h-screen flex-col md:flex-row md:overflow-hidden" >
            {/* first, show the sidenav*/}
            < div className="w-full flex-none md:w-64" >
                <SideNav />
            </div >
            {/* then the rest of the content*/}
            < div className="flex-grow p-6 md:overflow-y-auto md:p-12" >{children}</div >
        </div >
    );
}