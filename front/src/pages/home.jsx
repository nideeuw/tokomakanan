import React from "react";
import { Link } from "react-router-dom";
import '../component/home.css';

class Header extends React.Component {
    render(){
        return (
            <div className="body">
                <div className="">
                    <img src="https://cdn.mallofindonesia.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-09-at-07.31.52.jpeg" 
                    className="image-header" alt="" />

                    <h1 className="textfavmenu">Menu Favorit</h1>
                    <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/August2020/h3cZg2TVvmjkBHJYRpfw.png" 
                    className="img1" />
                    <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/nhj93oZApoMavF1lC6Wm.png" 
                    className="img2" alt="" />
                    <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/fTkXy7ji77MIZZnMAemm.png" 
                    className="img3" alt="" />
                    <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/July2021/Z5Sy1QcYXZIv7Lv50wcy.png" 
                    className="img4" alt="" />
                </div>
            </div>

        )
    }
}

export default Header;