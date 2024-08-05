// file นี้ใช้เก็บพวก component

import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import alexaImg from "./images/alexa.png"
import cortanaImg from "./images/cortana.png"
import siriImg from "./images/siri.png"


function App() {

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                image={ alexaImg } 
                                description="Alexa was created by Amazon and helps you buy things." 
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana12" 
                                image={ cortanaImg } 
                                description="Cortana was made by Microsoft. Who knows what it does?" 
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri44" 
                                image={ siriImg } 
                                description="Siri was made by Apple and is being phased out." 
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App

