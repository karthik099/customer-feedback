import React, { useState } from 'react'
import { RiEmotionHappyLine, RiEmotionSadLine } from "react-icons/ri";
import './CustomerFeedback.css'
import { PiSmileyAngryLight, PiSmileyMeh } from 'react-icons/pi';
import { IoMdCheckmark } from 'react-icons/io';



const CustomerFeedback = () => {
    const [emotion, setEmotion] = useState("");
    const [message, setMessage] = useState("");
    const handleClick = (exp: string) => {
        setTimeout(() => {
            setEmotion(exp);
            if (exp === 'happy') {
                setMessage("We're thrilled to hear you enjoyed your experience with us")
            } else if (exp === 'average') {
                setMessage("Thank you for your feedback. We're glad you enjoyed X, but we'll use your suggestion about Y to improve.")
            } else if (exp === 'sad') {
                setMessage("We are so sorry to hear about your negative experience with us. Please tell us what happened.")
            } else if (exp === 'angry') {
                setMessage("I'm so sorry to hear about your experience. I understand your frustration and I want to help make this right.")
            }
        })
    }
    return (
        <>
            <div className='container'>
                <button
                    title={'Happy'}
                    onClick={() => handleClick('happy')}         >

                    {(emotion !== 'happy') && <RiEmotionHappyLine color='#EBD338' size={100} />}
                    {emotion === 'happy' && <IoMdCheckmark color='green' size={100} />}
                </button>
                <button
                    title={'Average'}
                    onClick={() => handleClick('average')}         >
                    {(emotion !== 'average') && <PiSmileyMeh color='#3D48F2' size={100} />}
                    {emotion === 'average' && <IoMdCheckmark color='green' size={100} />}
                </button>
                <button
                    title={'Poor'}
                    onClick={() => handleClick('sad')}         >
                    {(emotion !== 'sad') && <RiEmotionSadLine color='#F36B39' size={100} />}
                    {emotion === 'sad' && <IoMdCheckmark color='green' size={100} />}
                </button>
                <button
                    title={'Angry'}
                    onClick={() => handleClick('angry')}    >
                    {(emotion !== 'angry') && <PiSmileyAngryLight color='#D60D0D' size={100} />}
                    {emotion === 'angry' && <IoMdCheckmark color='green' size={100} />}
                </button>

            </div>

            <p className='message'>{message}</p>
        </>

    )
}

export default CustomerFeedback