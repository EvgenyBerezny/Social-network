import style from "./Paginator.module.css";
import React from "react";
import cn from "classnames";
import {Pagination} from "@mui/material";

let Paginator = ({itemsTotalCount, pageSize, currentPage ,onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(itemsTotalCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // let portionCount = Math.ceil(pagesCount / portionSize);
    // let [portionNumber, setPortionNumber] = useState(1);
    // let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    // let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={style.paginator}>
            <Pagination className={cn(style.selectedPage, style.pageList)}
                        count={pagesCount} variant="outlined" shape="rounded" siblingCount={2}
                        page={currentPage}
                        onChange={(event, page) => { onPageChanged(page); }}/>
        </div>
    )
}

export default Paginator;

// { portionNumber > 1 &&
// <button className={style.pageFlip} onClick={() => { setPortionNumber(portionNumber - 1)}}>...</button>}
// {pages
//     .filter((p => p >= leftPortionPageNumber && p <= rightPortionPageNumber))
//     .map((p) => {
//         return <span className={cn({[style.selectedPage]: currentPage === p}, style.pageList)}
//                      key={p}
//                      onClick={(e) => {
//                          onPageChanged(p);
//                      }}>{p}</span>
//     })}
// {portionCount > portionNumber &&
// <button className={style.pageFlip} onClick={() => { setPortionNumber(portionNumber + 1)}}>...</button>}