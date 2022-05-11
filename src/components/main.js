import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Image from "./image";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "../config/config";

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement(item => <Image {...item} />);
const SortableGallery = SortableContainer(({ items }) => ( <Gallery 
photos={items} renderImage={props => <SortablePhoto {...props} />} />));

export default function Main() { 
    const [items, setItems] = useState(photos);
    const onSortEnd = ({ oldIndex, newIndex }) => { setItems(arrayMove(items, oldIndex, newIndex)); };
    
    return ( 
        <div className="imgContainer"> 
            <h1>Draggable Image Slider</h1>  
            <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} /> 
        </div> 
    );
}
