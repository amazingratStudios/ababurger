import React from 'react';
import Gallery from './Gallery';
import './Pages.css';

function Main() {
  return (
    <div className="Main">
        <h1>עמוד ראשי</h1>
        <img src={process.env.PUBLIC_URL + "./img/1.jpg"} alt="1" className="img left"/>
        <p className="right">כל אחד מההמבורגרים שלנו נעשה באופן <b>איכותי, מקצועי, טרי (והכי חשוב) טעים!</b><br /><br />
        כל ביס מרטיט את בלוטות הטעם, מקפיץ את הלשון <b>ומשמח את הבטן</b>.</p>
        <img src={process.env.PUBLIC_URL + "./img/2.jpg"} alt="2" className="img right"/>
        <p className="left">"כל הרואה בעצמו ישראלי- מחויב לאכול ב<b>אבא בורגר</b>"     <span className="quote">גולדה מאיר</span><br /><br />
        למה אתם מחכים?<br /><br /><b>הזמינו עכשיו!</b></p>
        <br /><br />
        <a href="/gallery"><button style={{marginTop:"2.5rem"}}>כניסה לגלרית התמונות</button></a>
    </div>
  );
}

export default Main;