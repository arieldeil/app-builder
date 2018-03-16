import reducer from 'state/fragments/reducer';
import {
  setSelectedFragment, setFragments,
  setWidgetTypes, setPlugins,
} from 'state/fragments/actions';
import {
  GET_FRAGMENT_OK, LIST_FRAGMENTS_OK_PAGE_1, WIDGET_TYPES_OK,
  PLUGINS_OK,
} from 'test/mocks/fragments';

const FRAGMENT_PAYLOAD = LIST_FRAGMENTS_OK_PAGE_1.payload;
const WIDGET_TYPES_PAYLOAD = WIDGET_TYPES_OK.payload;
const PLUGINS_PAYLOAD = PLUGINS_OK.payload;


describe('fragments/reducer', () => {
  const state = reducer();

  it('should return an object', () => {
    expect(typeof state).toBe('object');
  });

  describe('after action SET_SELECTED', () => {
    let newState;
    beforeEach(() => {
      newState = reducer(state, setSelectedFragment(GET_FRAGMENT_OK.payload));
    });

    it('should define the fragment payload', () => {
      expect(newState.selected).toEqual(GET_FRAGMENT_OK.payload);
    });
  });

  describe('list reducer', () => {
    it('should return an object', () => {
      expect(typeof state.list).toBe('object');
      expect(state.list instanceof Array).toBe(true);
    });

    describe('after action SET_FRAGMENTS', () => {
      it('should define fragmentList', () => {
        const newState = reducer({}, setFragments(FRAGMENT_PAYLOAD));
        expect(newState.list).toHaveLength(2);
      });
    });
  });

  describe('after action SET_WIDGET_TYPES', () => {
    let newState;
    beforeEach(() => {
      newState = reducer(state, setWidgetTypes(WIDGET_TYPES_PAYLOAD));
    });
    it('should define the widgetTypes payload', () => {
      expect(newState.widgetTypes).toEqual(WIDGET_TYPES_PAYLOAD);
    });
  });
  describe('after action SET_PLUGINS', () => {
    let newState;
    beforeEach(() => {
      newState = reducer(state, setPlugins(PLUGINS_PAYLOAD));
    });
    it('should define the plugins payload', () => {
      expect(newState.plugins).toEqual(PLUGINS_PAYLOAD);
    });
  });
});