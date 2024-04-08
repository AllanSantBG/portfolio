import { FaGithub, FaLinkedin } from "react-icons/fa"
import Button from "./components/Button"
import ProjectCard from "./components/ProjectCard"
import ListSkills from "./components/ListSkills"
import ListFooter from "./components/ListFooter"
import SectionTitle from "./components/SectionTitle"
import Input from "./components/Input"

export default function App() {
  return (
    <>
      {/* Header */}
      <header className="flex absolute w-full justify-center bg-lightGray">
        <img
          src="./src/assets/logo_header.svg"
          alt="logo"
          className="w-32 lg:w-64"
        />
      </header>
      {/* Main */}
      <main>
        {/* Section Hero */}
        <section
          id="hero"
          className="flex flex-col justify-center font-bold min-h-svh p-8 gap-4 uppercase"
        >
          <h1 className="text-4xl lg:text-8xl text-black">
            Helleson Allan <br /> Sant'Ana
          </h1>
          <h2 className="text-2xl lg:text-4xl text-black">
            Desenvolvedor Full Stack
          </h2>
          <div className="flex gap-4 text-white *:bg-gradient-to-r *:from-yellow *:to-red">
            <Button text="Currículo" />
            <Button text="Contato" link="#contact" />
          </div>
        </section>
        {/* Section Projects */}
        <section
          id="projects"
          className="bg-lightGray p-8 gap-4 flex flex-col min-h-[100svh]"
        >
          <div className="flex items-center justify-between gap-8">
            <SectionTitle text="Projetos" color="black" />
            <Button
              icon={FaGithub}
              text="GitHub"
              className="bg-github text-white"
            />
          </div>
          <div className="grid gap-4 lg:grid grid-cols-1 lg:grid-cols-3 grid-rows-2">
            <ProjectCard
              name="Nome do Projeto"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
        quisquam. Aspernatur autem nulla similique quia suscipit. Pariatur ullam
        sint nihil?"
            />
            <ProjectCard
              name="Nome do Projeto"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
        quisquam. Aspernatur autem nulla similique quia suscipit. Pariatur ullam
        sint nihil?"
            />
            <ProjectCard
              name="Nome do Projeto"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
        quisquam. Aspernatur autem nulla similique quia suscipit. Pariatur ullam
        sint nihil?"
            />
            <ProjectCard
              name="Nome do Projeto"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
        quisquam. Aspernatur autem nulla similique quia suscipit. Pariatur ullam
        sint nihil?"
            />
            <ProjectCard
              name="Nome do Projeto"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
        quisquam. Aspernatur autem nulla similique quia suscipit. Pariatur ullam
        sint nihil?"
            />
            <ProjectCard
              name="Nome do Projeto"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
        quisquam. Aspernatur autem nulla similique quia suscipit. Pariatur ullam
        sint nihil?"
            />
          </div>
        </section>
        {/* Section Skills */}
        <section
          id="skills"
          className="p-8 gap-8 bg-gradient-to-r from-yellow to-red text-white flex flex-col justify-center min-h-[40svh]"
        >
          <SectionTitle text={"Habilidades"} />
          <div className="flex flex-row flex-wrap gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl lg:text-2xl font-semibold">
                Linguagens, Frameworks e Bibliotecas
              </h3>
              <div className="flex lg:flex-row gap-8">
                <ListSkills list={["Python", "HTML", "CSS", "JavaScript"]} />
                <ListSkills list={["React", "Node.js", "Ionic", "Angular"]} />
                <ListSkills
                  list={["Kotlin", "Sass", "Tailwind", "Bootstrap"]}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl lg:text-2xl font-semibold">
                Ferramentas e Outros
              </h3>
              <div className="flex gap-8">
                <ListSkills
                  list={["VS Code", "Android Studio", "Figma", "Vite"]}
                />
                <ListSkills list={["Git", "GitHub", "JSON", "API"]} />
              </div>
            </div>
          </div>
        </section>
        {/* Section About */}
        <section
          id="about"
          className="p-8 bg-white text-black flex flex-col justify-center gap-8 min-h-[40svh]"
        >
          <SectionTitle text={"Sobre Mim"} />
          <p className="font-medium text-xl lg:text-2xl lg:w-3/4">
            Sou um entusiasta da programação apaixonado por resolver problemas e
            criar soluções inovadoras. Minha jornada começou no ensino médio,
            onde fiz um curso técnico em programação. Desde então, tenho
            explorado linguagens como HTML, CSS, JavaScript, Kotlin e TypeScript
            sempre em busca de desafios que me permitam aprender e crescer como
            profissional. Estou ansioso para aplicar minhas habilidades em um
            ambiente profissional e contribuir para o sucesso da equipe.
          </p>
        </section>
        {/* Section Contact */}
        <section
          id="contact"
          className="p-8 bg-black text-white flex flex-col justify-center gap-8 min-h-[70svh]"
        >
          <div className="flex justify-between items-center gap-8">
            <SectionTitle text="Contato" />
            <Button
              icon={FaLinkedin}
              text="Linkedin"
              className="bg-linkedin text-white"
            />
          </div>
          <form className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="grid gap-8 w-full">
                <Input type="text" idAndName="name" placeHolder="Nome" />
                <Input type="email" idAndName="email" placeHolder="Email" />
                <Input type="text" idAndName="subject" placeHolder="Assunto" />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Mensagem"
                cols="30"
                rows="10"
                className="bg-zinc-800 p-2 w-full focus:outline focus:outline-1 focus:outline-white"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <input
                type="submit"
                value="Enviar"
                className="uppercase text-black bg-white font-semibold w-full lg:w-auto py-4 px-16 cursor-pointer transition-all hover:rounded-3xl"
              />
            </div>
          </form>
        </section>
      </main>
      {/* Footer */}
      <footer className="p-8 bg-lightGray flex justify-between gap-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 text-grey-900 text-xs lg:text-base">
          <img
            src="./src/assets/logo_footer.svg"
            alt="logo"
            className="w-3/5 lg:w-1/4 "
          />
          <p>
            Este projeto foi desenvolvido a partir do{" "}
            <span className="font-semibold">React.js</span> e do{" "}
            <span className="font-semibold">Tailwind</span>
            <br />
            <br />© 2024 Helleson Allan Sant’Ana. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex my-auto flex-wrap gap-8 text-xs lg:text-base text-black">
          <ListFooter
            title={"Contato"}
            list={["hellesonallan20@gmail.com", "(81) 99694-9664"]}
          />
          <ListFooter
            title={"Seções"}
            list={["Início", "Projetos", "Sobre Mim", "Contato"]}
          />
          <ListFooter
            title={"Links"}
            list={["Currículo", "GitHub", "LinkedIn"]}
          />
        </div>
      </footer>
    </>
  )
}
