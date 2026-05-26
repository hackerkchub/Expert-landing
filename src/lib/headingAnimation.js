const headingDirections = [
  "heading-left",
  "heading-top",
  "heading-right",
  "heading-bottom",
];

export function getHeadingAnimation(index = 0, offset = 0, extraClassName = "") {
  const sequence = (offset + index) % headingDirections.length;

  return {
    className: ["heading-animate", headingDirections[sequence], extraClassName]
      .filter(Boolean)
      .join(" "),
    style: {
      "--i": sequence + 1,
    },
  };
}
