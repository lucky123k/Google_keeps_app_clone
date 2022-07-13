import React from 'react';
import youtuber, {favprog, myName, myNames} from './Example';

function List() {
    return (
        <ol>
            <li> Lucky </li>
            <li> Khandelwal </li>
            <li> from </li>
            <li> dubai </li>
            <li> hii   </li>
            <li>  {youtuber }</li>
            <li>  {favprog} </li>
            <li>  {myName()} </li>
            <li>  {myNames()} </li>
        </ol>
    ) ;
}

export default List;