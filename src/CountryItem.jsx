import { Link } from "react-router-dom";

function CountryItem({ country }) {
  return (
    <Link
      to={`/CountryInfo/${country.cca3}`}
      className="p-3 col-10 col-md-4 col-lg-2 text-decoration-none border">
          <div className="card border-0">
  <div className="card-body">
    <h5 className="card-title">{country.name.common}</h5>
  </div>
  <img src={country.flags.png} className="card-img-top border border-1" alt="Flag image" />
</div>
    </Link>
  );
}

export default CountryItem;
