import React from "react";
import Counter from "./counter";
export default function ImageCard(props) {
    const imgData = [
        {
            id: 1,
            img:
                "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
            title: "dog"
        },
        {
            id: 2,
            img:
                "https://author.commlabindia.com/wp-content/uploads/2021/09/animated-gifs-corporate-training.gif",
            title: "coding..coding..."
        },
        {
            id: 3,
            img:
                "https://cdn.pixabay.com/photo/2022/07/12/20/15/cavia-7318119_960_720.jpg",
            title: "ginni pig"
        },
        {
            id: 4,
            img:
                "https://cdn.pixabay.com/photo/2022/04/20/20/23/bee-7146136_960_720.jpg",
            title: "flower"
        },
        {
            id: 5,
            img:
                "https://c.tenor.com/TDIWnhAsUJoAAAAC/sun-beach.gif",
            title: "sun set"
        },
        {
            id: 6,
            img:
                "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/tenor_1.gif",
            title: "yeee...clap clap"
        },
        {
            id: 7,
            img:
                "https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138_960_720.jpg",
            title: "mountain"
        },
        {
            id: 8,
            img:
                "https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177_960_720.jpg",
            title: "Wind farm"
        },
        {
            id: 9,
            img:
                "https://lionquotes.net/wp-content/uploads/2021/07/Hanuman-images-Photos-Wallpaper-Lord-Hanuman-Ji-HD.png",
            title: "lord hanuman"
        },
        {
            id: 10,
            img:
                "https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif",
            title: "magic."
        }
    ];
    return (
        <div className="img-gallery">
            {imgData.map((item, index) => {
                return (
                    <div className="img-card" key={index}>
                        <img src={item.img} alt='card-image' className="img" />
                        <div>
                            <h2>{item.title}</h2>
                            <Counter />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
