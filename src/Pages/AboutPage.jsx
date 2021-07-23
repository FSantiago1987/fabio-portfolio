import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../Assets/Images/design.png';
import tech from '../Assets/Images/tech.png';
import mobile from '../Assets/Images/mobile.png';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'}/>
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'}/>
            <div className="skills-container">
                <SkillsSection skill={'HTML'} progress={'90%'} />
                <SkillsSection skill={'CSS/SCSS'} progress={'80%'} />
                <SkillsSection skill={'React Js'} progress={'60%'} />
                <SkillsSection skill={'Node Js'} progress={'60%'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} />
                <SkillsSection skill={'Java'} progress={'40%'} />
            </div>
            <div className="services-title">
                <Title title={'My Services'} span={'My Services'}/>
            </div>
            <div className="services-container">
                <ServicesSection 
                    image={design} 
                    title={'Web Design'}
                    text={'Bring your ideas to life with our web design services.'}
                />
                <ServicesSection 
                    image={tech} 
                    title={'Modern Technologies'}
                    text={'We use modern technologies to build your website.'}
                />
                <ServicesSection 
                    image={mobile} 
                    title={'Mobile Friendly'}
                    text={'Website completly mobile responsive.'}
                />                                
            </div>
        </div>
    )
}

export default AboutPage;
