import {SelectedPage, ClassType} from "@/shared/types";
import {motion} from "framer-motion";
import HText from "@/shared/HText";

import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"

import Class from './Class'

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        desc: "Fongue eu consequat ac. Mattis nunsem integer vitae justo. Med viverra ipsum nunc aliquet bibendum enim facilisis. Facilisis magna etiam tempor orci",
        img: image1,
    },
    {
        name: "Yoga Classes",
        img: image2,
    },
    {
        name: "Ab Core Classes",
        desc: "Fongue eu consequat ac. Mattis nunsem integer vitae justo. Med viverra ipsum nunc aliquet bibendum enim facilisis. Facilisis magna etiam tempor orci",
        img: image3,
    },
    {
        name: "Adventure Classes",
        desc: "Fongue eu consequat ac. Mattis nunsem integer vitae justo. Med viverra ipsum nunc aliquet bibendum enim facilisis. Facilisis magna etiam tempor orci",
        img: image4,
    },
    {
        name: "Fitness Classes",
        img: image5,
    },
    {
        name: "Training Classes",
        desc: "Fongue eu consequat ac. Mattis nunsem integer vitae justo. Med viverra ipsum nunc aliquet bibendum enim facilisis. Facilisis magna etiam tempor orci",
        img: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({setSelectedPage}: Props) => {
    return (
        <section id="ourclasses" className={`w-full bg-primary-100 py-40`}>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className={`mx-auto w-5/6`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x:0},
                    }}
                >

                    <div className={`md:w-3/5`}>
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">
                            Nunc sed augue lacus viverra vitae congue eu consequat ac. Mattis nunsem integer vitae justo. Med viverra ipsum nunc aliquet bibendum enim facilisis. Facilisis magna etiam tempor orci eu lobortis elementum. At varius vel pharetra vel turpis nunc eget lorem. Eget duis at tellus at urna.
                        </p>
                    </div>

                </motion.div>

                <div className={`mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden`}>
                    <ul className="w-[2000px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                desc={item.desc}
                                img={item.img}
                            />
                        ))}
                    </ul>
                </div>

            </motion.div>
        </section>
    );
};

export default OurClasses