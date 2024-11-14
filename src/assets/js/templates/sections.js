import paths from './../config/paths/paths.js';
import texts from './../texts/es.js';

const sections = {
    lang:"es",
    sections: {
      presentation:{
        title:texts.presentation["title"],
        content:{
            position:texts.presentation["position"],
            name:texts.presentation["name"],
            about:texts.presentation["about"],
            contact:[
                {
                    name:texts.presentation["social"],
                    texts:[
                        [texts.presentation["email1"],""],
                        [texts.presentation["email2"],""]
                    ]
                },
                {
                    name:texts.presentation["github"],
                    texts:[
                        [texts.presentation["muluk"],paths["githubmuluk"]],
                        [texts.presentation["backendev"],paths["githubback"]]
                    ]
                },
                {
                    name:texts.presentation["colab"],
                    texts:[
                        [texts.presentation["colab1"],"https://colab.research.google.com/drive/1T-ym4onI8Ae9zz_XWkccCzo9LNM9xpQh?usp=sharing"],
                        [texts.presentation["colab2"],"https://colab.research.google.com/drive/12cT7DJaHu13vvtjV8A57oObheXRLPank?usp=sharing"],
                        [texts.presentation["colab3"],"https://colab.research.google.com/drive/1ls_qLQ3Xyb_yo1jDI7KsVOYjKJvnHOgz?usp=sharing"],
                    ]
                }
                ,
            ]
        }
      },
      skills:{
        title:texts.skills["title"],
        skillsTech:[
            {
                name:"python",
                description:texts.skills.skillsTech["python"],
                image:"python"
            },
            {
                name:"php",
                description:texts.skills.skillsTech["php"],
                image:"php"
            },
            {
                name:"ruby",
                description:texts.skills.skillsTech["ruby"],
                image:"ruby"
            },
            {
                name:"c#",
                description:texts.skills.skillsTech["csharp"],
                image:"csharp"
            },
            {
                name:"javascript",
                description:texts.skills.skillsTech["javascript"],
                image:"javascript"
            },
            {
                name:"node",
                description:texts.skills.skillsTech["node"],
                image:"nodejs"
            },
            {
                name:"linux",
                description:texts.skills.skillsTech["linux"],
                image:"linux"
            },
            {
                name:"sql",
                description:texts.skills.skillsTech["sql"],
                image:"sql"
            },
            {
                name:"docker",
                description:texts.skills.skillsTech["docker"],
                image:"docker"
            },
            {
                name:"git",
                description:texts.skills.skillsTech["git"],
                image:"git"
            },
            {
                name:"mongo",
                description:texts.skills.skillsTech["mongo"],
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
  };
export default sections;