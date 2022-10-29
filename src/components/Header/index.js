
const Header = () => {

   
    return (
       <> 
         <header className='flex-space-between'>
           <div className="logo">
               <h1>Blo<span>g</span></h1>
           </div>
           <div className="search">
                <input type="text" name="search" className="input-search"/>
           </div>
           <ul className="menu">  
                
                <li> <a href="'#'" className="nav-link">Categories</a> </li>
                <li> <a href="'#'" className="nav-link">About</a> </li>
                <li> <a href="'#'" className="nav-link">Contact</a> </li>
                
           </ul>
         </header>
        </>
    );    

}

export default Header;