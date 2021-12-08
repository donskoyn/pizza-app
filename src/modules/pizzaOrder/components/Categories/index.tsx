import React from 'react'
import { Category } from '../../redux/types';

interface CategoriesType {
    typeCategories: string[],
    activeCategory: Category,
    changeAtiveCategory: (category: string, i: number) => void
}

const Categories: React.FC<CategoriesType> = ({ typeCategories, activeCategory, changeAtiveCategory }): JSX.Element => {


    return (
        <div className="categories">
            <ul>
                {typeCategories.map((category, i) =>
                    <li onClick={() => changeAtiveCategory(category, i)}
                        className={activeCategory.nameCategory === category && activeCategory.index === i ? "active" : ''}
                        key={`${category}_${i}`}>{category}
                    </li>)}
            </ul>
        </div>
    )
}

export default React.memo(Categories);
