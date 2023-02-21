import React from 'react'

export const AddBook = (props) => {
  return (
   <>
    <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
   </>
  )
}

export default AddBook