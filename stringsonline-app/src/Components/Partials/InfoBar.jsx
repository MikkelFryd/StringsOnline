import Style from './infobar.module.scss'
import logoMail from '../../assets/images/mail-icon.png'
import logoPhone from '../../assets/images/phone-icon.png'
import { ProductBasket } from '../Product/ProductBasket'

export const InfoBar = () => {

    return (
        <div className={Style.infobar}>
            <span></span>
            <div className={Style.gridcontainer}>
                <div className={Style.gridbox}>
                    <img src={logoMail} alt="logo-mail" />
                    <p>SALES@STRINGSONLINE.COM</p>
                </div>
                <div className={Style.gridbox}>
                    <img src={logoPhone} alt="logo-phone" />
                    <p>+45 98 12 22 68</p>
                </div>
            <ProductBasket />
            </div>
        </div>
    )
}