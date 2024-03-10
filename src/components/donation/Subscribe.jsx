import React from 'react'

const Subscribe = () => {
  return (
    <div className="subscribe">
        <div className="subscribe-wrapper">
            <div className='subscribe-btn'>
                <button>Subscribe</button>
                <div className="text">
                    <h3>STAY IN TOUCH</h3>
                    <p>Join our mailing list to receive email charts with
                        first aid specials and updates.
                    </p>
                </div>
            </div>
            <div className='subscribe-input'>
                <form action="">
                    <div className="mail-input">
                        <input type="email" />
                        <button type="submit">Submit</button>
                    </div>
                    <div className="check">
                        <input type="checkbox" name="" id="" />
                        <span>I have read, understand and agree with the privacy
                            Policy and Terms and Conditions.
                        </span>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Subscribe