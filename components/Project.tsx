type UserProps = {
  title: string;
  description: string; 
  imagesrc: string; 
  website_link: string; 
};
export default function Project({title, description, imagesrc, website_link} : UserProps) {
  return (
    <div className="md:w-100 w-[70vw] font-mono flex flex-col gap-5 mt-7 p-7 border rounded-2xl border-gray">
      <h1 className="text-xl font-semibold text-blue-400">{title}</h1>
      <img className="rounded-2xl" src={imagesrc} alt="project image" />
      <p>{description}</p>
      <a href={website_link} target="_blank">
        <button className="bg-blue-600 rounded-full text-black font-semibold w-25 h-10 hover:bg-blue-400">Visit</button>
      </a>
    </div>
  );
}
