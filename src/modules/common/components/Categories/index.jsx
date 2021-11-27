import React from 'react'

const Categories = ({ typeCategories, ativeCategory, changeAtiveCategory }) => {
    return (
        <div className="categories">
            <ul>
                {typeCategories.map((category, i) =>
                    <li onClick={() => changeAtiveCategory(category, i)}
                        className={ativeCategory.nameCategory === category && ativeCategory.index === i ? "active" : ''}
                        key={`${category}_${i}`}>{category}
                    </li>)}
            </ul>
        </div>
    )
}

export default Categories
