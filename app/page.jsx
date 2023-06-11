import React from 'react'

import Feed from '@components/Feed';
import Profile from '@components/Profile';
import PromptCard from '@components/PromptCard';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">
                AI-Powered Prompts
            </span>
            <p className="desc text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo aspernatur praesentium ab voluptates ex, reiciendis sequi suscipit mollitia corrupti libero rem, ipsam, aliquid eius quidem perspiciatis perferendis iste? Dolore, distinctio?
            </p>
        </h1>
        <Feed/>
      

    </section>
  )
}

export default Home