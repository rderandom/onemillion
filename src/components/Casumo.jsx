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
            if (ev.target.scrollTop > scroll && scroll < 337) {
                casumoPosition += 3;
            } else {
                casumoPosition -= 3;
            }
            document.getElementById('casumo').style.top = casumoPosition + 'px';

        };
    }
}

export default Casumo;