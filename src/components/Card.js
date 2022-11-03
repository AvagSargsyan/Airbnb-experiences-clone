import starIcon from '../assets/star.png';

export default function Card({ title, price, coverImg, stats, location, openSpots }) {
  return (
    <div className="card">
      {openSpots === 0 ? <div className='available'>SOLD OUT</div> : ''}
      <img src={`../data-images/${coverImg}`} alt="" className="card-image" />
      <div className="rating">
        <img src={starIcon} alt="star" className="star-logo" />
        <span className="rate">{stats.rating}</span>
        <span className="review-count">({stats.reviewCount})</span>
        <span className='bullet'></span>
        <span className="country">{location}</span>
      </div>
      <div className="title">{title}</div>
      <div className="cost">
        <span>From ${price}</span> / person
      </div>
    </div>
  );
}
