import Project from "@/components/Project";

export default function Projects() {
    return(
        <div className="font-mono text-white flex flex-col items-center justify-center p-5">
            <h1 className="text-3xl text-blue-400 font-semibold">Live Projects</h1>
            <p className="font-cursive text-lg mt-5">Here are some of my top projects :</p>
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-7">
                <Project title="NoteBox" description="Fullstack notes app in react" imagesrc="images/notebox.png" website_link="https://noteapp-net0.onrender.com/"/>
            </div>
        </div>
    );
}