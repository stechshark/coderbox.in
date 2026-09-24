import SkillCircle from "@/components/SkillCircle"

export default function() {
    return(
        <div className="flex flex-row flex-wrap p-11 gap-10">
            <SkillCircle skill="NextJS" percentage={90}/>
            <SkillCircle skill="DSA" percentage={80}/>
            <SkillCircle skill="S.Design" percentage={70}/>
        </div>
    );
}