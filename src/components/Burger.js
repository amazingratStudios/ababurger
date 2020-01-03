import React from 'react';
import BurgerComp from './BurgerComp';

function Order(props) {
  return (
    <div className="Order" style={{direction: "ltr"}}>
        <BurgerComp src="top-bun"           txt="." ordered={props.ordered}/>
        <BurgerComp src="mushrooms"         txt="    פטריות" ordered={props.ordered}/>
        <BurgerComp src="carmelized-onion"  txt="בצל מקורמל" ordered={props.ordered}/>
        <BurgerComp src="egg"               txt="ביצת   עין" ordered={props.ordered}/>
        <BurgerComp src="cheese"            txt="גבינת צ'דר" ordered={props.ordered}/>
        <BurgerComp src="patty"             txt="     קציצה" ordered={props.ordered}/>
        <BurgerComp src="onion"             txt="בצל   סגול" ordered={props.ordered}/>
        <BurgerComp src="tomato"            txt="    עגבניה" ordered={props.ordered}/>
        <BurgerComp src="lettuce"           txt="       חסה" ordered={props.ordered}/>
        <BurgerComp src="bottom-bun"        txt="." ordered={props.ordered}/>
    </div>
  );
}

export default Order;