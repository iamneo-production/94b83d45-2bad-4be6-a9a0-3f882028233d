import React from "react";
import AccordionItem from "./AccordionItem"


const FaQ = () => {
    return (
        <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div>
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                                <span className="mb-2 block text-lg font-semibold text-primary">
                                    FAQ
                                </span>
                                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                    Any Questions? Look Here
                                </h2>
                                <p className="text-base text-body-color">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum quaerat numquam. Ducimus magnam labore neque sed molestias nobis veniam.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="my- 5 mx-px-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="How to used platform ?"
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reprehenderit cupiditate suscipit aspernatur quam quae error adipisci dolores commodi facere, eos perspiciatis, necessitatibus quidem temporibus odit voluptates nemo. Harum, nesciunt?"
                        />
                        <AccordionItem
                            header="How Enroll courses ?"
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reprehenderit cupiditate suscipit aspernatur quam quae error adipisci dolores commodi facere, eos perspiciatis, necessitatibus quidem temporibus odit voluptates nemo. Harum, nesciunt?"
                        />
                        <AccordionItem
                            header="How paymant procces ?"
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reprehenderit cupiditate suscipit aspernatur quam quae error adipisci dolores commodi facere, eos perspiciatis, necessitatibus quidem temporibus odit voluptates nemo. Harum, nesciunt?"
                        />
                    </div>

                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="How to used platform ?"
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reprehenderit cupiditate suscipit aspernatur quam quae error adipisci dolores commodi facere, eos perspiciatis, necessitatibus quidem temporibus odit voluptates nemo. Harum, nesciunt?"
                        />
                        <AccordionItem
                            header="How Enroll courses ?"
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reprehenderit cupiditate suscipit aspernatur quam quae error adipisci dolores commodi facere, eos perspiciatis, necessitatibus quidem temporibus odit voluptates nemo. Harum, nesciunt?"
                        />
                        <AccordionItem
                            header="How paymant procces ?"
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reprehenderit cupiditate suscipit aspernatur quam quae error adipisci dolores commodi facere, eos perspiciatis, necessitatibus quidem temporibus odit voluptates nemo. Harum, nesciunt?"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaQ;

