import styled from 'styled-components';
import { Colors } from '../constants';

const SearchInput = styled.input`
  font-size: inherit;
  height: 45px;
  line-height: 45px;
  padding: 5px;
  flex: 1;
  border-color: ${Colors.lightBlue};
  border-style: solid;
  border-width: 2px 0 2px 2px;
  outline: none;

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${Colors.gray};
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: ${Colors.gray};
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: ${Colors.gray};
  }
  :-moz-placeholder { /* Firefox 18- */
    color: ${Colors.gray};
  }
`;

export default SearchInput;
