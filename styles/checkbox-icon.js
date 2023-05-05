export default function CheckboxIcon(props) {
  const { isChecked, ...rest } = props;

  return (
    <>
      {isChecked ? (
        <Icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="19"
              height="19"
              fill="#FF0D87"
              stroke="#E5107C"
            />
            <path d="M4 9.5L8.5 14L16.5 6" stroke="white" stroke-width="2" />
          </svg>
        </Icon>
      ) : null}
    </>
  );
}
