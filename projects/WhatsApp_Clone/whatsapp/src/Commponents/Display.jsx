import React from 'react'

const Display = () => {
    return (
        <div className='display'>
            <div className="whatsapp-nav">
                <div className="topnav">
                    <div>
                        <p>05.36</p>
                    </div>
                    <div className='default-properities'>

                        <div className='d-flex align-items-center'>
                            <p><b>LTE</b></p>
                            <p><i class="fa-solid fa-signal mx-1 mb-1"></i></p>

                        </div>

                        <div className='d-flex align-items-center'>
                            <p><i class="fa-solid fa-battery-three-quarters mx-1"></i></p>
                            <p>80%</p>
                        </div>

                    </div>
                </div>

                <div className="navbar">
                    <div className="left d-flex align-items-center">
                        <i class="fa-solid fa-arrow-left"></i>

                        <div className="user-dp">
                            <img src="/dp.jpg" alt="" />
                        </div>

                        <h5 className='mx-2'>Thanushan</h5>
                    </div>
                    <div className="right d-flex align-items-center gap-4">
                        <i class="fa-solid fa-video"></i>
                        <i class="fa-solid fa-phone"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>

                    </div>
                </div>
            </div>

            <div className="content">
                <div className="chat-window">
                    <div className="chat-message received">
                        <p>Hello! How are you?</p>
                    </div>

                    <div className="chat-message sent">
                        <p>I'm good, thanks!</p>
                    </div>



                    <div className="chat-message received">
                        <p>Hello! How are you?</p>
                    </div>

                    <div className="chat-message sent">
                        <p>I'm good, thanks!</p>
                    </div>



                    <div className="chat-message received">
                        <p>Hello! How are you?</p>
                    </div>

                    <div className="chat-message sent">
                        <p>I'm good, thanks!</p>
                    </div>


                    <div className="chat-message received">
                        <p>Hello! How are you?</p>
                    </div>

                    <div className="chat-message sent">
                        <p>I'm good, thanks!</p>
                    </div>


                </div>



            </div>

            <div className="bottom-container">

                <div className="input-container">
                    <p>sdjhf</p>
                </div>

                <div className="mic">

                </div>

            </div>

        </div>
    )
}

export default Display