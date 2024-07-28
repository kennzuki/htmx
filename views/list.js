import BOOK_DATA from '../data/data.js'
import createBookTemplate from "./book.js";

const creatListTemplate = () =>/*html*/`
<ul>
    ${BOOK_DAT.map((book)=>createBookTemplate(book)).join('')}
</ul>
`; 

export default createBookTemplate