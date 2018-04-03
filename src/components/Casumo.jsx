import React from 'react';
import './Casumo.scss';

let scroll = 0;
let casumoPosition = 50;
class Casumo extends React.Component {
    render() {
        return (<img id="casumo" className="casumo" src="http://casumocasinobonuses.com/wp-content/uploads/2018/01/WinnerPose-300x300.png" alt="Casumo <3" />);

    }
    componentDidMount() {
        document.getElementsByClassName('ReactVirtualized__List')[0].onscroll = (ev) => {
            const top = document.getElementById('casumo').style.top.split("px")[0];
            if (ev.target.scrollTop > scroll ) {
                if(top <= (window.innerHeight-300-30)){
                     casumoPosition += 3;   
                }
            } else {
                if(top >= 50){
                    casumoPosition -= 3;                    
                }
            }
            document.getElementById('casumo').style.top = casumoPosition + 'px';
            scroll = ev.target.scrollTop;
        };
    }
}

export default Casumo;