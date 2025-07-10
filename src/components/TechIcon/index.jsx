import { BiLogoTypescript } from "react-icons/bi";
import { FaDocker, FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { RiExternalLinkLine, RiGithubLine, RiNextjsFill } from "react-icons/ri";
import { SiAxios, SiExpress, SiPostgresql, SiPrisma } from "react-icons/si";

const TechIcon = ({ name, hasLink, ...otherProps }) => {
  const title = hasLink ? `${name} (link)` : name;
  const iconsArray = {
    figma: FaFigma,
    nodejs: FaNodeJs,
    react: FaReact,
    nextjs: RiNextjsFill,
    github: RiGithubLine,
    typescript: BiLogoTypescript,
    axios: SiAxios,
    express: SiExpress,
    prisma: SiPrisma,
    postgres: SiPostgresql,
    docker: FaDocker,
    external: RiExternalLinkLine,
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
