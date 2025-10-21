import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava } from "react-icons/fa"
import { SiTypescript, SiJavascript, SiExpress, SiReact, SiSpringboot, SiPostgresql, SiMongodb, SiNeo4J, SiElasticsearch } from "react-icons/si"
import abril_image from "./abril_image.jpeg"

const techsgog = [
    { logo: <FaReact />, tecnologia: "React", bg: "bg-rose-500" },
    { logo: <SiReact />, tecnologia: "React Native", bg: "bg-rose-500" },
    { logo: <FaHtml5 />, tecnologia: "HTML", bg: "bg-rose-500" },
    { logo: <FaCss3Alt />, tecnologia: "CSS", bg: "bg-rose-500" },
    { logo: <SiExpress />, tecnologia: "Express.js", bg: "bg-rose-500" },
    { logo: <FaNodeJs />, tecnologia: "Node.js", bg: "bg-rose-500" },
    { logo: <SiTypescript />, tecnologia: "TypeScript", bg: "bg-rose-500" },
    { logo: <SiJavascript />, tecnologia: "JavaScript", bg: "bg-rose-500" },
]

const techsepers = [
    { logo: <FaJava />, tecnologia: "Java", bg: "bg-rose-500" },
    { logo: <SiSpringboot />, tecnologia: "Spring Boot", bg: "bg-rose-500" },
    { logo: <SiPostgresql />, tecnologia: "PostgreSQL", bg: "bg-rose-500" },
    { logo: <SiMongodb />, tecnologia: "MongoDB", bg: "bg-rose-500" },
    { logo: <SiNeo4J />, tecnologia: "Neo4j", bg: "bg-rose-500" },
    { logo: <SiElasticsearch />, tecnologia: "Elasticsearch", bg: "bg-rose-500" },
]

const techswordle = [
    { logo: <FaReact />, tecnologia: "React", bg: "bg-rose-500" },
    { logo: <FaHtml5 />, tecnologia: "HTML", bg: "bg-rose-500" },
    { logo: <FaCss3Alt />, tecnologia: "CSS", bg: "bg-rose-500" },
    { logo: <SiTypescript />, tecnologia: "TypeScript", bg: "bg-rose-500" },
]

const techsaccidenta = [
    { logo: <SiReact />, tecnologia: "React Native", bg: "bg-rose-500" },
    { logo: <SiTypescript />, tecnologia: "TypeScript", bg: "bg-rose-500" },
    { logo: <FaNodeJs />, tecnologia: "Node.js", bg: "bg-rose-500" },
    { logo: <SiExpress />, tecnologia: "Express.js", bg: "bg-rose-500" },
]

export const assets = {
    abril_image,
    techsgog,
    techsepers,
    techswordle,
    techsaccidenta
}