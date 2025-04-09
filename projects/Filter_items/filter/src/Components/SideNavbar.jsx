import React from 'react'

const SideNavbar = () => {
  return (
    <div className='side-navbar'>
          <h5><span><i className="fa-solid fa-list"></i></span>Filters</h5>



          <div className="filter no01">
              <div className="dropdown w-100">
                <button
                  className="dropdown-toggle w-100"
                  type="button"
                  id="filter-01"
                  data-bs-toggle="dropdown"
                
                >
                  categories
                </button>
                <div className="dropdown-menu" aria-labelledby="filter-01">

                  <p>
                  <input type="radio"  name='category'/>
                  <label htmlFor="">All</label>
                  </p>

                  <p>
                  <input type="radio"  name='category'/>
                  <label htmlFor="">Shirts</label>
                  </p>

                  <p>
                  <input type="radio"  name='category'/>
                  <label htmlFor="">Pants</label>
                  </p>

                  <p>
                  <input type="radio"  name='category'/>
                  <label htmlFor="">T-shirts</label>
                  </p>

                </div>
              </div>
              
          </div>
          <div className="filter no02">
          <div className="dropdown w-100">
                <button
                  className="dropdown-toggle w-100"
                  type="button"
                  id="filter-02"
                  data-bs-toggle="dropdown"
                
                >
                  Sort by
                </button>
                <div className="dropdown-menu" aria-labelledby="filter-02">

                  <p>
                  <input type="radio"  name='sort-by'/>
                  <label htmlFor="">Low to high</label>
                  </p>

                  <p>
                  <input type="radio"  name='sort-by'/>
                  <label htmlFor="">High to low</label>
                  </p>

        

                </div>
              </div>
          </div>
          <div className="filter no03">
          <div className="dropdown w-100">
                <button
                  className="dropdown-toggle w-100"
                  type="button"
                  id="filter-03"
                  data-bs-toggle="dropdown"
                
                >
                  Brands
                </button>
                <div className="dropdown-menu" aria-labelledby="filter-03">

                  <p>
                  <input type="checkbox"  name='brands'/>
                  <label htmlFor="">Dennis Lingo</label>
                  </p>

                  <p>
                  <input type="checkbox"  name='brands'/>
                  <label htmlFor="">Snitch</label>
                  </p>

                 

                </div>
              </div>
            
          </div>
    </div>
  )
}

export default SideNavbar