import "./footer.css"
const Footer = ()=>{
    let date =  new Date().getFullYear();
    return(
        <footer>
            <footer className="primary-footer">
                <div className="social-block">
                    <a href="https://www.facebook.com/BmwCodeArmenia/" target="_blank"  rel="noreferrer"
                       className="btn-social btn-facebook i-center"><i
                        className="fa fa-facebook f"></i></a>
                    <a href="/connect" target="_blank"  rel="noreferrer" className="btn-social btn-email i-center"><i
                        className="fa fa-envelope f"></i></a>
                    <a href="https://www.youtube.com/channel/UCMev7qP99epvvB6OlGT8gUA"  rel="noreferrer" target="_blank"
                       className="btn-social btn-youtube i-center"><i className="fa fa-youtube f"></i></a>
                </div>
                <span className="footer-info" id="span-footer">© 2019-{date} BMW code Armenia</span>
            </footer>
        </footer>
    )
}
export default Footer;