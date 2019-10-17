import React from 'react';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const content = [
	{
        title: <img src="http://www.abigaylefranklin.com/THunter/img/logo-white.png" width="100%"/>,
		image: 'http://www.abigaylefranklin.com/THunter/img/hero-img.jpg',
	},
	{
		description:
		<span><p>“Even when you’re sad and bad stuff is happening all around you, you can find something beautiful to take a picture of. Look for the beautiful things to tell a story.”</p><h2>Uncle Jimmy</h2></span>,
		image: 'http://www.abigaylefranklin.com/THunter/img/port18.jpg',
	},
	{
        description:
        <span>
            <p>I am a photographer today because of ALS. My photography was a gift from ALS and it belongs to the ALS community and fight against this terrible disease.</p>
            <p>My first glimpse of photography and understanding of what it is and the power behind it, was sitting at a kitchen counter, at my grandparent’s house, 5 or 6 years old and watching pictures being projected onto the refrigerator. Amazing photos of tulips, Holland, England, Germany.</p> 
            <p>My Uncle Jimmy would send us boxes of slides to tell the stories of his life and all that he was seeing around the world. In the early 70’s before you could hop on a computer and go anywhere in the world this was a magical experience. </p>
            <p>I didn’t understand at the time how <em>poignant & impactful</em> those times would be.</p>

        </span>,
		image: 'http://www.abigaylefranklin.com/THunter/img/port16.jpg',
    },
    {
        description:
        <span>
            <p>My Uncle Jimmy was a stable and constant force in my life, for all of my life. He fell in love with photography in Vietnam. He learned then that you could find the good in just about any situation if you looked for the <em>picture stories</em>  around you. Taking a moment and looking for something beautiful to take a photo of could transcend you from a dark place and give you a flicker of light. A flash of beauty. And sometimes that’s all you need to pull yourself out of the darkness. </p>
            <p>When Uncle Jimmy he got his ALS diagnosis that is what he fell back on. He gifted me with that life changing lesson and also my first good cameras.  He wanted me to learn photography to see beauty around me. I understood that he needed me to look for picture stories for him as well. To shine a light for him during his darkest days. </p>
            <p>Over the years as one of his favorite hobbies was lost to him, he handed the mantle of it over to me. To help us both see the good around us, the beauty in the world and not get lost in the terrible darkness that ALS can bring to you. </p>
        </span>,
		image: 'http://www.abigaylefranklin.com/THunter/img/port10.jpg',
    },
    {
        description:
        <span>
            <p>He left me in December 2018, for a moment I was lost in total <em>darkness</em> and thought our story had ended there and ALS had won.</p>
        </span>,
		image: 'http://www.abigaylefranklin.com/THunter/img/port06.jpg',
    },
    {
        description:
        <span>
            <p>Then I remembered the light of photography, the beauty in a <em>picture story</em>, <br/>the lessons in life and photography that my Uncle Jimmy shared with me. <br/>I have decided that this will NOT be where our story ends. <br/>This is not how my story with my Uncle Jimmy will end and ALS will NOT win.</p> 
            <p>I will <em>dedicate</em> my time and my energy to sharing the pictures I took for him to make him happy. <br/>I hope that they bless others and shine a small light for them as well.</p>
            <p>I will <em>share</em> the lessons and the things that I know about photography with others so <br/>they too can shine lights by sharing beautiful things.</p>
            <p>I will <em>donate</em> 100% of my photography to the ALS foundation so that one day, <br/>all of the stories have a different ending.</p>

        </span>,
		image: 'http://www.abigaylefranklin.com/THunter/img/port14.jpg',
    },
];

class HeroSlider extends React.Component {
    render () {
      return (
        <Slider className="slider-wrapper">
        {content.map((item, index) => (
            <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
            >
                <div className="inner">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </div>
            </div>
        ))}
    </Slider>
      )
    }
  }


export default HeroSlider
