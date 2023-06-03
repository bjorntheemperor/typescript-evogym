import {BenefitType, SelectedPage} from "@/shared/types";
import {motion} from "framer-motion";
import HText from "@/shared/HText";
import {AcademicCapIcon, HomeModernIcon, UserGroupIcon} from "@heroicons/react/24/solid";
import Benefit from "@/scenes/benefits/Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6 "/>,
        title: "State of the Art Facilities",
        desc: "Aperiam, at atque aut, commoduae sintlor esse expedita facilis labore molestias optio porro quia repellat tenetur Harum, velit?"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6 "/>,
        title: "100's of Diverse Classes",
        desc: "Ab aspernatur delectus dolorem hic illum incidunt ipsa labdolore dolore itaque iusto labore minima mollitia, ratione sit soluta vel, velit."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6 "/>,
        title: "Expert and Pro Trainers",
        desc: "Consectetur culpacabo incidunt ipsa labdolore dolorem eos, expedita laboriosamt possimus quis reiciendis repudiandae."
    },
]


const container = {
    hidden: {},
    visible:{
        transition: {staggerChildren: .3}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;

};

const Benefits = ({setSelectedPage}: Props) => {
    return (
        <section id="benefits"
            className={`mx-auto min-h-full w-5/6 py-20`}
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                    className={'md:my-5 md:w-3/5'}>
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className={`my-5 text-sm`}>
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>
                
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    variants={container}
                    className="md:flex justify-between gap-8 mt-5">
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            desc={benefit.desc}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                <div className={`mt-16 items-center justify-between gap-20 md:mt-28 md:flex`}>
                    <img className={`mx-auto`}
                        src={BenefitsPageGraphic} alt="Benefits page img"/>

                    <div>

                        <div className={`relative`}>
                            <div className={`before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves`}>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true, amount: 0.5}}
                                    transition={{duration: 0.5}}
                                    variants={{
                                            hidden: {opacity: 0, x: 50},
                                            visible: {opacity: 1, x: 0},
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{delay: 0.2, duration: 0.5}}
                            variants={{
                                    hidden: {opacity: 0, x: 100},
                                    visible: {opacity: 1, x: 0},
                            }}
                        >
                            <p className={`my-5`}>Lorem ipsum dolor sit amet, consectetur admpora unde veritatis, vitae. Aliquid eos est et fuga ipsam labore odit perspiciatis. Aspernatur errors, quae qui repellendus rerum sapiente tempore veniam? Accusantium aliquid, consectetur dolores eius in itaque laudantium maiores necessitatibus perspiciatis porro, quas quis reiciendis repudiandae soluta voluptatem. Aliquam amet asperiores, delectus dolorem in nam nulla odio perspiciatis veniam. Ad cupiditate debitis doloremque fugit ipsum nemo neque quae quod suscipit veritatis.</p>
                            <p className={`mb-5`}>Purus sit dui vivamus arcu felis. Viverra maeamet luctus venenatis lectus. Vulputate dignissim suspendisseacerat orci. Dolor sed viverra ipsum nunc aliquetis id. Viverra tellust mi. Arcu ac tortor digrtor. Lacus vestibuluodio euismod lacinia. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Nisi scelerisque eu ultrices vitae auctor eu. Pellentesque habitant morbi tristique senectus et ne</p>
                        </motion.div>


                        <div className="relative mt-16">
                            <div className={`before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles`}>
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Benefits