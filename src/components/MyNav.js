import './styles.css';
import { Link } from 'react-router-dom';

function MyNav() {
return (
    <nav>
        <ul id="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/book-table">Book Table</Link></li>
        </ul>
    </nav>
);
}

export default MyNav;
