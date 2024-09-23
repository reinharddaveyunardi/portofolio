import {links} from "@/data/data";

function Footer() {
    return (
        <div className="h-auto w-full bg-white">
            <div className="flex flex-col p-4 gap-6 md:flex-wrap lg:flex-row justify-evenly">
                <div className="flex flex-col justify-between">
                    <div className="w-fit upp">
                        <h4 className="font-semibold uppercase">Contact me</h4>
                        <a href="mailto:reinharddave.yunardi@gmail.com">
                            <p className="hover:underline text-sm">
                                reinharddave.yunardi@gmail.com
                            </p>
                        </a>
                    </div>
                    <div className="flex justify-center py-2">
                        <div className="h-[1px] bg-black opacity-25 w-full" />
                    </div>
                    <div className="w-fit upp">
                        <h4 className="font-semibold uppercase">School</h4>
                        <a href="https://www.citrakasih.sch.id/sekolah-citra-berkat-citraindah-bogor/">
                            <p className="hover:underline text-sm ">
                                Citra Berkat School, Bogor
                            </p>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold uppercase">Projects</h4>
                    <div className="w-fit upp">
                        <a href="https://kelas8a.pages.dev">
                            <p className="hover:underline">Class 8A Website</p>
                        </a>
                    </div>
                    <div className="w-fit upp">
                        <a href="https://ixc.pages.dev">
                            <p className="hover:underline">Class 9C Website</p>
                        </a>
                    </div>
                    <div className="w-fit upp">
                        <a href="https://pastnine.vercel.app">
                            <p className="hover:underline">Grade 9 Yearbook</p>
                        </a>
                    </div>
                    <div className="w-fit upp">
                        <a href="https://10-1.vercel.app">
                            <p className="hover:underline">
                                Class 10.1 Website
                            </p>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold uppercase">Latest Projects</h4>
                    <div className="w-fit upp">
                        <a href="https://pastnine.vercel.app">
                            <p className="hover:underline">Grade 9 Yearbook</p>
                        </a>
                    </div>
                    <div className="w-fit upp">
                        <a href="https://10-1.vercel.app">
                            <p className="hover:underline">
                                Class 10.1 Website
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-2">
                <div className="h-[1px] bg-black w-11/12" />
            </div>
            <div className="flex h-auto items-center justify-between px-4 md:px-16 lg:px-32">
                <div>
                    <small>&copy; 2024 Reinhard Dave Yunardi</small>
                </div>
                <div className="flex gap-4">
                    {links.map((link) => {
                        return (
                            <a href={link.url}>
                                <i>{link.icon}</i>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Footer;
