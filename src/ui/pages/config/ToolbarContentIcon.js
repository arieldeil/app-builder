import React from 'react';
import PropTypes from 'prop-types';
import { WIDGET_LIST } from 'state/page-config/const';


const ToolbarContentIcon = ({
  content, position, toggleExpanded, handleClick,
}) => {
  const iconClass = ['ToolbarContentIcon', `ToolbarContentIcon--${content}-${position}`];
  let target = content;

  if (content === 'pages') {
    if (position === 'left') {
      iconClass.push('drawer-pf-toogle-expand');
    } else if (position === 'right') {
      target = WIDGET_LIST;
    }
    if (toggleExpanded) {
      iconClass[1] = `ToolbarContentIcon--${content}-${position}-expanded`;
    }
  }

  return (
    <i
      className={iconClass.join(' ').trim()}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      onClick={() => { handleClick(target); }}
    />
  );
};

ToolbarContentIcon.propTypes = {
  handleClick: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  content: PropTypes.oneOf(['widgets', 'pages']).isRequired,
  toggleExpanded: PropTypes.bool,
};

ToolbarContentIcon.defaultProps = {
  handleClick: () => {},
  toggleExpanded: false,
};

export default ToolbarContentIcon;
