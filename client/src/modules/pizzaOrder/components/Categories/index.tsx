import React from "react";
import { CategoriesType } from "../../redux/types";
import styles from "./Categories.module.scss";

const Categories: React.FC<CategoriesType> = ({
    typeCategories,
    activeCategory,
    changeAtiveCategory,
}): JSX.Element => {
    return (
        <div className={styles.categories}>
            <ul>
                {typeCategories.map((category, i) => (
                    <li
                        onClick={() => changeAtiveCategory(category, i)}
                        className={
                            activeCategory.nameCategory === category &&
                            activeCategory.index === i
                                ? styles.active
                                : ""
                        }
                        key={`${category}_${i}`}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(Categories);
