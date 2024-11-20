<template lang="pug">
  #examples(class="section")
    section
      .containerSections
        .headerSection
          |{{ title }}
        .sectionSingle(class="itemsCenter")
          div(class="card gridExamples")
            .itemBar(class="headerCard itemsCenter")
              div(class="itemsCenter")
                input(id="inputExample" type="text" class="itemsTitle")
              
            .itemSectionA(class="headerCard itemsCenter")
              div(class="itemsCenter bottonA" @click="sendPromptSimple()")|Send
            .itemMenu(class="headerCard")
            #SectionExample(class="itemSection")
              ChartSimplePrompt(
                v-bind:data="comparative" 
                v-bind:title="titlePromptSection" 
                v-bind:image="imagePrompSection" 
                v-bind:summary="summaryPromptSection" 
                v-bind:news="newsPromptSection"
                v-bind:lineColors="lineColorsPromptSection"
                v-bind:comparativeDescription="comparativePromptSection" 
                v-if="res"
                )
          .footerSection
            div
                |+
</template>

<script>
import ChartSimplePrompt from "./chartSimplePrompt.vue";

export default {
  name: "ExamplesContainer",
  data() {
    return {
      title: "Examples",
      titlePromptSection: "",
      imagePrompSection: "",
      summaryPromptSection: "",
      newsPromptSection: [],
      lineColorsPromptSection: [],
      comparativePromptSection: "",
      res: false,
      comparative: [
        [
          "Año",
          "Crecimiento del PIB (%)",
          "Tasa de inflación (%)",
          "Tasa de desempleo (%)",
        ],
        ["2021", "10.6", "5.6", "14.2"],
        ["2022", "7.5", "9.0", "11.0"],
        ["2023", "3.2", "8.5", "10.5"],
      ],
    };
  },
  computed: {},
  props: {},
  methods: {
    async sendPromptSimple() {
      const prompt = document.getElementById("inputExample").value;
      console.log("22", prompt);
      if (prompt == "") {
        return alert("Please enter a prompt");
      }
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Access-Control-Allow-Origin", "*");
      const configRequest = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          prompt: prompt,
          lang: "es",
        }),
      };
      const url = "https://web-vvno.onrender.com/prompt";
      try {
        const response = await fetch(url, configRequest);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        this.res = true;
        this.titlePromptSection = json.topic;
        this.imagePrompSection = json.image;
        this.summaryPromptSection = json.summary;
        this.newsPromptSection = json.news;
        this.comparative = json.comparative;
        this.lineColorsPromptSection = json.colors;
        this.comparativePromptSection = json.comparative_description;
      } catch (error) {
        console.error(error.message);
      }
    },

    generateTemplateExample(container, title, urlpath, description) {
      const urlImage =
        urlpath == undefined ? "https://via.placeholder.com/400" : urlpath;
      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.innerText = title;
      container.appendChild(headerDiv);

      // Create sections container
      const sectionsDiv = document.createElement("div");
      sectionsDiv.className = "sections";
      container.appendChild(sectionsDiv);

      // Create Section A
      const sectionADiv = document.createElement("div");
      sectionADiv.className = "sectionA";

      // Create image div
      const imgDiv = document.createElement("div");
      const imgElement = document.createElement("img");
      imgElement.src = urlImage; // Placeholder image
      imgDiv.appendChild(imgElement);
      sectionADiv.appendChild(imgDiv);

      // Create text div
      const textDiv = document.createElement("div");
      textDiv.className = "text";
      textDiv.innerText = description;
      sectionADiv.appendChild(textDiv);

      // Add Section A to sections
      sectionsDiv.appendChild(sectionADiv);

      // Create Section B
      const sectionBDiv = document.createElement("div");
      sectionBDiv.className = "sectionB";

      // Create left div in Section B
      const leftDiv = document.createElement("div");
      leftDiv.className = "leftDiv";

      // Create horizontal div inside left div
      const horizontalDiv = document.createElement("div");
      horizontalDiv.className = "horizontalDiv";

      // Create three child divs
      for (let i = 0; i < 3; i++) {
        const childDiv = document.createElement("div");
        childDiv.className = "childDiv";
        childDiv.innerText = `Child ${i + 1}`;
        horizontalDiv.appendChild(childDiv);
      }

      // Add horizontal div to left div
      leftDiv.appendChild(horizontalDiv);

      // Add left div to Section B
      sectionBDiv.appendChild(leftDiv);

      // Add Section B to sections
      sectionsDiv.appendChild(sectionBDiv);
      //return container
    },
    //     sendPromptSimple() {
    //       const res ={
    // 	"topic": "Millonarios FC",
    // 	"summary": "Millonarios FC es un club de fútbol profesional colombiano con sede en Bogotá, fundado en 1946. Es uno de los equipos más exitosos y populares de Colombia, conocido por su rica historia y rivalidades intensas, especialmente con el Atlético Nacional y el Independiente Santa Fe.",
    // 	"comparative": [
    // 		[
    // 			"Año",
    // 			"Títulos",
    // 			"Partidos Jugados",
    // 			"Goles Anotados"
    // 		],
    // 		[
    // 			"2019",
    // 			"15",
    // 			"38",
    // 			"50"
    // 		],
    // 		[
    // 			"2020",
    // 			"15",
    // 			"36",
    // 			"45"
    // 		],
    // 		[
    // 			"2021",
    // 			"15",
    // 			"40",
    // 			"60"
    // 		],
    // 		[
    // 			"2022",
    // 			"15",
    // 			"38",
    // 			"55"
    // 		],
    // 		[
    // 			"2023",
    // 			"15",
    // 			"30",
    // 			"25"
    // 		]
    // 	],
    // 	"comparative_variable": "Año",
    // 	"image": "https://upload.wikimedia.org/wikipedia/en/1/1f/Millonarios_logo.png",
    // 	"news": [
    // 		{
    // 			"path": "https://www.espn.com.co/futbol/nota/_/id/1234567/millonarios-fc-controversia-jugador",
    // 			"value": "El 1 de octubre de 2023, Millonarios FC se vio envuelto en una controversia tras la decisión de no renovar el contrato de uno de sus jugadores clave, lo que generó reacciones encontradas entre los aficionados. La directiva argumentó que la decisión se basó en criterios de rendimiento y sostenibilidad financiera."
    // 		},
    // 		{
    // 			"path": "https://www.eltiempo.com/deportes/futbol-colombiano/millonarios-fc-nueva-contratacion",
    // 			"value": "El 2 de octubre de 2023, Millonarios FC anunció la contratación de un nuevo delantero, que ha sido considerado un gran refuerzo para el equipo. La llegada del jugador ha generado expectativas altas entre los seguidores, quienes esperan que pueda aportar al ataque del equipo en la liga."
    // 		},
    // 		{
    // 			"path": "https://www.sportingnews.com/co/futbol/noticias/millonarios-fc-y-su-rivalidad-con-santa-fe/abc123",
    // 			"value": "El 3 de octubre de 2023, se publicó un artículo que analiza la histórica rivalidad entre Millonarios FC e Independiente Santa Fe, destacando los momentos más intensos y las implicaciones sociales y culturales que ha tenido este enfrentamiento en el fútbol colombiano. La rivalidad sigue siendo un tema candente entre los hinchas."
    // 		}
    // 	],
    // 	"comparative_description": "La comparación se centra en los títulos ganados, los partidos jugados y los goles anotados por Millonarios FC en los últimos años, lo que refleja su rendimiento y consistencia en el fútbol colombiano. Los datos muestran un desempeño sólido, aunque con variaciones en los goles anotados, lo que puede estar relacionado con cambios en la plantilla y tácticas de juego.",
    // 	"colors": [
    // 		"#003DA5",
    // 		"#FFFFFF",
    // 		"#D1A700"
    // 	],
    // 	"phrase": "El equipo de mis amores"
    // }
    //       const prompt = document.getElementById("inputExample").value;
    //       console.log("prompt", prompt);
    //       this.titlePromptSection = res.topic;
    //       this.imagePrompSection = res.image;
    //       this.summaryPromptSection = res.summary;
    //       this.newsPromptSection = res.news;
    //       this.comparative = res.comparative;
    //       this.lineColorsPromptSection = res.colors;
    //       this.comparativePromptSection = res.comparative_description;

    //       //const cont = document.getElementById("SectionExample");

    //       //this.generateTemplateExample(cont, res.topic, res.image, res.summary);
    //       console.log(res);
    //     },
  },
  mounted() {},
  components: {
    ChartSimplePrompt,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sectionContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  width: 100%;
  background-color: lightgrey;
  text-align: center;
  padding: 10px;
}

.sections {
  display: flex;
  width: 100%;
}

.sectionA {
  flex: 0 0 80%;
  display: flex;
  flex-direction: column;
}

.sectionB {
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sectionA img {
  width: 100%;
  height: auto;
}

.text {
  flex: 1;
  padding: 10px;
  background-color: #f0f0f0;
}

.leftDiv {
  width: 18%;
  height: 50%;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}

.horizontalDiv {
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.childDiv {
  flex: 1;
  background-color: lightcoral;
  margin: 2px;
  height: 100%; /* Adjust based on your needs */
}
</style>
