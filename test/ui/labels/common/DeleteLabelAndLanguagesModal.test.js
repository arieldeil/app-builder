import React from 'react';

import 'test/enzyme-init';
import { shallow } from 'enzyme';
import DeleteLabelAndLanguagesModal from 'ui/labels/common/DeleteLabelAndLanguagesModal';
import { Button } from 'patternfly-react';

const onConfirmDelete = jest.fn();

const props = {
  onConfirmDelete,
  info: {
    code: 'label_code',
    type: 'label',
  },
};

describe('DeleteLabelAndLanguagesModal', () => {
  let component;
  beforeEach(() => {
    component = shallow(<DeleteLabelAndLanguagesModal />);
  });

  describe('component with required props only', () => {
    it('renders without crashing', () => {
      expect(component).toExist();
    });

    it('has an EmptyState main container', () => {
      expect(component.find('EmptyState')).toExist();
    });

    it('has an EmptyStateIcon', () => {
      const emptyStateIcon = component.find('EmptyStateIcon');
      expect(emptyStateIcon).toExist();
      expect(emptyStateIcon.props()).toHaveProperty('name', 'exclamation');
      expect(emptyStateIcon.props()).toHaveProperty('type', 'fa');
      expect(emptyStateIcon.hasClass('DeleteLabelAndLanguagesModal__icon')).toBe(true);
    });

    it('has an EmptyStateTitle', () => {
      const emptyStateTitle = component.find('EmptyStateTitle');
      expect(emptyStateTitle).toExist();
    });

    it('has an EmptyStateInfo', () => {
      const emptyStateInfo = component.find('EmptyStateInfo');
      expect(emptyStateInfo).toExist();
      expect(emptyStateInfo.hasClass('DeleteLabelAndLanguagesModal__info')).toBe(true);
    });
  });

  describe('component with extra props', () => {
    it('renders info prop', () => {
      component = shallow(<DeleteLabelAndLanguagesModal {...props} />);
      const title = component.find('EmptyStateTitle');
      expect(title.render().text()).toContain('label');
    });

    it('clicking on delete button calls onConfirmDelete', () => {
      component = shallow(<DeleteLabelAndLanguagesModal {...props} />);
      const buttonsProps = component.prop('buttons')[0].props;
      const deleteButton = shallow(<Button {...buttonsProps} />);
      deleteButton.simulate('click');
      expect(onConfirmDelete).toHaveBeenCalled();
    });
  });
});
