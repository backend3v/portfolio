import paths from './../config/paths/paths.js';
import texts from './../texts/es.js';



class Sections{
    langTexts=texts
    name=""
    getSkillsSections() {
        return {
            titles:{
                title:this.langTexts.skills["title"],
                skills:this.langTexts.skills["skills"],
                skillsTech:this.langTexts.skills["skillsTechs"],
            },
            skillsTech:[
                {
                    name:"python",
                    description:this.langTexts.skills.skillsTech["python"],
                    image:paths.skills["python"]
                },
                {
                    name:"php",
                    description:this.langTexts.skills.skillsTech["php"],
                    image:paths.skills["php"]
                },
                {
                    name:"ruby",
                    description:this.langTexts.skills.skillsTech["ruby"],
                    image:paths.skills["ruby"]
                },
                {
                    name:"c#",
                    description:this.langTexts.skills.skillsTech["csharp"],
                    image:paths.skills["csharp"]
                },
                {
                    name:"javascript",
                    description:this.langTexts.skills.skillsTech["javascript"],
                    image:paths.skills["javascript"]
                },
                {
                    name:"node",
                    description:this.langTexts.skills.skillsTech["node"],
                    image:paths.skills["node"]
                },
                {
                    name:"linux",
                    description:this.langTexts.skills.skillsTech["linux"],
                    image:paths.skills["linux"]
                },
                {
                    name:"sql",
                    description:this.langTexts.skills.skillsTech["sql"],
                    image:paths.skills["mysql"]
                },
                {
                    name:"docker",
                    description:this.langTexts.skills.skillsTech["docker"],
                    image:paths.skills["docker"]
                },
                {
                    name:"git",
                    description:this.langTexts.skills.skillsTech["git"],
                    image:paths.skills["git"]
                },
                {
                    name:"mongo",
                    description:this.langTexts.skills.skillsTech["mongo"],
                    image:paths.skills["mongo"]
                },
                {
                    name:"solidity",
                    description:this.langTexts.skills.skillsTech["solidity"],
                    image:paths.skills["solidity"]
                },
                {
                    name:"flutter",
                    description:this.langTexts.skills.skillsTech["flutter"],
                    image:paths.skills["flutter"]
                },
                {
                    name:"aws",
                    description:this.langTexts.skills.skillsTech["aws"],
                    image:paths.skills["aws"]
                },
                {
                    name:"terraform",
                    description:this.langTexts.skills.skillsTech["terraform"],
                    image:paths.skills["terraform"]
                },
                {
                    name:"scikit",
                    description:this.langTexts.skills.skillsTech["scikit"],
                    image:paths.skills["scikit"]
                },
            ],
            content:[
                {
                    name:this.langTexts.skills.content[0]["name"],
                    texts:this.langTexts.skills.content[0]["texts"]
                },
                {
                   name:this.langTexts.skills.content[1]["name"],
                    texts:this.langTexts.skills.content[1]["texts"]
                },
                {
                    name:this.langTexts.skills.content[2]["name"],
                    texts:this.langTexts.skills.content[2]["texts"]
                },
                {
                    name:this.langTexts.skills.content[3]["name"],
                    texts:this.langTexts.skills.content[3]["texts"]
                },
                {
                    name:this.langTexts.skills.content[2]["name"],
                    texts:this.langTexts.skills.content[2]["texts"]
                },
                {
                    name:this.langTexts.skills.content[3]["name"],
                    texts:this.langTexts.skills.content[3]["texts"]
                }
            ]
        }
    }
    
    getPresentationSections() {
        return {
            title:this.langTexts.presentation["title"],
            content:{
                position:this.langTexts.presentation["position"],
                name:this.langTexts.presentation["name"],
                about:this.langTexts.presentation["about"],
                contact:[
                    {
                        name:this.langTexts.presentation["contact"],
                        texts:[
                            [this.langTexts.presentation["email1"],""],
                            [this.langTexts.presentation["email2"],""]
                        ]
                    },
                    {
                        name:this.langTexts.presentation["social"],
                        texts:[
                            [this.langTexts.presentation["linkedin"],paths.presentation["linkedin"]],
                        ]
                    },
                    {
                        name:this.langTexts.presentation["github"],
                        texts:[
                            [this.langTexts.presentation["muluk"],paths.presentation["githubmuluk"]],
                            [this.langTexts.presentation["backendev"],paths.presentation["githubback"]]
                        ]
                    },
                    {
                        name:this.langTexts.presentation["colab"],
                        texts:[
                            [this.langTexts.presentation["colab1"],paths.presentation["colab1"]],
                            [this.langTexts.presentation["colab2"],paths.presentation["colab2"]],
                            [this.langTexts.presentation["colab3"],paths.presentation["colab3"]],
                        ]
                    }
                    ,
                ]
            }
          }
    }

    getJobsSections() {
        return {
            titles:{
                title:this.langTexts.jobs["title"],
                jobs:this.langTexts.jobs["jobsT"],
                projects:this.langTexts.jobs["projectsT"],
            },
            content:{
                jobs:[
                    {
                        place:this.langTexts.jobs.jobs[0]["name"],
                        position:this.langTexts.jobs.jobs[0]["position"],
                        city:"Miami, Florida",
                        description:this.langTexts.jobs.jobs[0]["description"],
                        date:"2022-2023",
                        image:paths.jobs["mango"]
                    },
                    {
                        place:this.langTexts.jobs.jobs[1]["name"],
                        position:this.langTexts.jobs.jobs[1]["position"],
                        city:"Miami, Florida",
                        description:this.langTexts.jobs.jobs[1]["description"],
                        date:"2022-2023",
                        image:paths.jobs["stradata"]
                    },
                    {
                        place:this.langTexts.jobs.jobs[2]["name"],
                        position:this.langTexts.jobs.jobs[2]["position"],
                        city:"Bogota",
                        description:this.langTexts.jobs.jobs[2]["description"],
                        date:"2021",
                        image:paths.jobs["symplifica"]
                    },
                    {
                        place:this.langTexts.jobs.jobs[3]["name"],
                        position:this.langTexts.jobs.jobs[3]["position"],
                        city:"Fort Lauderdale, Florida",
                        description:this.langTexts.jobs.jobs[3]["description"],
                        date:"2020",
                        image:paths.jobs["biznaga"]
        
                    },
                    {
                        place:this.langTexts.jobs.jobs[4]["name"],
                        position:this.langTexts.jobs.jobs[4]["position"],
                        city:"Miami, Florida",
                        description:this.langTexts.jobs.jobs[4]["description"],
                        date:"2018-2019",
                        image:paths["none"]
        
                    },
                    {
                        place:this.langTexts.jobs.jobs[5]["name"],
                        position:this.langTexts.jobs.jobs[5]["position"],
                        city:"Bogota",
                        description:this.langTexts.jobs.jobs[5]["description"],
                        date:"2016-2018",
                        image:paths.jobs["husi"]
                    },
                    
                    
                   
                    
                    
                ],
                projects:[
                    {
                        name:this.langTexts.jobs.projects[0]["name"],
                        description:this.langTexts.jobs.projects[0]["description"],
                        url:paths.jobs["alphabeth"][1],
                        image:paths.jobs["alphabeth"][0]
                    },
                    {
                        name:this.langTexts.jobs.projects[1]["name"],
                        description:this.langTexts.jobs.projects[1]["description"],
                        url:paths.jobs["dorean"][1],
                        image:paths.jobs.dorean[0]
                    },
                    {
                        name:this.langTexts.jobs.projects[2]["name"],
                        description:this.langTexts.jobs.projects[2]["description"],
                        url:paths.jobs["btc"][1],
                        image:paths.jobs["btc"][0]
                    },
                    {
                        name:this.langTexts.jobs.projects[3]["name"],
                        description:this.langTexts.jobs.projects[3]["description"],
                        url:paths.jobs["estadistica"][1],
                        image:paths.jobs["estadistica"][0]
                    },
                ]
            },
            }
    }
    getExamplesSections() {
        return {
            title:this.langTexts.examples["title"],
            info:this.langTexts.examples["infoExample"]
        }
    }
}

export function getPresentationSections(t) {
    let sections = new Sections();
    if(t != undefined){
        sections.langTexts=t
    }
    let s =sections.getPresentationSections()
    return s;
}
export function getSkillsSections(t) {
    const sections = new Sections();
    if(t != undefined){
        sections.langTexts=t
    }
    return sections.getSkillsSections();
}
export function getJobsSections(t) {
    const sections = new Sections();
    if(t != undefined){
        sections.langTexts=t
    }
    return sections.getJobsSections();
}
export function getExamplesSections(t) {
    const sections = new Sections();
    if(t != undefined){
        sections.langTexts=t
    }
    return sections.getExamplesSections();
}