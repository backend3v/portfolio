const texts = {
    presentation: {
        title: "About Me",
        contact: "Contact",
        social: "Social Networks",
        github: "GitHub Repositories",
        colab: "Colab Notebooks",
        position: "Software Developer",
        name: "Edward Camilo Gonzalez",
        about: "With over 7 years of experience in various startups including Stradata, Symplifica (Top 5 most innovative companies in Latin America by FAST COMPANY 2023), Mangosoft, and Tulpep. I have developed software for various industries, acquiring the experience and ability to work autonomously.",
        email1: "edward1577@gmail.com",
        email2: "backender.dev@gmail.com",
        linkedin: "LinkedIn",
        muluk: "Muluk Code",
        backendev: "Backendev",
        colab1: "Colab 1",
        colab2: "Colab 2",
        colab3: "Colab 3tt"
    },
    skills: {
        title: "Skills",
        skillsTech: {
            python: "Programming language. Widely used in web development, data analysis, artificial intelligence, and scientific computing.",
            php: "Programming language. Especially suitable for creating dynamic web pages.",
            ruby: "Programming language. Often used in web development, particularly with the Ruby on Rails framework.",
            csharp: "Programming language. Primarily used for developing Windows applications and games, especially with the .NET framework.",
            javascript: "Programming language. Used to create interactive web pages. It is an essential part of web development alongside HTML and CSS.",
            node: "Runtime environment for server-side JavaScript. Widely used for building scalable network applications.",
            sql: "Domain-specific structured query language used for managing and manipulating relational databases.",
            mongo: "NoSQL database that uses a document-oriented data model. Ideal for scalability, flexibility, and handling large amounts of unstructured data.",
            linux: "Open-source operating system based on Unix architecture. Known for its stability, security, and flexibility. Ideal for servers and development environments.",
            git: "Distributed version control system used to track changes in source code during software development. Enables collaborative development.",
            docker: "Platform that allows developers to automate the deployment of applications within lightweight, portable containers."
        },
        content: [
            {
                name: "Data Analysis and Engineering",
                texts: [
                    "Data Extraction, Treatment, and Loading",
                    "Predictive and Descriptive Statistical Analysis of Data",
                    "Management of Relational and Non-Relational Databases",
                    "Data Visualization with tools like Tableau and Power BI",
                    "Implementation of ETL (Extraction, Transformation, and Loading)",
                    "Optimization of SQL queries to improve performance",
                    "Development of Machine Learning models",
                    "Big Data Analysis using Hadoop and Spark",
                    "Development of interactive dashboards"
                ]
            },
            {
                name: "Web Development",
                texts: [
                    "Development of Web Applications and Microservices",
                    "Implementation of RESTful APIs",
                    "Frontend Development using frameworks like React and Angular",
                    "Backend Development with Node.js and Express",
                    "Integration of SQL and NoSQL databases in web applications",
                    "Optimization of web performance and SEO",
                    "Development of responsive applications with HTML, CSS, and JavaScript",
                    "Automated testing and quality control",
                    "Implementation of authentication and authorization in web applications",
                    "Deployment of applications in the cloud"
                ]
            },
            {
                name: "Mobile Development",
                texts: [
                    "Development of Mobile Applications for iOS and Android",
                    "Implementation of REST API in mobile applications",
                    "Integration of cloud services in mobile applications",
                    "Optimization of performance and user experience on mobile",
                    "Testing and debugging mobile applications",
                    "Development of accessible applications",
                    "Use of analytics and monitoring tools for applications",
                    "Deployment and publication in the App Store and Google Play"
                ]
            },
            {
                name: "Desktop Applications",
                texts: [
                    "Development of Desktop Applications in Linux environment",
                    "Integration and Automation of processes",
                    "Development of cross-platform applications with Electron",
                    "Creation of graphical user interfaces (GUI) with Qt and Glade",
                    "Implementation of local databases in desktop applications",
                    "File and storage system management",
                    "Development of system administration tools",
                    "Integration of web services in desktop applications"
                ]
            }
        ]
    },
    jobs: {
        title: "Jobs",
        jobs: [
            {
                name: "Hospital San Ignacio",
                position: "IT Support Technician",
                description: [],
            },
            {
                name: "Risk Possible",
                position: "Data Engineer & Software Developer",
                description: [
                    "Software development, Insurance industry, Data ETL, Web scraping, and SQL query optimization",
                    "Python (Scrapy, Requests, Pandas), Azure CosmosDB, Bash, Linux, Docker"
                ],
            },
            {
                name: "Biznaga Media",
                position: "Software Developer",
                description: [
                    "Development of Web Applications, Rich media, and marketing campaign analysis services by Geolocation",
                    "PHP, PowerShell, JavaScript, Bash, Git"
                ],
            },
            {
                name: "Tulpep - Symplifica",
                position: "Software Developer",
                description: [
                    "Development of Symplifica's web application 2.0",
                    "Python (Django), Ruby (On Rails), PHP (Symphony), Bash, Git, Docker, AWS, Linux"
                ]
            },
            {
                name: "Stradata",
                position: "Data Analyst and Software Developer",
                description: [
                    "Software development, Integration of ML models, and maintenance of Laravel application",
                    "Python (SciKit Learn), MongoDB, PHP (Laravel), JavaScript, Bash, Git, Docker, AWS, Linux"
                ]
            },
            {
                name: "Mango Soft",
                position: "Software Developer",
                description: [
                    "Development and maintenance of software for the health and sports industry",
                    "Python, AWS (CloudFormation, Lambda functions, APIs, SQS, EventBridge), Blockchain, Solidity, JavaScript (Angular), TypeScript, Docker, Linux, Git, Bash, Docker"
                ]
            },
        ],
        projects: [
            {
                name: "Notary Module (Mango Soft)",
                description: [
                    "Development of a module for document notarization. I conducted a study on blockchain technologies, proposed the stack and services involved in the solution. I developed several examples of smart contracts in Solidity to test different types of contracts and find the suitable one for this purpose.",
                    "Solidity, Python, DynamoDB, AWS Terraform, Docker"
                ]
            },
            {
                name: "Forms Module (Mango Soft)",
                description: [
                    "Development of a module for creating forms, Drag & Drop interface for Widgets. In this project, I participated in the Backend, some features in the Frontend, and the script to deploy this module for various clients (Each module was deployed in a separate account for each client on AWS). The project was successfully completed and is in production.",
                    "Python, Angular, TypeScript, AWS, Terraform, Docker, Git"
                ]
            },
            {
                name: "SAGRILAFT Application (Stradata)",
                description: [
                    "Creation of AI models to apply SAGRILAFT regulations and identify risks or non-compliance. I supported the Data Science department in tasks such as data preparation (ETL), troubleshooting execution errors, and managing the database where we stored the results of each model's execution. The project was successfully completed on time.",
                    "Python, MongoDB, Azure"
                ]
            },
            {
                name: "Web 2.0 Application (Symplifica)",
                description: [
                    "Development of a Web 2.0 Application, taking into account the experience and current state of the version at that time. I participated from planning, diagramming, technology research to development and deployment of the application. The project was delivered on time and is in production.",
                    "PHP (Symphony), Python, Ruby on Rails, PostgreSQL, Docker, AWS"
                ]
            },
            {
                name: "Insurance Policy Analysis (Risk Possible)",
                description: [
                    "Development of scripts to scrape different sources to detect possible risks in insurance policies. The project lasted 1 year; unfortunately, this was one of the ventures affected by the economic crisis in the US around 2018 and was liquidated.",
                    "Python, Azure CosmosDB, PostgreSQL"
                ],
            },
        ]
    },
    examples: {
        title: "Examples"
    }
};
export default texts;