import React, {useState} from 'react';
import Title from '../Components/Title';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import portfolios from '../Components/allPortfolios';

function PortfolioPage() {
    const [menuItem, setMenuItem] = useState(portfolios);
    const categoriesList = ['All', ...new Set(portfolios.map(item => item.category))];

    function filter(category){
      if(category === 'All'){
        setMenuItem(portfolios)
        return;
      }
      const filteredData = portfolios.filter((item)=>{
        return item.category === category;
      })
      setMenuItem(filteredData);
    }

    return (
      <div className="PortfolioPage">
        <div className="portfolio-title">
          <Title title={"Projects"} span={"Projects"} />
        </div>
        <div className="portfolios-data">
            <Categories filter={filter} categories={categoriesList}/>
            <MenuItems menuItems={menuItem} />
        </div>
      </div>
    );
}

export default PortfolioPage;