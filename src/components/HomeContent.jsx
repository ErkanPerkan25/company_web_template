import {useState} from "react"
import Categories from "../data/CategoryItems"
import CategoryCard from "./CategoryCard"

function HomeContent(){
    return(
        <div className="">
            <div className="flex flex-row justify-center p-5">
            {Categories.map(item =>(
                <CategoryCard
                    title={item.title} 
                    url={item.url}
                />
            ))}
            </div>
        </div>
    );
}

export default HomeContent;
