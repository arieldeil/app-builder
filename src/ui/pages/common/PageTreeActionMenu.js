import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { DropdownKebab, MenuItem } from 'patternfly-react';
import { PAGE_STATUS_PUBLISHED, PAGE_STATUS_UNPUBLISHED } from 'state/pages/const';

class PageTreeActionMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(handler) {
    return () => handler && handler(this.props.page);
  }

  render() {
    const {
      page, onClickAdd, onClickEdit, onClickConfigure, onClickDetails,
      onClickClone, onClickDelete, onClickPublish, onClickUnpublish,
    } = this.props;

    let disabled = false;
    if (!page.isEmpty && page.status === PAGE_STATUS_PUBLISHED) {
      disabled = true;
    }
    if (page.expanded) {
      disabled = page.hasPublishedChildren;
    }
    const changePublishStatus = page.status === PAGE_STATUS_PUBLISHED ?
      (
        <MenuItem
          disabled={disabled}
          className="PageTreeActionMenuButton__menu-item-unpublish"
          onSelect={this.handleClick(onClickUnpublish)}
        >
          <FormattedMessage id="app.unpublish" />
        </MenuItem>
      ) :
      (
        <MenuItem
          disabled={
            page.status === PAGE_STATUS_UNPUBLISHED && page.parentStatus === PAGE_STATUS_UNPUBLISHED
          }
          className="PageTreeActionMenuButton__menu-item-publish"
          onSelect={this.handleClick(onClickPublish)}
        >
          <FormattedMessage id="app.publish" />
        </MenuItem>
      );

    const renderDeleteItem = () => {
      if (page.status === PAGE_STATUS_PUBLISHED) {
        return null;
      }

      return (
        <MenuItem
          disabled={!page.isEmpty}
          className="PageTreeActionMenuButton__menu-item-delete"
          onSelect={this.handleClick(onClickDelete)}
        >
          <FormattedMessage id="app.delete" />
        </MenuItem>
      );
    };

    return (
      <div>
        <DropdownKebab pullRight id="WidgetListRow-dropown">
          <MenuItem
            className="PageTreeActionMenuButton__menu-item-add"
            onSelect={this.handleClick(onClickAdd)}
          >
            <FormattedMessage id="app.add" />
          </MenuItem>
          <MenuItem
            className="PageTreeActionMenuButton__menu-item-edit"
            onSelect={this.handleClick(onClickEdit)}
          >
            <FormattedMessage id="app.edit" />
          </MenuItem>
          <MenuItem
            className="PageTreeActionMenuButton__menu-item-configure"
            onSelect={this.handleClick(onClickConfigure)}
          >
            <FormattedMessage id="app.configure" />
          </MenuItem>
          <MenuItem
            className="PageTreeActionMenuButton__menu-item-clone"
            onSelect={this.handleClick(onClickClone)}
          >
            <FormattedMessage id="app.clone" />
          </MenuItem>
          { changePublishStatus }
          <MenuItem
            className="PageTreeActionMenuButton__menu-item-details"
            onSelect={this.handleClick(onClickDetails)}
          >
            <FormattedMessage id="app.details" />
          </MenuItem>
          {renderDeleteItem()}
        </DropdownKebab>
      </div>
    );
  }
}

PageTreeActionMenu.propTypes = {
  page: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
  onClickAdd: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickConfigure: PropTypes.func,
  onClickDetails: PropTypes.func,
  onClickClone: PropTypes.func,
  onClickDelete: PropTypes.func,
  onClickPublish: PropTypes.func,
  onClickUnpublish: PropTypes.func,
};

PageTreeActionMenu.defaultProps = {
  onClickAdd: null,
  onClickEdit: null,
  onClickConfigure: null,
  onClickDetails: null,
  onClickClone: null,
  onClickDelete: null,
  onClickPublish: null,
  onClickUnpublish: null,
};

export default PageTreeActionMenu;
