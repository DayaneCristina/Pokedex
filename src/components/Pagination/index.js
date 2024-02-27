import React from "react";
import * as C from "./styles";

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <C.PaginationContainer>
            <C.Button onClick={onLeftClick}>
                <div>◀️</div>
            </C.Button>
            
            <C.PageCount>{page} de {totalPages}</C.PageCount>

            <C.Button onClick={onRightClick}>
                <div>▶️</div>
            </C.Button>
        </C.PaginationContainer>
    )
}

export default Pagination;