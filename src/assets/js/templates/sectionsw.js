import paths from './../config/paths/paths.js';
import texts from './../texts/es.js';



class Sections{
    langTexts=texts
    name=""
    sections={
        presentation:{
        title:this.langTexts.presentation["title"],
        content:{
            position:this.langTexts.presentation["position"],
            name:this.langTexts.presentation["name"],
            about:this.langTexts.presentation["about"],
            contact:[
                {
                    name:this.langTexts.presentation["social"],
                    texts:[
                        [this.langTexts.presentation["email1"],""],
                        [this.langTexts.presentation["email2"],""]
                    ]
                },
                {
                    name:this.langTexts.presentation["github"],
                    texts:[
                        [this.langTexts.presentation["muluk"],paths["githubmuluk"]],
                        [this.langTexts.presentation["backendev"],paths["githubback"]]
                    ]
                },
                {
                    name:this.langTexts.presentation["colab"],
                    texts:[
                        [this.langTexts.presentation["colab1"],"https://colab.research.google.com/drive/1T-ym4onI8Ae9zz_XWkccCzo9LNM9xpQh?usp=sharing"],
                        [this.langTexts.presentation["colab2"],"https://colab.research.google.com/drive/12cT7DJaHu13vvtjV8A57oObheXRLPank?usp=sharing"],
                        [this.langTexts.presentation["colab3"],"https://colab.research.google.com/drive/1ls_qLQ3Xyb_yo1jDI7KsVOYjKJvnHOgz?usp=sharing"],
                    ]
                }
                ,
            ]
        }
      },
    skills:{
        title:this.langTexts.skills["title"],
        skillsTech:[
            {
                name:"python",
                description:this.langTexts.skills.skillsTech["python"],
                image:"python"
            },
            {
                name:"php",
                description:this.langTexts.skills.skillsTech["php"],
                image:"php"
            },
            {
                name:"ruby",
                description:this.langTexts.skills.skillsTech["ruby"],
                image:"ruby"
            },
            {
                name:"c#",
                description:this.langTexts.skills.skillsTech["csharp"],
                image:"csharp"
            },
            {
                name:"javascript",
                description:this.langTexts.skills.skillsTech["javascript"],
                image:"javascript"
            },
            {
                name:"node",
                description:this.langTexts.skills.skillsTech["node"],
                image:"nodejs"
            },
            {
                name:"linux",
                description:this.langTexts.skills.skillsTech["linux"],
                image:"linux"
            },
            {
                name:"sql",
                description:this.langTexts.skills.skillsTech["sql"],
                image:"sql"
            },
            {
                name:"docker",
                description:this.langTexts.skills.skillsTech["docker"],
                image:"docker"
            },
            {
                name:"git",
                description:this.langTexts.skills.skillsTech["git"],
                image:"git"
            },
            {
                name:"mongo",
                description:this.langTexts.skills.skillsTech["mongo"],
                image:"mongodb"
            }
        ],
        content:[
            {
                name:"data",
                texts:[
                    "Extraccion, tratamiento y carga de Datos",
                    "Analisis estadistico Predictivo y Descriptivo de Datos",
                    "Manejo de Bases de Datos Relacionales y No Relacionales"
                ]
            },
            {
                name:"web",
                texts:[
                    "Desarrollo de Aplicaciones Web y Microservicios",
                ]
            },
            {
                name:"movil",
                texts:[
                    "Desarrollo de Aplicaciones Moviles"
                ]
            },
            {
                name:"desktop",
                texts:[
                    "Desarrollo de Aplicaciones Desktop entorno Linux",
                    "Integracion y Automatizacion de procesos",
                ]
            }
        ]
    }
    ,
    jobs:{
    title:"trabajos",
    content:{
        jobs:[
            {
                place:"Hospital San Ignacio",
                position:"Tecnico de Soporte TI",
                city:"Bogota",
                description:"Desarrollo de Aplicaciones Web y Microservicios",
                date:"2021-2022",
                image:"husi"
            },
            {
                place:"Risk Posibble",
                position:"Data Enginer & Software Developer",
                city:"Miami, Florida (remoto)",
                description:"Desarrollo de Aplicaciones Web y Microservicios",
                date:"2022-2023",
                image:"none"

            },
            {
                place:"Biznaga Media",
                position:"Software Developer",
                city:"Fort Lauderdale, Florida (remoto)",
                description:"Desarrollo de Aplicaciones Web y Microservicios",
                date:"2023-2024",
                image:"biznaga"

            },
            {
                place:"Tulpep",
                position:"Software Developer",
                city:"Bogota (remoto)",
                description:"Desarrollo de Aplicaciones Web y Microservicios",
                date:"2023-2024",
                image:"tulpep"
            },
            {
                place:"Symplifica",
                position:"Web Developer",
                city:"Bogota (remoto)",
                description:"Desarrollo de Aplicaciones Web y Microservicios",
                date:"2023-2024",
                image:"symplifica"
            },
            {
                place:"Stradata",
                position:"Software Developer & Data Analitic",
                city:"Medellin (remoto)",
                description:"Desarrollo de Aplicaciones Web y Microservicios",
                date:"2023-2024",
                image:"stradata"
            }
        ],
        projects:[
            {
                name:"Proyecto Decifrar Alfabeto",
                description:"Decifrar palabras y verbos y preposiciones en un Alfabeto 'Diferente'",
                url:"https://colab.research.google.com/drive/12cT7DJaHu13vvtjV8A57oObheXRLPank",
                image:"alphabeth"
            },
            {
                name:"Proyecto Dorean",
                description:"Proyecto guia para Paqueteria de SO familia Debian",
                url:"https://github.com/muluk-code/codes/tree/master/proyecto_Dorean",
                image:"dorean"
            },
            {
                name:"Proyecto Consulta BTC",
                description:"Consulta de eth_btc y ltc_btc",
                url:"https://colab.research.google.com/drive/1T-ym4onI8Ae9zz_XWkccCzo9LNM9xpQh",
                image:"btc"
            },
            {
                name:"Proyectos Estadistica",
                description:"Proyectos con diferentes metodos estadisticos",
                url:"https://colab.research.google.com/drive/1ls_qLQ3Xyb_yo1jDI7KsVOYjKJvnHOgz?usp=sharing",
                image:"estadistica"
            }
        ]
    },
    },
    examples:{
    title:"ejemplos"
    }
            
    }
    
    constructor(texts){
        this.langTexts = texts
    }
}
export function getPresentationSections(texts) {
    const sections = new Sections(texts);
    return sections.sections.presentation;
}
export function getSkillsSections(texts) {
    const sections = new Sections(texts);
    return sections.sections.skills;
}
export function getJobsSections(texts) {
    const sections = new Sections(texts);
    return sections.sections.jobs;
}
export function getExamplesSections(texts) {
    const sections = new Sections(texts);
    return sections.sections.examples;
}