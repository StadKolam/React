import React from 'react';
import Card from './Card';


const CardList = ({ robots,  checkChange, checkValue}) => {
    
    return (
        
        <div>
            <div>
                <input type="checkbox"
                checked={checkValue}
                onChange={checkChange}
                    />
            </div>
            
            <div>
                    {
                    robots.map((user, i) => {
                    return (<Card 
                    key={i} 
                    id={robots[i].id}
                    name={robots[i].name}
                    email={robots[i].email}
                
                    />)
                    })
                    }
            </div>

        </div>
        
    );
}

export default CardList;