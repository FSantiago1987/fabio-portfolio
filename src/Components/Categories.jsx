import React from 'react';


function Categories(props) {
    return (
        <div className="Categories">
            {
                props.categories.map((cat, idx)=>{
                    return <button type="button" className="btn-portfolio" key={idx} onClick={() => props.filter(cat)}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories;
