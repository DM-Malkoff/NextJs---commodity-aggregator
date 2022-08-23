import AccordionItems from "./accordionItems";
import {useEffect, useState} from "react";

const Accordion = ({filterContent}) => {
    const renderedFilterContent = filterContent.map((item,index) => {
        return (
            <AccordionItems
                key = {index}
                item = {item}
                index = {index}
            />
        )
    })
    return (
        <div>
            {renderedFilterContent}
        </div>
    );
};

export default Accordion;