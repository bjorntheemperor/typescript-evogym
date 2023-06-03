import logo from "@/assets/Logo.png"
type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="py-16 bg-primary-100">
            <div className="mx-auto w-5/6 md:flex justify-content gap-16">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={logo} alt="logo" className={``}/>
                    <p className="mt-5">Pulvinar elementum integer enim. Venenatis a condimentum vitae sapien pellentesque habitant mfermentum leo vel orci porta non. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Viverra orci sagittis eu volutpat odio facilisis mauris. Dignissim diam quis enim</p>
                    <p className="mt-5">© Evogym All Rights Reserved.</p>
                </div>
                <div className="flex flex-col mt-16 md:mt-0 basis-1/4">
                    <h4 className="font-bold">Links</h4>
                    <a href="#" className="mt-5 hover:text-primary-500 transition duration-300">Massa orci senectus</a>
                    <a href="#" className="mt-5 hover:text-primary-500 transition duration-300">Et gravida id et etiam</a>
                    <a href="#" className="mt-5 hover:text-primary-500 transition duration-300">Ullamcorper vivamus</a>
                </div>
                <div className="flex flex-col mt-16 md:mt-0 basis-1/4">
                    <h4 className="font-bold">Contact Us</h4>
                    <a href="#" className="mt-5 hover:text-primary-500 transition duration-300">Tempus metus mattis risus volutpat egestas</a>
                    <a href="#" className="mt-5 hover:text-primary-500 transition duration-300">(333)245-7771</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer