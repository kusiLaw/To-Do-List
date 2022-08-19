const toggle = (objIndex, extra = {}) => {
  document.getElementById(`${extra.selfIdExtension}-${objIndex}`).style.display = extra.selfDisplay;
  document.getElementById(`${extra.otherIdExtension}-${objIndex}`).style.display = extra.otherDisplay;
};

export default toggle;