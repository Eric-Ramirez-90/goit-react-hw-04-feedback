import PropTypes from 'prop-types';
import { Wrapper, Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
}

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
