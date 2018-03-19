import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import InfiniteTable from './InfiniteTable';

Enzyme.configure({ adapter: new Adapter() });


// function setup() {
//   const props = {
//     fetchPage: function () { },
//     list: [],
//     hasMore: false
//   }

//   const enzymeWrapper = mount(<InfiniteTable {...props} />)

//   return {
//     props,
//     enzymeWrapper
//   }
// }

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfiniteTable list={[]}
    fetchPage={() => { }}
    hasMore={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders three .infinite-table element', () => {
  const wrapper = shallow(<InfiniteTable list={[]}
    fetchPage={() => { }}
    hasMore={false} />);
  expect(wrapper.find('.infinite-table')).toHaveLength(1);
});
