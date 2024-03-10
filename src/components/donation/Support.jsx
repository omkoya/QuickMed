import React, { useState } from "react"


const Support = () => {
    const [paymentPlan, setPaymentPlan] = useState(null);
    const [paymentAmount, setPaymentAmount] = useState(null);

    const handleActivePlan = (plan) => {
        setPaymentPlan(plan)
    }
    const handleActiveAmount = (amount) => {
        setPaymentAmount(amount)
    }

  return (
    <div className="donation-support">
        <div className="support-list">
            <h3>Your Donation Supports</h3>
            
            <ul>
                <li>
                    <div className='dot'></div>
                    <div className="list-desc">
                        <h4>First Aid Program</h4>
                        <p>Poviding the first aid training to communities.</p>
                    </div>
                </li>

                <li>
                    <div className='dot'></div>
                    <div className="list-desc">
                        <h4>Research And Development</h4>
                        <p>
                            Conducting esearch studies for remote places to educate
                            the effectiveness of actual emergency service.
                        </p>
                    </div>
                </li>

                <li>
                    <div className='dot'></div>
                    <div className="list-desc">
                        <h4>Community Emergency Response</h4>
                        <p>Rapid rsponse to emergencies with nearby hospitals.</p>
                    </div>
                </li>
            </ul>
        </div>

        <div className="support-payment">
            <h3>Together we're stronger. Donate today</h3>
            <form action="">
                <div className="payment-plan">
                    <div className="interval">
                        <span className={paymentPlan === 'giveOnce' ? 'active' : ''} 
                        onClick={() => handleActivePlan('giveOnce')}>
                            Give Once
                        </span>
                        <span className={paymentPlan === 'monthly' ? 'active' : ''}
                                onClick={() => handleActivePlan('monthly')}>
                            Monthly
                        </span>
                    </div>
                    <div className="amount">
                        <span className= {paymentAmount === '5000' ? 'active' : ''} onClick={() => handleActiveAmount('5000')}>5,000</span>
                        <span className= {paymentAmount === '10000' ? 'active' : ''} onClick={() => handleActiveAmount('10000')}>10,000</span>
                        <span className= {paymentAmount === '20000' ? 'active' : ''} onClick={() => handleActiveAmount('20000')}>20,000</span>
                        <span className= {paymentAmount === 'other' ? 'active' : ''} onClick={() => handleActiveAmount('other')}>Other</span>
                    </div>
                </div>

                <div className="payment-info">
                    <h4>Payment Information</h4>
                    <div className="card-info">
                        <div className="card-number">
                            <label>Debit or Credit Card Number</label>
                            <input type="number" />
                        </div>

                        <div className="card-date">
                            <input type="month" />
                            <input type="year" />
                            <input type="number" />
                        </div>
                    </div>
                </div>

                <div className="supporter-info">
                    <h4>Your Information</h4>
                    <div className="info-wrapper">
                        <div className="details">
                            <label htmlFor="">First Name</label>
                            <input type="text" />
                        </div>
                        <div className="details">
                            <label htmlFor="">Last Name</label>
                            <input type="text" />
                        </div>
                        <div className="details">
                            <label htmlFor="">Email</label>
                            <input type="email" />

                            <div className="check">
                                <input type="checkbox" name="" id="" />
                                <span>Yes. I wouls like to receive email updates.</span>
                                
                            </div>
                        </div>
                        <div className="details">
                            <label htmlFor="">Phone</label>
                            <input type="number" />
                        </div>
                        <div className="details">
                            <label htmlFor="">Address</label>
                            <input type="text" />
                        </div>
                        <div className="details">
                            <label htmlFor="">City</label>
                            <input type="text" />
                        </div>
                        <div className="details">
                            <label htmlFor="">State</label>
                            <input type="text" />
                        </div>
                        <div className="details">
                            <label htmlFor="">Country</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="check">
                        <input type="checkbox" />
                        <span>Remember my contact information on this browser.
                        (Credit card information is not stored.)
                        </span>
                    </div>
                </div>

                <button type="submit">Donate Now</button>

                <div className='agree'>
                    <span>
                        By clicking the above button, you agree to have your debit 
                        or credit card charged by Emergency Medical Service.
                    </span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Support