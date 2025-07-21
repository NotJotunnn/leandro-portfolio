import { FaDocker, FaFigma, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { RiExternalLinkLine, RiGithubLine, RiNextjsFill } from "react-icons/ri";
import {
  SiAxios,
  SiEslint,
  SiExpress,
  SiJest,
  SiJsonwebtokens,
  SiKnexdotjs,
  SiPostgresql,
  SiPrisma,
  SiReactrouter,
  SiRedux,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const TechIcon = ({ name, hasLink, ...otherProps }) => {
  const title = hasLink ? `${name} (link)` : name;
  const iconsArray = {
    figma: FaFigma,
    nodejs: FaNodeJs,
    react: FaReact,
    nextjs: RiNextjsFill,
    github: RiGithubLine,
    typescript: SiTypescript,
    axios: SiAxios,
    express: SiExpress,
    prisma: SiPrisma,
    postgres: SiPostgresql,
    docker: FaDocker,
    external: RiExternalLinkLine,
    reactRouter: SiReactrouter,
    vite: SiVite,
    redux: SiRedux,
    sass: FaSass,
    knex: SiKnexdotjs,
    jest: SiJest,
    jwt: SiJsonwebtokens,
    eslint: SiEslint,
  };

  const IconComponent = iconsArray[name];

  if (!IconComponent) return <span>{name}</span>;

  return (
    <abbr data-title={title}>
      <IconComponent {...otherProps} />
    </abbr>
  );
};

export default TechIcon;
