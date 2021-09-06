import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignJustify
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({setLibraryStatus, libraryStatus}) => {
  return (
   <nav>
  
  <button onClick={() => setLibraryStatus(!libraryStatus)}>
 
  <FontAwesomeIcon icon={faAlignJustify} />
  </button>

   </nav>
  )
}

export default Nav
