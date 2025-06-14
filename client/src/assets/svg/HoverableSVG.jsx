import { ReactSVG } from "react-svg";

const HoverableSVG = ({ src }) => {



  return (
      <ReactSVG
        src={src}
        beforeInjection={(svg) => {
          svg.classList.add("hover:[&>g>path]:fill-primary", "transition-all", "duration-200");
        }}
      />
  );
};

export default HoverableSVG;