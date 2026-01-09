import classNames from "classnames";
import logo from "@/assets/logo.jpg";

const Logo: GenieType.FC<{
  hideSplit?: boolean;
}> = (props) => {
  const { className, hideSplit } = props;

  return (
    <div className={classNames("flex items-center", className)}>
      <img src={logo} alt="logo" width={20} />
      {!hideSplit && <div className="w-1 h-16 mx-8 bg-[#dbdbde]"></div>}
    </div>
  );
};

export default Logo;
