

function Main() {
  return (
  <>
  <main className="main-container">
  <h1>Number of guests</h1>
  <p>1-2</p>
  <p>3-4</p>
  <p>5+</p>
  <h1>Seating options</h1>
  <p>* inside</p>
  <p>* putside</p>
  <article>
  <h1>Date of reservation</h1>
  <p>mm/dd/yy</p>
  </article>
  <article className="article3">
  <h1>Menu and Time </h1>
  <ul className="menu-and-time">
    <li className="menu-item">
  <h3>Breakfast</h3>
  <h4>Served from 8-11 am</h4>
  <p>8:00 am</p>
  <p>9:00 am</p>
  <p>10:00 am</p>
  <p>11:00 am</p>
  </li>
  <li className="menu-item">
    <h3>Lunch</h3>
    <h4>Served from 12-7pm</h4>
  <p>12:00 pm</p>
  <p>13:00 pm</p>
  <p>14:00 pm</p>
  <p>15:00 pm</p>
  <p>16:00 pm</p>
  </li>
  <li className="menu-item">
    <h3>Dinner</h3>
    <h4>Served from 5pm - 10 pm</h4>
    <p>17:00 pm</p>
    <p>18:00 pm</p>
    <p>19:00 pm</p>
    <p>20:00 pm</p>
    <p>21:00 pm</p>
    </li>
  </ul>
  </article>
  </main>
  </>
  );
}

export default Main;