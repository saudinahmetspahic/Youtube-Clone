import React, { useState } from 'react'
import Button from '../button/Button'
import './Sidebar.css'
import pocetna_img from './icons/pocetna_img.svg'
import istrazite_img from './icons/istrazite_img.svg'
import pretplate_img from './icons/pretplate_img.svg'
import zbirka_img from './icons/zbirka_img.svg'
import historija_img from './icons/historija_img.svg'
import videocollection_img from './icons/videocollection_img.svg'
import gledatcukasnije_img from './icons/gledatcukasnije_img.svg'
import like_img from './icons/like_img.svg'
import ytpremium_img from './icons/ytpremium_img.svg'
import filmovi_img from './icons/filmovi_img.svg'
import konzola_img from './icons/konzola_img.svg'
import livestreaming_img from './icons/livestreaming_img.svg'
import sport_img from './icons/sport_img.svg'
import settings_img from './icons/settings_img.svg'
import flag_img from './icons/flag_img.svg'
import pomoc_img from './icons/pomoc_img.svg'
import feedback_img from './icons/feedback_img.svg'

function Sidebar({shrinkNav}) {
    //const [shrinkNav, setShrinkNav] = useState(shrink);

    return (
        <div className={shrinkNav ? "sidebar shrinked-sidebar" : "sidebar"}>
            {shrinkNav &&
                <div className="sidebar-inside">
                    <Button shrink={true}><img alt="" className="navbar-icon" src={pocetna_img} /> <p>Početna</p></Button>
                    <Button shrink={true}><img alt="" className="navbar-icon" src={istrazite_img} /> <p>Istražite</p></Button>
                    <Button shrink={true}><img alt="" className="navbar-icon" src={pretplate_img} /> <p>Pretplate</p></Button>
                    <Button shrink={true}><img alt="" className="navbar-icon" src={zbirka_img} /> <p>Zbirka</p></Button>
                </div>}
            {shrinkNav ||
                <div className="sidebar-inside">
                    <div className="sidebar-section">
                        <Button><img alt="" className="navbar-icon" src={pocetna_img} /> <p>Početna</p></Button>
                        <Button><img alt="" className="navbar-icon" src={istrazite_img} /> <p>Istražite</p></Button>
                        <Button><img alt="" className="navbar-icon" src={pretplate_img} /> <p>Pretplate</p></Button>
                    </div>
                    <div className="sidebar-section">
                        <Button><img alt="" className="navbar-icon" src={zbirka_img} /> <p>Zbirka</p></Button>
                        <Button><img alt="" className="navbar-icon" src={historija_img} /> <p>Povijest</p></Button>
                        <Button><img alt="" className="navbar-icon" src={videocollection_img} /> <p>Vaši videozapisi</p></Button>
                        <Button><img alt="" className="navbar-icon" src={gledatcukasnije_img} /> <p>Gledat ću kasnije</p></Button>
                        <Button><img alt="" className="navbar-icon" src={like_img} /> <p>Pozitivno ocijenjeni videozapisi</p></Button>
                    </div>
                    <div className="sidebar-section">
                        <h4>PRETPLATE</h4>
                        <Button><img alt="" className="navbar-icon" src={pretplate_img} /> <p>Pretplata 1</p></Button>
                        <Button><img alt="" className="navbar-icon" src={pretplate_img} /> <p>Pretplata 2</p></Button>
                        <Button><img alt="" className="navbar-icon" src={pretplate_img} /> <p>Pretplata 3</p></Button>
                    </div>
                    <div className="sidebar-section">
                        <h4>VIŠE S YOUTUBEA</h4>
                        <Button><img alt="" className="navbar-icon" src={ytpremium_img} /> <p>YouTube Premium</p></Button>
                        <Button><img alt="" className="navbar-icon" src={filmovi_img} /> <p>Filmovi</p></Button>
                        <Button><img alt="" className="navbar-icon" src={konzola_img} /> <p>Videoigre</p></Button>
                        <Button><img alt="" className="navbar-icon" src={livestreaming_img} /> <p>Uživo</p></Button>
                        <Button><img alt="" className="navbar-icon" src={sport_img} /> <p>Sport</p></Button>
                    </div>
                    <div className="sidebar-section">
                        <Button><img alt="" className="navbar-icon" src={settings_img} /> <p>Postavke</p></Button>
                        <Button><img alt="" className="navbar-icon" src={flag_img} /> <p>Povijest prijava</p></Button>
                        <Button><img alt="" className="navbar-icon" src={pomoc_img} /> <p>Pomoć</p></Button>
                        <Button><img alt="" className="navbar-icon" src={feedback_img} /> <p>Slanje povratnih informacija</p></Button>
                    </div>
                    <div className="sidebar-section padding-section">
                        <a href="#">O nama</a>
                        <a href="#">Mediji</a>
                        <a href="#">Autorska prava</a>
                        <a href="#">Obratite nam se</a>
                        <a href="#">Autori</a>
                        <a href="#">Oglašavanje</a>
                        <a href="#">Razvojni programeri</a><br /><br />
                        <a href="#">Uvijeti</a>
                        <a href="#">Privatnost</a>
                        <a href="#">Pravila i sigurnost</a>
                        <a href="#">Kako funkcionira YouTube</a>
                        <a href="#">Isprobajte nove značajke</a>

                        <h5>© 2021 Google LLC</h5>
                    </div>
                </div>
            }
        </div >
    )
}

export default Sidebar
