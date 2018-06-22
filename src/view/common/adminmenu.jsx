import React from 'react';

const MenuContent = ({menuaccess}) => (
<<<<<<< HEAD
	<div id="menu-root">
		<div id='cssmenu'>
    <ul>
        <li><a href='#'><span>Home</span></a></li>
        <li className='active has-sub'><a href='#'><span>Products</span></a>
            <ul>
                <li className='has-sub'><a href='#'><span>Product 1</span></a>
                    <ul>
                        <li><a href='#'><span>Sub Product</span></a></li>
                        <li className='last'><a href='#'><span>Sub Product</span></a></li>
                    </ul>
                </li>
                <li className='has-sub'><a href='#'><span>Product 2</span></a>
                    <ul>
                        <li><a href='#'><span>Sub Product</span></a></li>
                        <li className='last'><a href='#'><span>Sub Product</span></a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href='#'><span>About</span></a></li>
        <li className='last'><a href='#'><span>Contact</span></a></li>
        <li className='last'><a href='#'  ><span>Log Out</span></a></li>
    </ul>
</div>
</div>
=======
  <div id='cssmenu'>
  <ul>
      <li><a href=''><span>Home</span></a></li>
      {menuaccess.state.data.map(itemmain => {
          if (itemmain.parentid === -1) {
              return <li className='has-sub' id={itemmain.id}>
                  <a href=''><span>{itemmain.menuname}</span></a>
                  <ul>
                      {menuaccess.state.data.map(subitem => {
                          if (subitem.parentid === itemmain.id && subitem.parentid !== -1) {
                              return <li><a href={subitem.URL}  ><span>{subitem.menuname}</span></a></li>
                          }
                      })}
                  </ul>
              </li>
          }
      }
      )}
      <li><a href='' onClick={menuaccess.logoutsubmit} ><span>Log Out</span></a></li>
  </ul>
</div>

>>>>>>> e979b109d2204f66969a035d6c1dc4295d9fda31
);

export default MenuContent;