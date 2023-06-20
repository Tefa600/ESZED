import React from 'react'
import vouPic from '../../images/6465.jpg'
import styles from './Voucher.module.css'
export default function Voucher() {
  return (
    <>
    <div className={`container ${styles.vouCon}`}>
        <div className="row">
            <div className="col-lg-6">
                <div className={`mt-4  ${styles.inputContain}`}>
            <input
       className={`${styles.vouInp}`}
        placeholder="Voucher"
        type='text'
    
      />
      </div>
      <button className={`btn text-white px-4 py-2 mt-4 ${styles.voubtn}`}  
        >Submit</button>
            </div>
            <div className="col-lg-6">
                <img className='w-75 h-75' src={vouPic} alt="voucher" />
            </div>
        </div>
    </div>
    
    </>
  )
}
