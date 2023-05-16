type Props = {
  icon: string;
  customClass: string | undefined | null;
  selector: Function;
  optionName: string;
};

const Option: React.FC<Props> = ({
  icon,
  customClass,
  selector,
  optionName,
}) => {
  return (
    <div
      className={"option " + customClass}
      onClick={() => selector(optionName)}
    >
      <div className="icon-box">
        <img src={icon} alt="icon:menu option" />
      </div>
    </div>
  );
};

export default Option;
