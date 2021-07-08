import React from 'react';
import './see-all.css'

const SellAllComponent = (props) => {

    const data = props.location.state['data']
    const pageName = props.location.state['pageName']

    console.log(data);

    return (
        <>
            <h2>{pageName}</h2>
            <div className='seeAllComponent'>
                {data && data.map(track =>
                    <div key={track.id} className='rpc-track-item' >
                        <div className='rpc-track-item-data' >
                            <div><img className='rpc-track-image' src={track.image} alt={track.name} /> </div>
                            <div className='rpc-track-names'>{track.name}</div>
                            <div className='rpc-track-artists'>{track.artists}</div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default SellAllComponent;