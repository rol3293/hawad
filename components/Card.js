import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends React.Component {
    render() {
        return (
            <a href={this.props.href} target='_blank' rel="noreferrer">
                <div className='box'>
                    <FontAwesomeIcon icon={this.props.icon} size={'2x'} style={{marginLeft: '10px', marginRight: '30px'}}/>
                    <div>
                        <h2 style={{ marginTop: '0px', marginBottom: '5px' }}>{this.props.title}</h2>
                        <p style={{ margin: '0px', color: '#3f5473' }}>{this.props.desc}</p>                    
                    </div> 
                </div>
            </a>
            
        );
    }
}

export default Card;