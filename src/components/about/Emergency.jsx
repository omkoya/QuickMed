import React from 'react'

const Emergency = () => {
  return (
    <div className="emergency-cta">
        <div className="emergency-cta-content">
            <div className="emergency-contacts">
                <h3>Do you need an Emergency?</h3>

                <div className="buttons">
                    <button><i className="fa fa-phone"></i><span>Call</span></button>
                    <button><i className='fab fa-whatsapp'></i><span>Whatsapp</span></button>
                </div>
            </div>
            <div className="emergency-img"></div>
        </div>
    </div>
  )
}

export default Emergency