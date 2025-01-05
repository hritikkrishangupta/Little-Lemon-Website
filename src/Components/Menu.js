import React from "react";
import recipes from "../recipes";
function Menu() {
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>
            </div>

            {/* menu cards */}
            <div className="cards" >
                {recipes.map(recipe =>
                    <div key={recipe.id} className="menu-items">
                        <img src={recipe.image} alt="menu"></img>
                        <div className="menu-content">
                            <h5>{recipe.title}</h5>
                            <p>{recipe.price}</p>
                            <p>{recipe.description}</p>
                        </div>
                        <button className="orderbtn" onClick={() => alert("Order has been placed")}>Order Now</button>
                    </div>

                )}
            </div>
        </div >
    );
}
export default Menu;