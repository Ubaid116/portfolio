// src/app/page.tsx
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'ARCHITECT WEBSITE',
    description: ' a Japanese tuning company founded by Wataru Kato. It is known globally for its aggressive wide-body kits and custom car modifications.  ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzG1fdrbIoqQsJhiYFvxcVWBAD59wDcaia1A&s',
    url: "https://archweb2255.vercel.app/"
  },
  {
    id: 2,
    title: 'CAR BLOG',
    description: 'JDM stands for Japanese Domestic Market, which refers to vehicles and automotive parts designed specifically for sale and use in Japan. ',
    url: "https://design4-5.vercel.app/",
    image: 'https://www.shutterstock.com/image-vector/car-silhouette-on-white-background-600nw-2426798581.jpg',
  },
  {
    id: 3,
    title: 'RESUME BUILDER',
    description: 'Iconic tobacco brand seen on Ferrari and McLaren F1 cars. It has an iconic association with motorsport, particularly in Formula 1. ',
    image: 'https://cdn6.aptoide.com/imgs/9/2/6/9262d372de5cd29430c675a6099e115c_icon.png',
    url: "https://hackathone-nu.vercel.app/"
  },

];

export default function HomePage() {
  return (
    <div className="container   mx-auto px-4 py-8">
      <h2 className="text-3xl  font-bold text-center text-black capitalize mb-8">Portfolio web</h2>
      <div className="grid  text-white grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border bg-slate-800 text-center text-white rounded-lg overflow-hidden transform hover:scale-105 shadow-lg hover:shadow-xl  transition-transform duration-300"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4 bg-[#2E8B57]" >
              <h3 className="text-xl text-white font-bold">{blog.title}</h3>
              <p className="mt-2  text-y" >{blog.description}</p>
              <Link target="_blank" href={blog.url}>
                  <span className="w-full text-black ">VIEW</span>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}