import './styles.css';

function Footer() {
return (
    <footer>
        <div>
            <img src={require('../assets/images/footer_img.png')} alt="Little Lemon Restaurant" />
        </div>
        <div>
            <p>&copy; 2025 Little Lemon Restaurant</p>
        </div>
    </footer>
);
}

export default Footer;
