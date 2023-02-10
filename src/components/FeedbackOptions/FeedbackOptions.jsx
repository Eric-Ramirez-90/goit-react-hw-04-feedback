import PropTypes from 'prop-types';
import { Wrapper, Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Wrapper>
      {options.map(option => {
        return (
          <Button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </Wrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
