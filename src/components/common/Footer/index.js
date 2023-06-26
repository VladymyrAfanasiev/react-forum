import { useTranslation } from 'react-i18next';

import './Footer.css';

function Footer () {
    const { t, i18n } = useTranslation();

    return (
        <div className="footer">
            {
                t("copyright")
            }
        </div>
    );
}

export default Footer;